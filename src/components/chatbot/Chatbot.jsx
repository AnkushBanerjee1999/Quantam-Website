import { useEffect } from 'react';
import '@n8n/chat/style.css';
import './Chatbot.css'
import { createChat } from '@n8n/chat';
const Chatbot = () => {
	useEffect(() => {
        createChat({
            webhookUrl: ,
            webhookConfig: {
                method: 'POST',
                headers: {}
            },
            target: '#n8n-chat',
            mode: 'window',
            chatInputKey: 'chatInput',
            chatSessionKey: 'sessionId',
            metadata: {},
            showWelcomeScreen: false,
            defaultLanguage: 'en',
            initialMessages: [
                'Hi there! 👋',
                'My name is Marcus. How can I assist you today?'
            ],
            i18n: {
                en: {
                    title: 'Quantam Assistant',
                    subtitle: "",
                    footer: '',
                    getStarted: 'New Conversation',
                    inputPlaceholder: 'Type your question..',
                },
            },
        });
        
	}, []);

	return (<div></div>);
};
export default Chatbot