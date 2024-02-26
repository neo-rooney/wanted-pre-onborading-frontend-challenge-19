import checkIconPath from "../.././../assets/icons/check-circle-2.svg";
import Button from "../../atoms/Button";
import styles from "./ListItem.module.scss";
import { IListItemProps } from "./ListItem.types";

const ListItem = ({ onClickDelete, text }: IListItemProps) => {
  return (
    <ul className={styles.container}>
      <div className={styles.leftItems}>
        <img src={checkIconPath} alt="checkIcon" />
        <span>{text}</span>
      </div>
      <Button size="small" varient="outlined" onClick={onClickDelete}>
        삭제
      </Button>
    </ul>
  );
};

export default ListItem;
