import React, { useRef } from "react";

const App = () => {
  const timerRef = useRef();

  const start = () => {
    timerRef.current = setInterval(() => {
      console.log("Hello");
    }, 1000);
  };

  const stop = () => {
    clearInterval(timerRef.current);
  };

  return (
    <>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
};

export default App