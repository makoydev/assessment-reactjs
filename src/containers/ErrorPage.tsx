import { useNavigate } from "react-router-dom";
import "../App.css";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Oops! 404 Sorry, page not found.</h1>
      <div>
        <button
          className="back-btn"
          onClick={() => {
            navigate("/");
          }}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
