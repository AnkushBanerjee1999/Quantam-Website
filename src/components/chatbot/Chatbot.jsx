import { useEffect } from 'react';
import '@n8n/chat/style.css';
import './Chatbot.css'
import { createChat } from '@n8n/chat';
const Chatbot = () => {
	useEffect(() => {
        createChat({
            webhookUrl: 'https://ikoncloud-uat.Quantam.com/aiagent/webhook/38b67ee9-f9d6-4c01-9304-2afa88162a1a/chat',
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