import "./errorMessage.css";

const ErrorMessage = (props) => {
  return (
    <div>
      <p className="error-message">{props.error}</p>
    </div>
  );
};

export default ErrorMessage;
