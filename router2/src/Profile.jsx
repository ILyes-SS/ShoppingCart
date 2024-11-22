import { useState } from "react";
import { Outlet } from "react-router-dom";

const Profile = () => {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <p>this is the profile page </p>

      <p>{count}</p>
      <h1>there are my children</h1>

      <Outlet context={[count, setCounter]} />
    </div>
  );
};

export default Profile;
