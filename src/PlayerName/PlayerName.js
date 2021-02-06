import classNames from "classnames/bind";
import styles from "./PlayerName.module.css";

const cx = classNames.bind(styles);

export const PlayerName = ({ handleSetName }) => {
  return (
    <div className={cx({ playerName: true })}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSetName(e.target.name.value);
        }}
      >
        <input
          className={cx({ nameFormControl: true })}
          type="text"
          id="name"
          name="name"
        />
        <button
          className={cx({ nameFormControl: true, nameButton: true })}
          type="submit"
        >
          SAVE
        </button>
      </form>
    </div>
  );
};
