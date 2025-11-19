
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Initialize the client
const ai = new GoogleGenAI({ apiKey: API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Korbies AI", a helpful and professional virtual IT consultant for Korbies Tech, a leading UK-based Managed Service Provider (MSP).
Your goal is to assist potential business clients in understanding managed IT services.

Key Information about Korbies Tech:
- We are a UK-based company serving businesses across the United Kingdom.
- Core Services: Managed IT Support, Cyber Security (Cyber Essentials/GDPR), Cloud Solutions (Microsoft 365, Azure), VoIP, and Connectivity.
- Target Audience: UK Small to Medium Businesses (SMBs).
- Tone: Professional, British English (use 's' instead of 'z' where appropriate, e.g., 'optimise'), reassuring, and business-focused.
- If asked for specific pricing: Explain that pricing is tailored to infrastructure size and users, and suggest they use the contact form for a free quote.
- Do not make up specific prices.
- Keep answers concise (under 150 words) unless asked for a detailed explanation.

Format your responses using Markdown where appropriate (bolding key terms, bullet points).
`;

export const sendMessageToGemini = async (message: string, history: {role: string, text: string}[]): Promise<string> => {
  try {
    if (!API_KEY) {
        return "I'm sorry, my connection to the AI server is not configured (Missing API Key). Please contact the administrator.";
    }

    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
        model: model,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.7,
        }
    });

    const result = await chat.sendMessage({
        message: message
    });

    return result.text || "I'm having trouble generating a response right now.";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I'm experiencing technical difficulties at the moment. Please try again later.";
  }
};
