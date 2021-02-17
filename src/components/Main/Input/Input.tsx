import { useState } from "react"
import { TextField } from "@material-ui/core"
import { AddTodoType } from "../../../types/types"
import useStyles from "./InputStyle"

type InputPropsType = {
    addTodo: AddTodoType
}

export const Input: React.FunctionComponent <InputPropsType> = (props) => {
    const style = useStyles ()

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
        <div className = {style.input} >
            <TextField onKeyPress = {createTodo} onChange = {onChangeHandler} fullWidth = {true} id="standard-basic" label="Enter new todo..." value = {query} />
        </div>
    )
}