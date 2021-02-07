import styles from "./List.module.css";
import { keyIcons } from "../content";

const { upButton, leftButton, rightButton, downButton } = keyIcons;
const arrowIcons = [upButton, leftButton, rightButton, downButton];

export const List = ({ content, type, onSendMessage: handleSendMessage }) => {
  return (
    <div className={styles.list}>
      <h2 className={styles.quickChatHeading}>Quick Chat</h2>
      <h3 className={styles.typeHeading}>{type}</h3>
      {!content
        ? null
        : content.map((text, i) => {
            return (
              <div key={i}>
                <button
                  onClick={() => handleSendMessage(text)}
                  className={styles.button}
                >
                  <span className={styles.icon}>{arrowIcons[i]}</span>
                  <span>{text}</span>
                </button>
              </div>
            );
          })}
    </div>
  );
};