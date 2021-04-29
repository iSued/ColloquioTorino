import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "../../Assets/profile.svg";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "50%",
  },
}));

export default function NavigationProfile() {
  const classes = useStyles();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <img src={Profile} alt="thumbnail" className={classes.img} />
      </div>
    </>
  );
}
