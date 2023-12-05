import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
    ampm: "",
  });

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const dateNow = new Date();
      const hr = dateNow.getHours();
      const min = dateNow.getMinutes();
      const sec = dateNow.getSeconds();

      const formattedHours = hr < 10 ? `0${hr}` : hr;
      const formattedMinutes = min < 10 ? `0${min}` : min;
      const formattedSeconds = sec < 10 ? `0${sec}` : sec;
      const formattedTime = hr > 12 ? `pm` : 'am';

      setTime({
        hours: formattedHours,
        minutes: formattedMinutes,
        seconds: formattedSeconds,
        ampm: formattedTime,
      })
    }, 1000);

    return () => clearInterval(clockInterval)
  }, [])

  return (
    <>
      <div className="container">
        <h2 className="title">Easy Digial Clock</h2>
        <p className="sub-title">Observe the current time with AM & PM! 😊</p>

        <span className="emoji">⏰</span>
        <div className="clock">
          <div>{time.hours}</div>
          <div>{time.minutes}</div>
          <div>{time.seconds}</div>
          <div>{time.ampm.toUpperCase()}</div>
        </div>
      </div>
    </>
  );
}

export default App;
