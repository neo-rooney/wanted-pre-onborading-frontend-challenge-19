export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  varient?: "contained" | "outlined" | "text";
  size?: "large" | "medium" | "small";
}
