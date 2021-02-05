import { useState, useEffect } from "react";

export const useCountdown = (startTime) => {
  const [seconds, setSeconds] = useState(startTime);

  const handleReset = () => {
    setSeconds(startTime);
  };

  useEffect(() => {
    let interval = null;
    interval = setInterval(() => {
      setSeconds((s) => s - 1);
    }, 1000);
    if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [seconds]);

  return [seconds, handleReset];
};
