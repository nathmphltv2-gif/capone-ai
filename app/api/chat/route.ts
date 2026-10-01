import { convertToModelMessages, streamText } from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system:
      "คุณคือ Capone AI ผู้ช่วย AI ส่วนตัว ตอบภาษาเดียวกับผู้ใช้ อธิบายให้เข้าใจง่ายและช่วยเหลืออย่างเป็นประโยชน์",
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
