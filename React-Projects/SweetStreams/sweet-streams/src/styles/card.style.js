import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        backgroundColor: "black",
        color: "white",
        maxWidth: 250,
        minWidth: 200,
        height: 420,
        margin: 10,
        padding: 5,
        overflowY: "auto",
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