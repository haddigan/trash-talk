import { keyIcons } from "../content";
import styles from "./ContentButton.module.css";

export const ContentButton = ({ onClick: handleClick, keyName }) => (
  <button className={styles.button} onClick={handleClick}>
    {keyIcons[keyName]}
  </button>
);
