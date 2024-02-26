export interface IButtonProps {
  /** 버튼의 텍스트 */
  children: React.ReactNode;
  /** 버튼의 onClick callback 함수 */
  onClick?: () => void;
  /** 버튼의 형태 */
  varient?: "contained" | "outlined" | "text";
  /** 버튼의 사이즈 */
  size?: "large" | "medium" | "small";
}
