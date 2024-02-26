export interface IListItemProps {
  // 삭제 버튼의 onClick callback 함수
  onClickDelete?: () => void;
  // 리스트에 보여질 텍스트
  text?: string;
}
