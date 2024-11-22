import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>this is the main page</p>
      <Link to={"profile"}>Navigate to profile</Link>
      <p>when the counter reach 3 u will be redirected to popeye page</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      {count == 3 ? <Navigate to={"profile/popeye"} /> : null}
    </div>
  );
};

export default App;
