import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <p>The page you are trying to access does not exist</p>
      <Link to={"/"}>Go to home Page</Link>
    </>
  );
}
