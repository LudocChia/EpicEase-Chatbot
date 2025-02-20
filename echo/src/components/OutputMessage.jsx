import './OutputMessage.css';

const ChatMessage = ({ message, sender }) => {
    return (
        <div className={`chatbot__message--${sender}`}>
            <div className="chatbot__message-text">
                {message}
            </div>
        </div>
    );
};

export default function OutputMessage({ chatMessages = [] }) {  // 确保 chatMessages 默认是数组
    return (
        <div className="chatbot__messages">
            {chatMessages.map((chatMessage) => (
                <ChatMessage
                    key={chatMessage.key}
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                />
            ))}
        </div>
    );
}
