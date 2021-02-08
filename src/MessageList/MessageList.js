import styles from "./MessageList.module.css";
import {
  keyIcons,
  UP_BUTTON,
  LEFT_BUTTON,
  RIGHT_BUTTON,
  DOWN_BUTTON,
} from "../app/content";
import { useEffect } from "react";

const { upButton, leftButton, rightButton, downButton } = keyIcons;
const arrowIcons = [upButton, leftButton, rightButton, downButton];

export const MessageList = ({
  content,
  type,
  onSendMessage: handleSendMessage,
}) => {
  const handlers = content.map((message) => {
    return () => handleSendMessage(message);
  });

  useEffect(() => {
    const keyHandler = ({ key }) => {
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
    document.addEventListener("keydown", keyHandler);
    return () => {
      document.removeEventListener("keydown", keyHandler);
    };
  }, [handlers]);

  return (
    <div className={styles.list}>
      <h2 className={styles.quickChatHeading}>Quick Chat</h2>
      <h3 className={styles.typeHeading}>{type}</h3>
      {!content
        ? null
        : content.map((text, i) => {
            return (
              <div key={i}>
                <button onClick={handlers[i]} className={styles.button}>
                  <span className={styles.icon}>{arrowIcons[i]}</span>
                  <span>{text}</span>
                </button>
              </div>
            );
          })}
    </div>
  );
};
