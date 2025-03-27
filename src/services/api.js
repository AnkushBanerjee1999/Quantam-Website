// // /src/services/api.js
// const sendMessageToChatbot = async (message) => {
//     // Simulate API call
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve({ output: `Response to: ${message}` });
//       }, 1000);
//     });
//   };
// Function to send a message to the n8n chatbot Webhook
export const sendMessageToChatbot = async (message, sessionId = null) => {
    try {
      // Generate a new session ID if one isn't provided (for first-time users)
      if (!sessionId) {
        sessionId = localStorage.getItem('sessionId') || generateSessionId();
        localStorage.setItem('sessionId', sessionId); // Store sessionId locally for future requests
      }
  
      const response = await fetch('https://ikoncloud-dev.Quantam.com/aiagent/webhook/38b67ee9-f9d6-4c01-9304-2afa88162a1a/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          sessionId, // Include the sessionId to maintain conversation context
        }),
      });
  
      // Check if the response is OK
      if (!response.ok) {
        throw new Error('Failed to communicate with the chatbot');
      }
  
      // Parse the response JSON
      const data = await response.json();
      return data; // Return the response from n8n (e.g., chatbot's reply)
    } catch (error) {
      console.error('Error sending message:', error);
      throw new Error('Failed to send message to chatbot');
    }
  };
  
  // Helper function to generate a session ID (using UUID)
  const generateSessionId = () => {
    return 'session-' + Math.random().toString(36).substr(2, 9); // Generates a random session ID
  };
  