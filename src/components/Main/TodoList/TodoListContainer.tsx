import { connect } from "react-redux"
import { TodoList } from "./TodoList"
import { AppStateType } from "../../../redux/redux-store"
import { TodoListItemType } from "../../../types/types"
import { actions } from "../../../redux/main-reducer"

type TodoListContainerPropsTypes = {
    todos: Array <TodoListItemType>,
    filter: string,
    addTodo: (id: number, completed: boolean, title: string) => void,
    removeTask: (id: number) => void,
    setCompleted: (id: number) => void,
    setFilter: (filter: string) => void,
}

const TodoListContainer: React.FunctionComponent <TodoListContainerPropsTypes> = (props) => {
    return (
        <TodoList { ...props } />
    )
}

let mapStateToProps = (state: AppStateType) => {
    return {
        todos: state.main.todos,
        filter: state.main.filter,
    }
}

export default connect (mapStateToProps, { addTodo: actions.addTodo, removeTask: actions.removeTask, 
                                            setCompleted: actions.setCompleted, setFilter: actions.setFilter })(TodoListContainer)