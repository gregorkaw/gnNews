import { useState, useEffect } from "react";


function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  
  return <span className="text-md">Current time: {date.toLocaleTimeString()}</span>;
}

export default Clock;
