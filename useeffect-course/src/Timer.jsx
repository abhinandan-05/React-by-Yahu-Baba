import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        prev + 1;
      });
    },1000);

    return () => {
      clearInterval(interval);
      console.log("Timer Cleared");
    };
  }, []);

  return (
    <div>
      <h1>Seconds : {seconds}</h1>
    </div>
  );
}

export default Timer;
