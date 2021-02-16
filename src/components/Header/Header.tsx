import { AppBar, Toolbar, Typography } from "@material-ui/core"

export const Header: React.FunctionComponent = () => {
    return (
        <AppBar position = "static" >
            <Toolbar variant = "dense" >
                <Typography variant = "h6" color = "inherit" >
                    Todo App
                </Typography>
            </Toolbar>
        </AppBar>
    )
}