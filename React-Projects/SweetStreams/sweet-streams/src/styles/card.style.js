import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        color: "white",
        maxWidth: 250,
        minWidth: 200,
        height: 425,
        margin: 10,
        padding: 5,
        overflowY: "auto",
        border: "outset",
    },
    media: {
        flex: 1,
        height: 250,
        margin: 0,
    },
    content: {
        color: "white",
        alignContent: "left",
    },
  });