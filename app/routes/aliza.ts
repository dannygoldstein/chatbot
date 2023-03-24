import { ActionArgs } from "@remix-run/server-runtime";
import { converse } from "../aliza.server";
import { Message } from "~/components/Chat";

export const action = async ({ request }: ActionArgs) => {
  if (request.body == null) {
    return new Response("No request body", { status: 400 });
  }
  const json = await request.json();
  const messages: Message[] = json.chatState;
  return await converse(messages);
};
