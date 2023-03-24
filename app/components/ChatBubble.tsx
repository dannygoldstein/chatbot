import React from "react";

const ChatBubbleDiv: React.FC<{ children?: React.ReactNode }> = (props) => {
  return (
    <div className="p-4 w-96 text-slate-100 break-words">{props.children}</div>
  );
};

export default ChatBubbleDiv;
