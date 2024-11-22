import { useState } from "react";
import { useEffect } from "react";

export default function Clock() {
  let [counter, setCounter] = useState(0);

  //runs only once the component appears and setInterval is asynchrous
  //so it is the first setInterval that keeps updating the counter
  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, []);
  return <p>{counter} seconds have passed.</p>;
}
