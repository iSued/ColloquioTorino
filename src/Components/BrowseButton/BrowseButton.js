import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "@reach/router";

const ColorButton = withStyles((theme) => ({
  root: {
    borderRadius: "2rem",
    color: "black",
    fontWeight: "bold",
    backgroundColor: "white",
    "&:hover": {
      color: "white",
      backgroundColor: "#544af4",
      boxShadow: "0 0 0 0.1rem #544af4",
    },
    "&:active": {
      color: "white",
      backgroundColor: "#544af4",
      boxShadow: "0 0 0 0.1rem #544af4",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.1rem #544af4",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(5),
  },
}));

export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Click to discover more">
        <Link to="/browse">
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Discover More
          </ColorButton>
        </Link>
      </Tooltip>
    </div>
  );
}
