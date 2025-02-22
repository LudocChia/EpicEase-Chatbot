import { useState, useEffect, useRef } from 'react';
import './InputMessage.css';
import createSvgIcon from '../utils/createSvgIcon';
import { textModel } from '../libs/gemini'; // 使用初始化好的模型

export default function InputMessage({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const textareaRef = useRef(null);

    useEffect(() => {
        localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
    }, [chatMessages]);

    const handleInput = () => {
        textareaRef.current.style.height = '3rem';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        setInputText(textareaRef.current.value);
    };

    const sendMessage = async () => {
        if (!inputText.trim()) return;

        const userMessage = {
            message: inputText,
            sender: 'user',
            key: crypto.randomUUID(),
        };

        setChatMessages((prevMessages) => [...prevMessages, userMessage]);
        setLoading(true);

        try {
            // 定义 System Prompt
            const systemPrompt = `你是一个幽默的助手，请用轻松愉快的语气回答用户的问题。`;

            // 将历史对话拼接为上下文
            const context = chatMessages
                .map((msg) => `${msg.sender}: ${msg.message}`)
                .join('\n');

            // 将 System Prompt、上下文和用户输入一起传入
            const prompt = `${systemPrompt}\n${context}\nuser: ${inputText}`;

            // 使用 Gemini 生成回复
            const result = await textModel.generateContent(prompt);
            const response = await result.response;
            const botReply = response.text();

            // 将 Gemini 的回复解析为 Markup（假设 Gemini 返回的是 Markdown 格式）
            const botMessage = {
                message: botReply, // 这里假设 botReply 是 Markdown 格式
                sender: 'robot',
                key: crypto.randomUUID(),
            };

            setChatMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error('Gemini API 请求失败', error);
        }

        setLoading(false);
        setInputText('');
    };

    return (
        <>
            <div className="chatbot__input">
                <textarea
                    ref={textareaRef}
                    className="chatbot__input-field"
                    placeholder="Message EpicEase Echo"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onInput={handleInput}
                />
                <button
                    className="chatbot__input-button"
                    onClick={sendMessage}
                    disabled={loading}
                >
                    {loading ? '...' : createSvgIcon({
                        paths: [
                            'M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z',
                        ],
                        fill: 'var(--color-text-secondary)',
                        width: '16',
                        height: '16',
                        viewBox: '0 0 16 16',
                    })}
                </button>
            </div>
            <p className="chatbot__credit">Powered by Gemini</p>
        </>
    );
}