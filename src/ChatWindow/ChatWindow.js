import { useEffect, useRef } from "react";
import styles from "./ChatWindow.module.css";

export const ChatWindow = ({ content = [] }) => {
  const chatWindowRef = useRef(null);

  useEffect(() => {
    chatWindowRef.current && chatWindowRef.current.scrollIntoView();
  }, [content]);

  return (
    <div
      className={styles.chatWindow}
      role="region"
      aria-label="chat window"
      aria-live="polite"
    >
      <div className={styles.chatList}>
        {content.map(({ name, text, id, isStatusMessage }) => (
          <div key={id} ref={chatWindowRef}>
            {isStatusMessage && (
              <span className={styles.statusMessage}>{text}</span>
            )}
            {!isStatusMessage && (
              <>
                <span className={styles.playerName}>{name}</span>
                <span className={styles.messageText}>{text}</span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
