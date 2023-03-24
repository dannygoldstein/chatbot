import { useState } from "react";
import HistoryChatBubble from "./HistoryChatBubble";
import UserInputChatBubble from "./UserInputChatBubble";
import BotTypingChatBubble from "./BotTypingChatBubble";

export type Message = {
  message: string;
  isBot: boolean;
  createdAt: Date;
};

const Chat = () => {
  const [readyForUserInput, setReadyForUserInput] = useState<boolean>(false);
  const [chatState, setChatState] = useState<Message[]>([]);

  const addNewMessage = (message: string, isBot: boolean) => {
    setChatState([
      ...chatState,
      {
        message,
        isBot,
        createdAt: new Date(),
      },
    ]);
    setReadyForUserInput(!readyForUserInput);
  };

  const addUserMessage = (message: string) => {
    addNewMessage(message, false);
  };

  const addBotMessage = (message: string) => {
    addNewMessage(message, true);
  };

  return (
    <div className="w-96 selection:bg-gray-500 font-sans">
      {chatState.map((message) => (
        <HistoryChatBubble message={message.message} isBot={message.isBot} />
      ))}

      {readyForUserInput ? (
        <UserInputChatBubble addNewMessage={addUserMessage} />
      ) : (
        <BotTypingChatBubble
          addNewMessage={addBotMessage}
          chatState={chatState}
        />
      )}
    </div>
  );
};

export default Chat;
