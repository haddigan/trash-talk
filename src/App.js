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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2em",
        }}
      >
        <PlayerName handleSetName={setName} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ flexGrow: "1", marginRight: "2em", maxWidth: "50vw" }}>
          <ChatWindow content={messageList} />
          <h2
            style={{
              fontFamily: '"Orbitron", sans-serif',
              color: "white",
              textTransform: "uppercase",
              marginTop: "2em",
            }}
          >
            Use arrow keys to send messages
          </h2>
        </div>
        <div style={{ minWidth: "40vw" }}>
          <ChatControl onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}
