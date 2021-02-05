import { useEffect, useRef } from "react";

export const ChatWindow = ({ content }) => {
  const chatWindowRef = useRef(null);
  useEffect(() => {
    chatWindowRef.current &&
      chatWindowRef.current.scrollIntoView({ behavior: "auto" });
  }, [content]);
  return (
    <div
      style={{
        height: "150px",
        border: "1px solid black",
        overflow: "hidden",
        overflowY: "auto",
        minWidth: "300px",
      }}
    >
      {content.map(({ name, text, id }) => (
        <div key={id} ref={chatWindowRef}>
          {name}: {text}
        </div>
      ))}
    </div>
  );
};
