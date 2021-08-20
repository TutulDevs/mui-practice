import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Wrong Page</h1>
      <Link to='/'>Go to Home</Link>
    </>
  );
};

export default ErrorPage;
