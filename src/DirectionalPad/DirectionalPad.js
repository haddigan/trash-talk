import React from "react";
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
    <div className={cx("buttonContainer")}>
      <div className={cx("button", "upButton")}>{upButton}</div>
      <div className={cx("button", "leftButton")}>{leftButton}</div>
      <div className={cx("button", "rightButton")}>{rightButton}</div>
      <div className={cx("button", "downButton")}>{downButton}</div>
    </div>
  );
};
