import ChatBubble from "./ChatBubble";

export type HistoryChatBubbleProps = {
  message: string;
  isBot: boolean;
};

const HistoryChatBubble = (props: HistoryChatBubbleProps) => {
  const { message, isBot } = props;

  return (
    <ChatBubble>
      {isBot ? "Travel Agent Bot:" : "You:"}
      <br />
      {message}
    </ChatBubble>
  );
};

export default HistoryChatBubble;
