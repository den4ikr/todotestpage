import { connect } from "react-redux"
import { TodoList } from "./TodoList"
import { AppStateType } from "../../../redux/redux-store"
import { TodoListItemType } from "../../../types/types"
import { actions } from "../../../redux/main-reducer"

type TodoListContainerPropsTypes = {
    todos: Array <TodoListItemType>
    addTodo: (id: number, completed: boolean, title: string) => void,
}

const TodoListContainer: React.FunctionComponent <TodoListContainerPropsTypes> = (props) => {
    return (
        <TodoList { ...props } />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        todos: state.main.todos
    }
}

export default connect (mapStateToProps, { addTodo: actions.addTodo })(TodoListContainer)