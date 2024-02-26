import Button from "../atoms/Button";
import Input from "../atoms/Input";
import ListItem from "../molecules/ListItem";
import styles from "./List.module.scss";

const List = () => {
  return (
    <section className={styles.container}>
      <span className={styles.title}>ToDo List</span>

      <div className={styles.inputWrapper}>
        <Input />
        <Button size="large">등록</Button>
      </div>
      <div className={styles.listWrapper}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </section>
  );
};

export default List;
