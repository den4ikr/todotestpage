import { useState } from "react"
import { TextField, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core"
import { TodoListItemType } from "../../../types/types"
import { TodoItem } from "./TodoItem/TodoItem"
import useStyles from "./TodoListStyle"

type TodoListPropsType = {
    todos: Array <TodoListItemType>,
    addTodo: (id: number, completed: false, title: any) => void,
    removeTask: (id: number) => void,
    setCompleted: (id: number) => void,
}   


export const TodoList: React.FunctionComponent <TodoListPropsType> = (props) => {
    const style = useStyles ()
    const [ filter, setFilter ] = useState ("All")

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
    const handleChange = (event: any) => {
        setFilter(event.target.value);
    };
    let chosenFilter;
    if (filter === "All") {
        chosenFilter = props.todos.map (t => {
            return (
                <TodoItem key = {t.id} title = {t.title} completed = {t.completed} id = {t.id} removeTask = {props.removeTask} setCompleted = {props.setCompleted} />
            )
        }) 
    } else if (filter === "Active") {
        chosenFilter = props.todos.filter (todo => todo.completed === false).map (t => {
            return (
                <TodoItem key = {t.id} title = {t.title} completed = {t.completed} id = {t.id} removeTask = {props.removeTask} setCompleted = {props.setCompleted} />
            )
        }) 
    } else if (filter === "Completed") {
        chosenFilter = props.todos.filter (todo => todo.completed === true).map (t => {
            return (
                <TodoItem key = {t.id} title = {t.title} completed = {t.completed} id = {t.id} removeTask = {props.removeTask} setCompleted = {props.setCompleted} />
            )
        }) 
    }
  


    return (
        <div>
            <div className = {style.input} >
                <TextField onKeyPress = {createTodo} onChange = {onChangeHandler} fullWidth = {true} id="standard-basic" label="Enter new todo..." value = {query} />
            </div>
            <div>
                <FormControl className={style.formControl}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
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
              {chosenFilter}
            </div>
        </div>
    )
}