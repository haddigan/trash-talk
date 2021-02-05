import { useState, useEffect } from "react";
import { ChatWindow } from "./ChatWindow";
import { List } from "./List";
import { PlayerName } from "./PlayerName";
import { useCountdown } from "./useCountdown";

export function App() {
  const [messageList, setMessageList] = useState([]);
  const [openSection, setOpenSection] = useState(null);
  const [name, setName] = useState("Player 1");
  const [remainingTime, resetTimer] = useCountdown(3);

  useEffect(() => {
    if (remainingTime === 0) setOpenSection(null);
  }, [remainingTime]);

  const sendMessage = (text) => {
    setOpenSection(null);
    const id = Date.now();
    setMessageList((previousList) => {
      return [...previousList, { id, name, text }];
    });
  };

  const handleOpenSection = (section) => {
    resetTimer();
    setOpenSection(section);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <PlayerName handleSetName={setName} />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <List
            type="team"
            open={openSection === "team"}
            handleOpen={handleOpenSection}
            showButton={!openSection}
            sendMessage={sendMessage}
          >
            🔼
          </List>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <List
            type="compliments"
            open={openSection === "compliments"}
            handleOpen={handleOpenSection}
            showButton={!openSection}
            sendMessage={sendMessage}
          >
            ◀️
          </List>
          <List
            type="reactions"
            open={openSection === "reactions"}
            handleOpen={handleOpenSection}
            showButton={!openSection}
            sendMessage={sendMessage}
          >
            ▶️
          </List>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <List
            type="apologies"
            open={openSection === "apologies"}
            handleOpen={handleOpenSection}
            showButton={!openSection}
            sendMessage={sendMessage}
          >
            🔽
          </List>
        </div>
      </div>
      <div>
        <ChatWindow content={messageList} />
      </div>
    </div>
  );
}
