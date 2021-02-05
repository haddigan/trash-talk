import { useCountdown } from "./useCountdown";

export const Timer = ({ startTime = 5 }) => {
  const [seconds, reset] = useCountdown(startTime);
  return (
    <div>
      <div>{seconds}s</div>
      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
