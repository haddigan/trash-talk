import styles from "./List.module.css";
const arrowIcons = ["🔼", "◀️", "▶️", "🔽"];

export const List = ({ content, type, onSendMessage }) => {
  return (
    <div className={styles.list}>
      <h2 className={styles.quickChatHeading}>Quick Chat</h2>
      <h3 className={styles.typeHeading}>{type}</h3>
      {content.map((text, i) => {
        return (
          <div>
            <button onClick={onSendMessage} className={styles.button}>
              <span className={styles.icon}>{arrowIcons[i]}</span>
              <span>{text}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};
