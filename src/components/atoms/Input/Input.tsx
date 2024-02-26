import { IInputProps } from "./input.types";
import styles from "./input.module.scss";

const Input = ({ label, placeholder, helperText, onChange }: IInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div className={styles.container}>
      {label && <span className={styles.label}>{label}</span>}
      <input placeholder={placeholder} onChange={handleChange} />
      {helperText && <p className={styles.helperText}>{helperText}</p>}
    </div>
  );
};

export default Input;
