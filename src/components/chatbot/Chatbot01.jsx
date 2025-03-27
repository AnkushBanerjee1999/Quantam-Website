import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Loader2 } from 'lucide-react';
import { sendMessageToChatbot } from '../../services/api';
import './Chatbot.css';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  // Retrieve sessionId from localStorage when the component mounts
  useEffect(() => {
    const storedSessionId = localStorage.getItem('sessionId');
    if (storedSessionId) {
      setSessionId(storedSessionId);
    }
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Delay hiding the element until animation completes
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setLoading(true);
    const userMessage = { type: 'user', text: message };

    try {
      // Add user's message to chat history
      setChatHistory([...chatHistory, userMessage]);

      // Send the message to the Chatbot and get the response
      const responseData = await sendMessageToChatbot(message, sessionId);

      // Ensure the correct field is being accessed from the response
      const botMessage = {
        type: 'bot',
        text: responseData.output || responseData.text || "Sorry, I couldn't understand."
      };

      // Add the bot's response to chat history
      setChatHistory((prevHistory) => [...prevHistory, botMessage]);
    } catch (error) {
      const errorMessage = { 
        type: 'bot', 
        text: 'Sorry, something went wrong. Please try again later.' 
      };
      setChatHistory((prevHistory) => [...prevHistory, errorMessage]);
    } finally {
      setLoading(false);
      setMessage('');
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat window - positioned to the left of the button */}
      {isVisible && (
        <div 
          className={`absolute bottom-0 right-16 mb-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl 
                     overflow-hidden flex flex-col transition-all duration-300 ease-in-out 
                     max-h-[500px] border border-gray-700
                     ${isOpen 
                       ? 'opacity-100 transform translate-x-0' 
                       : 'opacity-0 transform translate-x-10'}`}
        >
          {/* Header */}
          <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle size={20} />
              <h3 className="font-medium">Quantam Assistant</h3>
            </div>
          </div>
          
          {/* Messages area */}
          <div className="flex-1 p-4 max-h-[300px] min-h-[300px] overflow-y-auto bg-gray-900/95">
            {chatHistory.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <MessageCircle className="mx-auto mb-2" size={24} />
                <p>How can I help you today?</p>
              </div>
            ) : (
              <div className="space-y-3">
                {chatHistory.map((msg, index) => (
                  <div 
                    key={index} 
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[80%] px-4 py-2 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-indigo-600 text-white rounded-tr-none' 
                          : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg rounded-tl-none max-w-[80%] flex items-center space-x-2">
                      <Loader2 size={16} className="animate-spin" />
                      <span>Typing...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
          
          {/* Input area */}
          <form onSubmit={handleSubmit} className="border-t border-gray-700  bg-gray-900/95 p-3 flex items-center">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 border border-gray-700 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              disabled={loading}
            />
            <button 
              type="submit" 
              disabled={loading || !message.trim()}
              className={`bg-indigo-600 text-white px-4 py-2.5 rounded-r-lg flex items-center justify-center ${
                loading || !message.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
              }`}
              aria-label="Send message"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </form>
        </div>
      )}
      
      {/* Floating chat button with animation */}
      <button
        onClick={toggleChat}
        className={`text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg 
                   transition-all duration-300 ease-in-out transform hover:scale-110
                   ${isOpen 
                     ? 'bg-gray-600 hover:bg-gray-700 rotate-0' 
                     : 'bg-indigo-600 hover:bg-indigo-700 rotate-0'}`}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
      </button>
    </div>
  );
};

export default Chatbot;