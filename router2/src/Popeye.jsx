import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
const Popeye = () => {
  const [count, setCounter] = useOutletContext();
  return (
    <div>
      <p>I am popeye page</p>
      <button onClick={() => setCounter(count + 1)}>increment</button>
      <Link to="/">got to home</Link>
    </div>
  );
};

export default Popeye;
