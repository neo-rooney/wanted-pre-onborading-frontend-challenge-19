export interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  varient?: "contained" | "outlined";
}
