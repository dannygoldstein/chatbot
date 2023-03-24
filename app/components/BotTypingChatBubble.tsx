import Chat, { Message } from "./Chat";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import ChatBubble from "./ChatBubble";

type BotTypingChatBubbleProps = {
  chatState: Message[];
  addNewMessage: (newMessage: string) => void;
};

const BotTypingChatBubble = (props: BotTypingChatBubbleProps) => {
  const { addNewMessage, chatState } = props;
  const [newMessage, setNewMessage] = useState<string | null>(null);

  useEffect(() => {
    if (newMessage == null) {
      const body = JSON.stringify({
        chatState,
      });
      fetch("/aliza", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      }).then((response) => {
        response.json().then((data) => {
          setNewMessage(data);
        });
      });
    }
  }, [chatState, setNewMessage, newMessage]);

  if (newMessage == null) {
    return <ChatBubble />; // <TypeAnimation sequence={[""]} cursor={true} repeat={0} />;
  }

  return (
    <ChatBubble>
      Travel Agent Bot:
      <TypeAnimation
        sequence={[
          newMessage,
          () => {
            addNewMessage(newMessage);
          },
        ]}
        cursor={true}
        repeat={0}
      />
    </ChatBubble>
  );
};

export default BotTypingChatBubble;
