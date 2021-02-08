import classNames from "classnames/bind";
import styles from "./PlayerName.module.css";

const cx = classNames.bind(styles);

export const PlayerName = ({ handleSetName }) => {
  return (
    <div className={cx("playerName")}>
      <h2 className={cx("heading")}>Enter your name</h2>
      <form
        className={cx("playerNameForm")}
        onSubmit={(e) => {
          e.preventDefault();
          handleSetName(e.target.name.value);
        }}
      >
        <input
          className={cx("nameFormControl")}
          type="text"
          id="name"
          name="name"
          defaultValue="Player 1"
        />
        <button className={cx(["nameFormControl", "nameButton"])} type="submit">
          SAVE
        </button>
      </form>
    </div>
  );
};
