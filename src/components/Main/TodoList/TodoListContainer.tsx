import { connect } from "react-redux";
import { TodoList } from "./TodoList";
import { AppStateType } from "../../../redux/redux-store";
import {
  AddTodoType,
  RemoveTodoType,
  TodoListItemType,
} from "../../../types/types";
import { actions } from "../../../redux/main-reducer";

type TodoListContainerPropsTypes = {
  todos: Array<TodoListItemType>;
  addTodo: AddTodoType;
  removeTask: RemoveTodoType;
  setCompleted: (id: number) => void;
};

const TodoListContainer: React.FunctionComponent<TodoListContainerPropsTypes> = (props) => {
  return <TodoList {...props} />;
};

// Added type for state. In filer redux-store.ts
let mapStateToProps = (state: AppStateType) => {
  return {
    todos: state.main.todos,
  };
};

export default connect(mapStateToProps, {
  addTodo: actions.addTodo,
  removeTask: actions.removeTask,
  setCompleted: actions.setCompleted,
})(TodoListContainer);
