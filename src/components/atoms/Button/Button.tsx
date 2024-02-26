import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.types";

const Button = ({
  children,
  onClick,
  varient = "contained",
  size = "medium",
}: IButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={`${styles.button} ${styles[varient]} ${styles[size]}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
