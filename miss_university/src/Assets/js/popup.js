import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  date: {
    paddingBottom: "20px",
    fontSize: 18,
  },
  buttons: {
    paddingTop: "20px",
    color: "white",
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    columnGap: 15,
  },
  popupButton1Style: {
    display: "flex",
  },
  popupButton: {
    border: "none",
    backgroundColor: "transparent",
    fontSize: 14,
    cursor: "pointer",
    padding: 0,
    margin: 0,
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
