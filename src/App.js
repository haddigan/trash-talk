import { useState, useEffect } from "react";
import { ChatWindow } from "./ChatWindow";
import { List } from "./List";
import { PlayerName } from "./PlayerName";
import { useCountdown } from "./app/useCountdown";
import { DirectionalPad } from "./DirectionalPad";
import { keyBindings, contentLists } from "./content";

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

  const arrowKeys = keyBindings.reduce((accumulated, [keyName, type]) => {
    const handleOpenSection = () => {
      resetTimer();
      setOpenSection(type);
    };

    return {
      ...accumulated,
      [keyName]: (
        <List
          content={contentLists[type]}
          handleOpen={handleOpenSection}
          isOpen={openSection === type}
          showButton={!openSection}
          sendMessage={sendMessage}
        />
      ),
    };
  }, {});

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
      <DirectionalPad {...arrowKeys} />
    </div>
  );
}
