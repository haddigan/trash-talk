import { useState } from "react";

import { ChatWindow } from "./ChatWindow";
import { PlayerName } from "./PlayerName";
import { ChatControl } from "./ChatControl";

export function App() {
  const [messageList, setMessageList] = useState([]);
  const [name, setName] = useState("Player 1");

  const handleSendMessage = (text) => {
    const id = Date.now();
    setMessageList((previousList) => {
      return [...previousList, { id, name, text }];
    });
  };

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
      }}
    >
      <PlayerName handleSetName={setName} />
      <ChatWindow content={messageList} />
      <ChatControl onSendMessage={handleSendMessage} />
    </div>
  );
}
