import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { apps } from "../appstore/data/apps.js";
import { casestudiesData } from "../casestudies/data/casestudiesData.js";
import {
  features,
  technicalFeatures,
  integrationFeatures,
} from "../features/data/features.js";
import { teamData } from "../team/data/teamData.js";

const ChatbotContext = createContext();

// Function to extract text content from a component
const extractContent = async (componentPath) => {
  try {
    const module = await import(componentPath);
    return module.default?.description || module.default?.content || null;
  } catch (error) {
    console.error(`Error loading component: ${componentPath}`, error);
    return null;
  }
};

// Function to get component content based on the question
const getComponentContent = async (question) => {
  const normalizedQuestion = question.toLowerCase();

  // Map of keywords to component information
  const componentMap = {
    privacy: {
      path: "../privacy/Privacy",
      name: "Privacy",
      fallbackContent:
        "We take your privacy seriously. Our privacy policy outlines how we collect, use, and protect your data.",
    },
    terms: {
      path: "../terms/Terms",
      name: "Terms",
      fallbackContent:
        "Our terms of service outline the rules and guidelines for using our platform.",
    },
    support: {
      path: "../support/Support",
      name: "Support",
      fallbackContent:
        "Our support team is available to help you with any questions or issues you may have.",
    },
    faq: {
      path: "../faq/Faq",
      name: "FAQ",
      fallbackContent:
        "Check our FAQ section for answers to commonly asked questions about our platform.",
    },
    case: {
      path: "../casestudies/Casestudies",
      name: "Case Studies",
      fallbackContent:
        "Explore our case studies to see how our platform has helped other businesses succeed.",
    },
    demo: {
      path: "../demo/RequestDemo",
      name: "Demo",
      fallbackContent:
        "You can request a demo to see our platform in action and learn how it can benefit your business.",
    },
  };

  // Find matching component based on keywords
  for (const [keyword, info] of Object.entries(componentMap)) {
    if (normalizedQuestion.includes(keyword)) {
      try {
        // Try to get actual content from the component
        const content = await extractContent(info.path);
        return {
          found: true,
          message: content || info.fallbackContent,
          component: info.name,
        };
      } catch (error) {
        return {
          found: true,
          message: info.fallbackContent,
          component: info.name,
        };
      }
    }
  }

  return { found: false };
};

// Function to normalize text for comparison
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
};

// Function to check if a question contains all words from a name
const containsAllWords = (question, name) => {
  const normalizedQuestion = normalizeText(question);
  const nameWords = normalizeText(name).split(" ");
  return nameWords.every((word) => normalizedQuestion.includes(word));
};

// Function to get app or case study content
const getSpecificContent = (question) => {
  // Check for specific app questions
  const appMatch = apps.find((app) => containsAllWords(question, app.name));
  if (appMatch) {
    return {
      found: true,
      message: `${appMatch.name} is one of our featured applications. Here is a brief overview:\n
      ${appMatch.description}\n
      You can find more details and pricing information on the App Store page.`,
    };
  }

  // Check for specific case study questions
  const caseStudyMatch = casestudiesData.find((study) =>
    containsAllWords(question, study.name)
  );
  if (caseStudyMatch) {
    return {
      found: true,
      message: `${caseStudyMatch.name} Case Study:\n
      Challenge: ${caseStudyMatch.challenge}\n
      Solution: ${caseStudyMatch.solution}\n
      Results: ${caseStudyMatch.results}\n
      You can find the complete case study on our Case Studies page.`,
    };
  }
  if (normalizeText(question).includes("feature")) {
    return {
      found: true,
      message: `Our platform offers the following features:\n${features
        .map((feature) => feature.title)
        .join(", ")}, Technical Features : ${technicalFeatures
        .map((feature) => feature.title)
        .join(", ")}, Integration Features : ${integrationFeatures
        .map((feature) => feature.title)
        .join(", ")}`,
    };
  }
  if (normalizeText(question).includes("team")) {
    return {
      found: true,
      message: `Our team consists of the following members:\n${teamData
        .map((member) => `${member.name} - ${member.title}`)
        .join(", ")}`,
    };
  }
  function findTeamMember(question) {
    const normalizedQuestionWords = normalizeText(question).split(" "); // Split question into words

    // Find a team member whose title contains any word from the question
    const matchedMember = teamData.find((member) => {
        const titleWords = normalizeText(member.title).split(" "); // Split title into words
        return normalizedQuestionWords.some(word => titleWords.includes(word)); // Check for any common words
    });

    if (matchedMember) {
        return {
            found: true,
            message: `You asked about ${matchedMember.title}. Here are the details:\n${matchedMember.name} - ${matchedMember.title}`
        };
    } else {
        return {
            found: false,
            message: "No matching team member found for your query."
        };
    }
  }
  return findTeamMember(question);
};

const findResponse = async (message) => {
  try {
    // First, check if we have a component that matches the question
    const componentResult = await getComponentContent(message);
    if (componentResult.found) {
      return componentResult.message;
    }

    // Then, check for specific app or case study content
    const specificContent = getSpecificContent(message);
    if (specificContent && specificContent.found) {
      return specificContent.message;
    }

    // Common greetings and basic questions
    const commonResponses = {
      hello: "Hi there! How can I help you today?",
      hi: "Hello! What would you like to know about our platform?",
      help:
        "I can help you find information about our features, team, support, or any other aspect of our platform. What would you like to know?",
    };

    const normalizedMessage = message.toLowerCase().trim();
    for (const [key, value] of Object.entries(commonResponses)) {
      if (normalizedMessage.includes(key)) {
        return value;
      }
    }

    // If no matches found, return apologetic message
    return "I apologize, but I couldn't find specific information about that in our website. Could you please rephrase your question or ask about something else? I can help you with information about our features, team, support, or any other aspect of our platform.";
  } catch (error) {
    console.error("Error in findResponse:", error);
    return "I apologize, but I encountered an error while processing your question. Please try asking something else.";
  }
};

export function ChatbotProvider({ children }) {
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null); // 👈 Added ref for auto-scroll

  const sendMessage = async (text) => {
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Generate bot response
    const response = await findResponse(text);
    const botResponse = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: "bot",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, botResponse]);
  };

  const toggleChat = () => setIsOpen((prev) => !prev);

  // Auto-scroll effect whenever a new message is added
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ChatbotContext.Provider
      value={{ messages, isOpen, sendMessage, toggleChat, chatEndRef }}
    >
      {children}
    </ChatbotContext.Provider>
  );
}

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error("useChatbot must be used within a ChatbotProvider");
  }
  return context;
};
