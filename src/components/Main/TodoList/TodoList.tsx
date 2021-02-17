import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@material-ui/core";
import {
  AddTodoType,
  RemoveTodoType,
  TodoListItemType,
} from "../../../types/types";
import { TodoItem } from "./TodoItem/TodoItem";
import { Input } from "../Input/Input";
import useStyles from "./TodoListStyle";

type TodoListPropsType = {
  todos: Array<TodoListItemType>;
  addTodo: AddTodoType;
  removeTask: RemoveTodoType;
  setCompleted: (id: number) => void;
};

export const TodoList: React.FunctionComponent<TodoListPropsType> = (props) => {
  const style = useStyles(); // styles from Material-UI
  const [filter, setFilter] = useState("All");

  const handleChange = (e: any) => {
    setFilter(e.target.value);
  };
  let chosenFilter; // Filter wich is chosen right now
  if (filter === "All") {
    chosenFilter = props.todos.map((t) => {
      return (
        <TodoItem
          key={t.id}
          title={t.title}
          completed={t.completed}
          id={t.id}
          removeTask={props.removeTask}
          setCompleted={props.setCompleted}
        />
      );
    });
  } else if (filter === "Active") {
    chosenFilter = props.todos
      .filter((todo) => todo.completed === false)
      .map((t) => {
        return (
          <TodoItem
            key={t.id}
            title={t.title}
            completed={t.completed}
            id={t.id}
            removeTask={props.removeTask}
            setCompleted={props.setCompleted}
          />
        );
      });
  } else if (filter === "Completed") {
    chosenFilter = props.todos
      .filter((todo) => todo.completed === true)
      .map((t) => {
        return (
          <TodoItem
            key={t.id}
            title={t.title}
            completed={t.completed}
            id={t.id}
            removeTask={props.removeTask}
            setCompleted={props.setCompleted}
          />
        );
      });
  }

  return (
    <div>
      <Input addTodo={props.addTodo} />
      <div>
        <FormControl className={style.formControl}>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            onChange={handleChange}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Active"}>Active</MenuItem>
            <MenuItem value={"Completed"}>Completed</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div>
            {props.todos.length 
                ? <div>{chosenFilter}</div> 
                : <Typography className = {style.emptyListTitle} variant = "h4" >You dont have any todos</Typography>
            }
        </div>
    </div>
  );
};
