import { useState, useEffect, useRef } from 'react';
import './OutputMessage.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import createSvgIcon from '../utils/createSvgIcon';

const ChatMessage = ({ message, sender }) => {
    const [copiedCode, setCopiedCode] = useState(null); // 跟踪哪个代码块被复制了
    const copyIconPaths = ['M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z'];
    const checkIconPaths = ['M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0'];

    // 复制代码块内容
    const handleCopyCode = (code, index) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopiedCode(index);
            setTimeout(() => setCopiedCode(null), 2000);
        });
    };

    return (
        <div className={`chatbot__message--${sender}`}>
            <div className="chatbot__message-text">
                <ReactMarkdown
                    components={{
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(className || '');
                            const codeIndex = Math.random(); // 为每个代码块生成唯一标识

                            return !inline && match ? (
                                <div className="code-block-container">
                                    <SyntaxHighlighter
                                        style={dracula}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                    <button
                                        className="code-copy-button"
                                        onClick={() => handleCopyCode(String(children), codeIndex)}
                                        title="复制代码"
                                    >
                                        {createSvgIcon({
                                            paths: copiedCode === codeIndex ? checkIconPaths : copyIconPaths,
                                            fill: copiedCode === codeIndex ? '#00cc00' : 'var(--color-text-secondary)',
                                            width: '16',
                                            height: '16',
                                            viewBox: '0 0 16 16'
                                        })}
                                    </button>
                                </div>
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                        },
                    }}
                >
                    {message}
                </ReactMarkdown>
            </div>
            {sender === 'robot' && (
                <button
                    className="chatbot__copy-button"
                    onClick={() => {
                        navigator.clipboard.writeText(message);
                    }}
                    title="复制全部内容"
                >
                    {createSvgIcon({
                        paths: copyIconPaths,
                        fill: 'var(--color-text-secondary)',
                        width: '16',
                        height: '16',
                        viewBox: '0 0 16 16'
                    })}
                </button>
            )}
        </div>
    );
};

export default function OutputMessage({ chatMessages = [] }) {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatMessages]);

    return (
        <div className="chatbot__messages">
            {chatMessages.map((chatMessage) => (
                <ChatMessage
                    key={chatMessage.key}
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                />
            ))}
            <div ref={messagesEndRef} />
        </div>
    );
}