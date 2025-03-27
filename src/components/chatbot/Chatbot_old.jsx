import React, { useState } from "react";
import { getChatGPTResponse } from "./getChatGPTResponse";
import { MessageCircle } from "lucide-react"; // Lucide icon for chat
import "./Chatbot.css";
const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    const response = await getChatGPTResponse(input);
    handleBotResponse(response);
  };

  const handleBotResponse = (response) => {
    setMessages((prevMessages) => [...prevMessages, { role: "bot", content: response.message }]);
  };

  return (
    <div>
      <button className="chat-toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        <MessageCircle size={24} />
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chat-header">
            <h3>Support Chat</h3>
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.role === "user" ? "user-message" : "bot-message"}>
                {msg.content}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
