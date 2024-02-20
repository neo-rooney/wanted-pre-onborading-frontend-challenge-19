import styles from "./Button.module.scss";
import { IButtonProps } from "./Button.types";

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <div className={styles.container} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
