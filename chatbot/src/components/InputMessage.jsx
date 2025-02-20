import { useRef } from 'react';
import './InputMessage.css';
import createSvgIcon from '../utils/createSvgIcon';

export default function InputMessage() {
    const textareaRef = useRef(null);

    const handleInput = () => {
        textareaRef.current.style.height = '3rem';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    };

    return (
        <>
            <div className="chatbot__input">
                <textarea
                    ref={textareaRef}
                    className="chatbot__input-field"
                    placeholder="Message EpicEase Echo"
                    onInput={handleInput}
                />
                <button className="chatbot__input-button">
                    {createSvgIcon({
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
