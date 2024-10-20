




"use server";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
export async function runAi(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  // const prompt = " write  newspost for google";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

   
  return text;
}