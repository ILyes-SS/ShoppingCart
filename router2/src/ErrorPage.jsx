import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      this is error page
      <Link to={"/"}>go back to main</Link>
    </div>
  );
};

export default ErrorPage;
