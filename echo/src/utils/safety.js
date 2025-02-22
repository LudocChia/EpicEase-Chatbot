import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

/**
 * 获取宽松的安全设置
 * @returns {Array} - 安全设置配置
 */
export const getLenientSafetySettings = () => [
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_NONE, // 完全不禁用
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_NONE, // 完全不禁用
    },
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE, // 完全不禁用
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE, // 完全不禁用
    },
];
