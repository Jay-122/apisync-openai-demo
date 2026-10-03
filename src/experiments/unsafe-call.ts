import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function unsafeComplete(prompt: string) {
  const engine = "gpt-3.5-turbo";
  const response = await openai.createCompletion({
    engine,
    prompt,
  });

  return response.data.choices[0]?.text ?? "";
}
