import { useState, useEffect, useRef } from 'react';
import './InputMessage.css';
import createSvgIcon from '../utils/createSvgIcon';
import { GoogleGenerativeAI } from "@google/generative-ai";  // 引入 Gemini SDK

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY); // 读取 API Key

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
        if (!inputText.trim()) return; // 如果输入为空，直接返回

        const userMessage = {
            message: inputText,
            sender: 'user',
            key: crypto.randomUUID()
        };

        setChatMessages(prevMessages => [...prevMessages, userMessage]); // 更新用户消息
        setLoading(true);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // 选择 Gemini Pro 模型
            const result = await model.generateContent(inputText);
            const response = await result.response;
            const botReply = response.text(); // 获取 AI 响应文本

            const botMessage = {
                message: botReply,
                sender: 'robot',
                key: crypto.randomUUID()
            };

            setChatMessages(prevMessages => [...prevMessages, botMessage]); // 更新 Gemini 响应
        } catch (error) {
            console.error("Gemini API 请求失败", error);
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
                            "M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"
                        ],
                        fill: 'var(--color-text-secondary)',
                        width: '16',
                        height: '16',
                        viewBox: '0 0 16 16'
                    })}
                </button>
            </div>
            <p className="chatbot__credit">Powered by Gemini</p>
        </>
    );
}
