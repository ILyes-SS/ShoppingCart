import { Link } from "react-router-dom";
const DefaultProfile = () => {
  return (
    <div>
      <p>I am the default page</p>
      <Link to="/">go to the home page</Link>
    </div>
  );
};

export default DefaultProfile;
