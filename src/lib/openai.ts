import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function completePrompt(prompt: string) {
  const response = await openai.completions.create({
    model: "gpt-3.5-turbo",
    prompt,
    max_tokens: 200,
  });

  return response.choices[0]?.text ?? "";
}

export { openai };
