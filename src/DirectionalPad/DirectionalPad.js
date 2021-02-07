import React from "react";
import classNames from "classnames/bind";
import styles from "./DirectionalPad.module.css";

const cx = classNames.bind(styles);

export const DirectionalPad = ({ children }) => {
  const buttons = React.Children.toArray(children);
  return (
    <div className={cx("buttonContainer")}>
      <div className={cx("button", "upButton")}>{buttons[0]}</div>
      <div className={cx("button", "leftButton")}>{buttons[1]}</div>
      <div className={cx("button", "rightButton")}>{buttons[2]}</div>
      <div className={cx("button", "downButton")}>{buttons[3]}</div>
    </div>
  );
};
