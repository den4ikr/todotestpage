import { Card, CardContent, Checkbox, Typography, IconButton } from "@material-ui/core"
import useStyles from "./TodoItemStyle"
import DeleteIcon from '@material-ui/icons/Delete'

type TodoItemPropsType = {
    title: string,
}

export const TodoItem: React.FunctionComponent <TodoItemPropsType> = (props) => {
    const styles = useStyles ()

    return (
        <Card className = {styles.card} >
            <CardContent>
                <div className = {styles.mainRow} >
                    <div className = {styles.row} >
                        <Checkbox color = "primary" />
                        <Typography variant = "h5" >
                            {props.title}
                        </Typography>
                    </div>
                    <IconButton area-label="Delete from cart" >
                        <DeleteIcon color = "secondary" />
                    </IconButton>
                </div>
            </CardContent>
        </Card>
    )
}