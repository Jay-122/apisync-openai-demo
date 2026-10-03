import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export async function chat(messages: Message[]) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages,
  });

  return completion.choices[0]?.message?.content ?? "";
}
