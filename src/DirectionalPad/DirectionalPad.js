import styles from "./DirectionalPad.module.css";

export const DirectionalPad = ({
  upButton,
  leftButton,
  rightButton,
  bottomButton,
}) => {
  return (
    <div className={styles.dPadContainer}>
      <div className={styles.dPadFlex}>{upButton}</div>
      <div className={styles.dPadFlex}>
        {leftButton}
        {rightButton}
      </div>
      <div className={styles.dPadFlex}>{bottomButton}</div>
    </div>
  );
};
