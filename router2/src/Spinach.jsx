import { Navigate, useParams } from "react-router-dom";
import Tomato from "./Tomato";
import DefaultProfile from "./DefaultProfile";
import Salad from "./Salad";
const Spinach = () => {
  let { name } = useParams();
  return (
    <div>
      <p>I am spinach page and have a dynamic segment</p>
      {name == "salad" ? (
        <Salad />
      ) : name == "tomato" ? (
        <Tomato />
      ) : null
      //       <Navigate to="/" /> //this wont work it returns error page
      }
    </div>
  );
};

export default Spinach;
