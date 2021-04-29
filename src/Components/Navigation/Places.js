import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Places from "../../Assets/places.svg";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "50%",
  },
}));

export default function NavigationPlaces() {
  const classes = useStyles();

  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={Places} alt="thumbnail" className={classes.img} />
    </div>
  );
}
