import { DirectionalPad } from "../DirectionalPad";
import { useState, useEffect } from "react";

import { useCountdown } from "../app/useCountdown";
import { ContentButton } from "../ContentButton";
import { List } from "../List";

import {
  REACTIONS,
  COMPLIMENTS,
  TEAM,
  APOLOGIES,
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

  const handleSendMessage = (message) => {
    setVisibleList(null);
    onSendMessage(message);
  };

  return (
    <div>
      {visibleList && (
        <List
          type={visibleList}
          content={contentLists[visibleList]}
          onSendMessage={handleSendMessage}
        />
      )}
      {!visibleList && (
        <DirectionalPad
          upButton={
            <ContentButton
              keyName="upButton"
              onClick={() => handleOpenSection(TEAM)}
            />
          }
          leftButton={
            <ContentButton
              keyName="leftButton"
              onClick={() => handleOpenSection(REACTIONS)}
            />
          }
          rightButton={
            <ContentButton
              keyName="rightButton"
              onClick={() => handleOpenSection(COMPLIMENTS)}
            />
          }
          downButton={
            <ContentButton
              keyName="downButton"
              onClick={() => handleOpenSection(APOLOGIES)}
            />
          }
        />
      )}
    </div>
  );
};
