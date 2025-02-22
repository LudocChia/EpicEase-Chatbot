// src/libs/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";
import { getLenientSafetySettings } from "../utils/safety";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export const textModel = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    generationConfig: {
        maxOutputTokens: 1000,
    },
    safetySettings: getLenientSafetySettings(),
});

export const visionModel = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    safetySettings: getLenientSafetySettings(),
});