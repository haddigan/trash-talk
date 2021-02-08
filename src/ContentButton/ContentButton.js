import { keyIcons } from "../app/content";
import styles from "./ContentButton.module.css";

export const ContentButton = ({ onClick: handleClick, keyName }) => (
  <button className={styles.button} onClick={handleClick}>
    {keyIcons[keyName]}
  </button>
);
