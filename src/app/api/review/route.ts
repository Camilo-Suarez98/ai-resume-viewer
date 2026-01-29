import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import mammoth from "mammoth";

export const runtime = "nodejs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "dummy",
});

export async function POST(req: NextRequest) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OpenAI API Key not configured" },
      { status: 500 }
    );
  }

  try {
    const formData = await req.formData();
    const type = formData.get("type") as string;
    const mode = formData.get("mode") as string;
    let content = "";

    if (mode === "text") {
      content = formData.get("text") as string;
    } else if (mode === "file") {
      const file = formData.get("file") as File;
      if (!file) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());

      if (file.type === "application/pdf") {
        content = "Note: PDF parsing is currently undergoing maintenance. Please copy-paste text or use DOCX/TXT.";
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const result = await mammoth.extractRawText({ buffer });
        content = result.value;
      } else {
        content = buffer.toString("utf-8");
      }
    }

    if (!content.trim()) {
      return NextResponse.json({ error: "No content to review" }, { status: 400 });
    }

    const prompt = `
      You are an expert career coach and hiring manager. Review the following ${type}.
      
      Content:
      "${content.slice(0, 15000)}" 
      
      Provide a detailed review in the following JSON format:
      {
        "score": 85, // 0-100
        "summary": "Brief summary of the candidate's profile...",
        "strengths": ["Strength 1", "Strength 2"],
        "weaknesses": ["Weakness 1", "Weakness 2"],
        "actionItems": ["Action 1", "Action 2"],
        "keywords": ["Keyword 1", "Keyword 2"]
      }

      Return ONLY the JSON.
    `;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }, { role: "user", content: prompt }],
      model: "gpt-4-turbo-preview",
      response_format: { type: "json_object" },
    });

    const responseContent = completion.choices[0].message.content;
    const result = JSON.parse(responseContent || "{}");

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
