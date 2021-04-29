import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Favorites from "../../Assets/favorites.svg";
const useStyles = makeStyles((theme) => ({
  img: {
    width: "50%",
  },
}));

export default function NavigationFavorites() {
  const classes = useStyles();

  return (
    <div className="d-flex justify-content-center align-items-center">
      <img src={Favorites} alt="thumbnail" className={classes.img} />
    </div>
  );
}
