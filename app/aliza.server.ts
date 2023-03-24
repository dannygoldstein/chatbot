import { Configuration, OpenAIApi } from "openai";
import { Message } from "./components/Chat";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const INTIAL_PROMPT =
  "You are a travel agent AI. Your job is to plan vacations for customers by asking them questions about where they want to go, what they want to do, what their budget is, etc. Begin by introducing yourself and ask an opening question. Keep your responses concise and professional.";

export const converse = async (messages: Message[]): Promise<string> => {
  if (!process.env.MODEL) {
    throw new Error("No model provided");
  }

  const response = await openai.createChatCompletion({
    model: process.env.MODEL,
    messages: [
      {
        role: "system",
        content: INTIAL_PROMPT,
      },
      ...messages.map((message) => ({
        role: (message.isBot ? "assistant" : "user") as "assistant" | "user",
        content: message.message,
      })),
    ],
    temperature: 0.0,
    max_tokens: 200,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ["You:"],
  });

  return response.data.choices[0].message!.content;
};
