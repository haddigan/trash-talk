import classNames from "classnames/bind";
import styles from "./DirectionalPad.module.css";

const cx = classNames.bind(styles);

export const DirectionalPad = ({
  upButton,
  leftButton,
  rightButton,
  downButton,
}) => {
  return (
    <div className={cx("dPadContainer")}>
      <div className={cx("dPadFlex")}>{upButton}</div>
      <div className={cx("dPadFlex")}>
        {leftButton}
        {rightButton}
      </div>
      <div className={cx("dPadFlex")}>{downButton}</div>
    </div>
  );
};
