import { NextResponse } from "next/server";
import OpenAI from "openai";
import {getSystemPrompt} from "./prompt";

const openai = new OpenAI({
  apiKey: process.env.GEMINI_API_KEY,
  baseURL: process.env.GEMINI_BASE_URL,
});

export async function POST(request) {
  try {
    const { message, currentSection } = await request.json();

    const systemPrompt = getSystemPrompt(currentSection);

    const response = await openai.chat.completions.create({
      model: process.env.GEMINI_AI_MODEL_ID,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
      max_tokens: 150,
    });

    return NextResponse.json({
      content: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to get AI response" },
      { status: 500 }
    );
  }
}
