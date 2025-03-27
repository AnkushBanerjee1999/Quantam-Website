import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const API_URL = "https://api.openai.com/v1/chat/completions";

// Website knowledge for better answers
const knowledgeBase = `
  Website Name: Quantam.
  Services: Web Development, Mobile Apps, Cloud Solutions, Cybersecurity.
  Contact: Email - support@techsolutions.com | Phone - +1 234 567 890
`;

const chatHistory = [];
let formData = {}; // Store form data

// Function to fetch website data (if API is available)
const fetchWebsiteData = async () => {
  try {
    const response = await axios.get("https://www.Quantam.com/#platform"); // Replace with real API
    return response.data;
  } catch (error) {
    console.error("Error fetching website data:", error);
    return null;
  }
};

export const getChatGPTResponse = async (userMessage) => {
  const websiteData = await fetchWebsiteData();

  let context = knowledgeBase;
  if (websiteData && Object.keys(websiteData).length > 0) {
    context += ` Here is the latest website info: ${JSON.stringify(websiteData)}`;
  }

  chatHistory.push({ role: "user", content: userMessage });

  try {
    let botReply = "";

    // Start support form process
    if (userMessage.toLowerCase().includes("fill support form")) {
      botReply = "I can help with that! Let’s start with the details. What is the subject of your issue?";
      formData = { step: "subject" }; // Ensure step is set
      return { action: "ask_form", step: "subject", message: botReply };
    }

    // Handle step-by-step form filling
    if (formData.step) {
      switch (formData.step) {
        case "subject":
          formData.subject = userMessage;
          formData.step = "supportType";
          return { action: "ask_form", step: "supportType", message: "Got it! What type of support do you need? (Bugs, Feature, Incident, Service Request)" };

        case "supportType":
          formData.supportType = userMessage;
          formData.step = "priority";
          return { action: "ask_form", step: "priority", message: "What is the priority? (Low, Medium, High, Critical)" };

        case "priority":
          formData.priority = userMessage;
          formData.step = "fullName";
          return { action: "ask_form", step: "fullName", message: "Please provide your full name." };

        case "fullName":
          formData.fullName = userMessage;
          formData.step = "accountName";
          return { action: "ask_form", step: "accountName", message: "Enter your account or company name." };

        case "accountName":
          formData.accountName = userMessage;
          formData.step = "phoneNumber";
          return { action: "ask_form", step: "phoneNumber", message: "Enter your phone number." };

        case "phoneNumber":
          formData.phoneNumber = userMessage;
          formData.step = "email";
          return { action: "ask_form", step: "email", message: "Enter your email address." };

        case "email":
          formData.email = userMessage;
          formData.step = "message";
          return { action: "ask_form", step: "message", message: "Please describe your issue." };

        case "message":
          formData.message = userMessage;
          formData.step = "confirm";
          return {
            action: "confirm_submission",
            message: `Here’s what I have:\nSubject: ${formData.subject}\nType: ${formData.supportType}\nPriority: ${formData.priority}\nName: ${formData.fullName}\nAccount: ${formData.accountName}\nPhone: ${formData.phoneNumber}\nEmail: ${formData.email}\nMessage: ${formData.message}\n\nDo you want me to submit this form or just pre-fill it? (Type 'submit' or 'pre-fill')`
          };

        case "confirm":
          if (userMessage.toLowerCase().includes("submit")) {
            formData = {}; // Reset after submitting
            return { action: "submit_form", message: "Submitting the form now..." };
          } else if (userMessage.toLowerCase().includes("pre-fill")) {
            formData = {}; // Reset after pre-filling
            return { action: "pre_fill_form", message: "The form has been pre-filled for you." };
          } else {
            return { action: "ask_form", step: "confirm", message: "Type 'submit' or 'pre-fill'." };
          }

        default:
          formData = {};
          break;
      }
    }

    // Normal chatbot response
    return { action: "reply", message: "Let me check that for you..." };

  } catch (error) {
    console.error("Error:", error);
    return { action: "error", message: "Something went wrong." };
  }
};
