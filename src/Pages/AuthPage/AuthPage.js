import React from "react";
import SignInSide from "../../Components/SignInSide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  copyright: {
    "&:hover": {
      color: "#544af4",
    },
  },
  image: {
    backgroundColor: "salmon",
    borderRadius: "1rem",
    maxWidth: "100%",
  },
  subTitle: { color: "#544af4" },
  title: { fontWeight: "bold" },
  underliedSubtitle: {
    fontWeight: "bold",
    textDecoration: "underline",
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
  },
}));

function FirstPage() {
  const classes = useStyles();
  return (
    <>
      <SignInSide />
    </>
  );
}
export default FirstPage;
