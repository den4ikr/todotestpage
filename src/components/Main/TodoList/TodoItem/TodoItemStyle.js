import {makeStyles} from "@material-ui/core/styles";

const useStyles  = makeStyles ({
    card: {
        marginTop: "15px",
        marginLeft: "10px",
        marginRight: "10px",
    },
    mainRow: {
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between"
    },
    row: {
        display: 'flex',
        alignItems: "center",
    }
})

export default useStyles;