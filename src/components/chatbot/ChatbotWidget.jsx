import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { useChatbot } from './ChatbotContext';
import "./Chatbot.css";
export function ChatbotWidget() {
  const { messages, isOpen, sendMessage, toggleChat } = useChatbot();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input.trim());
      setInput('');
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 bg-gradient-to-r from-[#312e81] to-[#4338ca] text-white p-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 ease-in-out"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-[rgb(17,24,39,0.95)] rounded-2xl shadow-2xl flex flex-col max-h-[500px] overflow-hidden border border-gray-700">
      {/* Header Section */}
      <div className="p-4 bg-gradient-to-r from-[#312e81] to-[#4338ca] text-white rounded-t-2xl flex justify-between items-center shadow-md">
        <h2 className="font-bold text-lg tracking-wide">Chat Support</h2>
        <button
          onClick={toggleChat}
          className="hover:bg-[#4338ca] p-1 rounded transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Chat Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-transparent min-h-[300px] custom-scrollbar">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-xl shadow ${
                message.sender === 'user'
                  ? 'bg-gradient-to-r from-[#312e81] to-[#4338ca] text-white'
                  : 'bg-gray-800 text-gray-300 border border-gray-700'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Section */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-700 bg-[rgb(17,24,39,0.95)]">
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 p-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#312e81] focus:border-transparent shadow-sm"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#312e81] to-[#4338ca] text-white p-2 rounded-lg hover:scale-105 transition-transform duration-200 ease-in-out shadow"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
