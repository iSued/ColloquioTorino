import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EnterprisePlan from "./enterprisePlan";
import BasePlan from "./basePlan";
import ProPlan from "./proPlan";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    display: "flex",
    borderRadius: "1rem",
    backgroundColor: " 	#FF9966",
    marginBottom: "1.3rem",
    "&:hover": {
      background: "#544af4",
      padding: "0.5rem",
      cursor: "pointer",
    },
  },
  root1: {
    display: "flex",
    borderRadius: "1rem",
    backgroundColor: "  	#FF9933",
    marginBottom: "1.3rem",
    "&:hover": {
      background: "#544af4",
      padding: "0.5rem",
      cursor: "pointer",
    },
  },
  root2: {
    display: "flex",
    borderRadius: "1rem",
    backgroundColor: "#FFCC33",
    marginBottom: "1.3rem",
    "&:hover": {
      background: "#544af4",
      padding: "0.5rem",
      cursor: "pointer",
    },
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <>
      <BasePlan />
      <ProPlan />
      <EnterprisePlan />
    </>
  );
}
