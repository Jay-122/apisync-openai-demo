import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateCopy(prompt: string) {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt: "Hello",
    max_tokens: 80,
  });

  return response.choices[0]?.text ?? prompt;
}
