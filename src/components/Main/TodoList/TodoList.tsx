import { useState } from "react"
import { TextField, Checkbox } from "@material-ui/core"
import { TodoListItemType } from "../../../types/types"
import { TodoItem } from "./TodoItem/TodoItem"

type TodoListPropsType = {
    todos: Array <TodoListItemType>,
    addTodo: (id: number, completed: false, title: any) => void,
    removeTask: (id: number) => void,
    setCompleted: (id: number) => void,
    setFilter: (filter: string) => void,
}   
interface Props extends React.Props<typeof Checkbox> {
    label : string;
    style: any;
    defaultChecked?: boolean;
    checkedIcon?: any;
    uncheckedIcon?: any;
};

export const TodoList: React.FunctionComponent <TodoListPropsType> = (props) => {

    const [ query, setQuery ] = useState ("")
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery (e.target.value)
    }
    const createTodo = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            props.addTodo (Date.now (), false, query)
            setQuery ("")
        }
    }


    return (
        <div>
            <div>
                <TextField onKeyPress = {createTodo} onChange = {onChangeHandler} fullWidth = {true} id="standard-basic" label="Enter new todo..." value = {query} />
            </div>
            {props.todos.map (t => {
                return (
                   <TodoItem key = {t.id} title = {t.title} completed = {t.completed} id = {t.id} removeTask = {props.removeTask} setCompleted = {props.setCompleted} />
                )
            })}
        </div>
    )
}