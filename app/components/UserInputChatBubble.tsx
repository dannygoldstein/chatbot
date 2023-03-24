import { Slate, Editable, withReact, ReactEditor } from "slate-react";
import { Descendant, createEditor, Transforms, Editor } from "slate";
import { useMemo, useState, useEffect } from "react";
import ChatBubble from "./ChatBubble";
import { create } from "domain";

type AddNewMessageType = (newMessage: string) => void;
type UserInputChatBubbleProps = {
  addNewMessage: AddNewMessageType;
};

const makeEditor = () => withReact(createEditor());

const focusOnEditor = (editor: ReturnType<typeof makeEditor>) => {
  ReactEditor.focus(editor);
  Transforms.select(editor, Editor.end(editor, []));
};

const UserInputChatBubble = (props: UserInputChatBubbleProps) => {
  const { addNewMessage } = props;
  const editor = useMemo(makeEditor, []);
  const [value, setValue] = useState<Descendant[]>([
    {
      children: [{ text: "" }],
    },
  ]);

  useEffect(() => {
    focusOnEditor(editor);
    /*
    document.addEventListener("click", () => {
      focusOnEditor(editor);
    });
    */
  }, [editor]);

  return (
    <ChatBubble>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        You:
        <Editable
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addNewMessage(event.currentTarget.innerText);
            }
          }}
        />
      </Slate>
    </ChatBubble>
  );
};

export default UserInputChatBubble;
