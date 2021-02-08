import { useState, useEffect } from "react";

import { useCountdown } from "../app/useCountdown";

import { DirectionalPad } from "../DirectionalPad";
import { ContentButton } from "../ContentButton";
import { MessageList } from "../MessageList";

import {
  REACTIONS,
  COMPLIMENTS,
  TEAM,
  APOLOGIES,
  UP_BUTTON,
  LEFT_BUTTON,
  RIGHT_BUTTON,
  DOWN_BUTTON,
  contentLists,
} from "../content";

export const ChatControl = ({ onSendMessage }) => {
  const [visibleList, setVisibleList] = useState(null);
  const [remainingTime, resetTimer] = useCountdown(3);

  useEffect(() => {
    if (remainingTime === 0) setVisibleList(null);
  }, [remainingTime]);

  const handleOpenSection = (section) => {
    resetTimer();
    setVisibleList(section);
  };

  useEffect(() => {
    const handlers = [TEAM, REACTIONS, COMPLIMENTS, APOLOGIES].map((type) => {
      return () => {
        resetTimer();
        setVisibleList(type);
      };
    });
    const handler = ({ key }) => {
      switch (key) {
        case UP_BUTTON:
          return handlers[0]();
        case LEFT_BUTTON:
          return handlers[1]();
        case RIGHT_BUTTON:
          return handlers[2]();
        case DOWN_BUTTON:
          return handlers[3]();
        default:
          return null;
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [resetTimer, setVisibleList]);

  const handleSendMessage = (message) => {
    setVisibleList(null);
    onSendMessage(message);
  };

  return (
    <div>
      {visibleList && (
        <MessageList
          type={visibleList}
          content={contentLists[visibleList]}
          onSendMessage={handleSendMessage}
        />
      )}
      {!visibleList && (
        <DirectionalPad>
          <ContentButton
            keyName={UP_BUTTON}
            onClick={() => handleOpenSection(TEAM)}
          />
          <ContentButton
            keyName={LEFT_BUTTON}
            onClick={() => handleOpenSection(REACTIONS)}
          />
          <ContentButton
            keyName={RIGHT_BUTTON}
            onClick={() => handleOpenSection(COMPLIMENTS)}
          />
          <ContentButton
            keyName={DOWN_BUTTON}
            onClick={() => handleOpenSection(APOLOGIES)}
          />
        </DirectionalPad>
      )}
    </div>
  );
};
