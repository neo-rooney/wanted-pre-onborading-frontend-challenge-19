import { useState } from "react";
import { RootState } from "../../store/store";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import ListItem from "../molecules/ListItem";
import styles from "./List.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from "../../store/slices/todo/todoSlice";

const List = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const todos = useSelector((state: RootState) => state.todo.todos);
  const dispatch = useDispatch();

  const handleInputChange = (text: string) => {
    setInputValue(text);
  };

  const handleRegister = () => {
    dispatch(add(inputValue));
    setInputValue("");
  };

  const handleDelete = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <section className={styles.container}>
      <span className={styles.title}>ToDo List</span>

      <div className={styles.inputWrapper}>
        <Input onChange={handleInputChange} value={inputValue} />
        <Button size="large" onClick={handleRegister}>
          등록
        </Button>
      </div>
      <div className={styles.listWrapper}>
        {todos.map((item) => (
          <ListItem
            key={item.id}
            text={item.text}
            onClickDelete={() => handleDelete(item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default List;
