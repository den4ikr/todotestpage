import { useState } from "react"
import { Card, CardContent, Checkbox, Typography, IconButton } from "@material-ui/core"
import useStyles from "./TodoItemStyle"
import DeleteIcon from '@material-ui/icons/Delete'

type TodoItemPropsType = {
    title: string,
    id: number,
    completed: boolean,
    removeTask: (id: number) => void,
    setCompleted: (id: number) => void,
}

export const TodoItem: React.FunctionComponent <TodoItemPropsType> = (props) => {
    const styles = useStyles ()

    const removeTask = () => {
        props.removeTask (props.id)
    }
    const setCompleted = () => {
        props.setCompleted (props.id)
    }

    return (
        <Card className = {styles.card} >
            <CardContent>
                <div className = {styles.mainRow} >
                    <div className = {styles.row} >
                        <Checkbox checked = {props.completed} onChange = {setCompleted} color = "primary" />
                        <Typography variant = "h5" >
                            {props.title} 
                        </Typography>
                    </div>
                    <IconButton onClick = {removeTask} area-label="Delete from cart" >
                        <DeleteIcon color = "secondary" />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    )
}