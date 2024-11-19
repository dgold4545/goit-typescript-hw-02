import css from "./ErrorMessage.module.css";

const ErrorMessage = () => {
    return (
    <p className={css.text}>
      Something went wrong, try again
    </p>
  );
};
export default ErrorMessage;
