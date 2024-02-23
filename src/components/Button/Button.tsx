import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.types";

const Button = ({
  children,
  onClick,
  varient = "contained",
  size = "medium",
}: IButtonProps) => {
  console.log(varient);
  console.log(size);
  return (
    <div className={`${styles.button} ${styles[varient]}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
