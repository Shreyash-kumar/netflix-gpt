import { GoogleGenerativeAI } from "@google/generative-ai";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

console.log(process.env.REACT_APP_GEMINI_API_KEY);

export default genAI;