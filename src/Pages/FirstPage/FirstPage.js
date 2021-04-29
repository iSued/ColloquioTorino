import React from "react";
import Event from "../../Assets/Event.svg";
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, Container } from "react-bootstrap";
import Pricing from "../../Components/Pricing/index";
import Typography from "@material-ui/core/Typography";
import BrowseButton from "../../Components/BrowseButton/BrowseButton";
import "./FirstPage.css";
import AvatarMenu from "../../Components/Avatar/Avatar";
import { Link } from "@reach/router";

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
function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link className={classes.copyright} color="inherit" to="#">
        footBook
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function FirstPage() {
  const classes = useStyles();
  return (
    <>
      <Container className="justify-content-center align-items-center mainContainer">
        <Row xs={1} md={2} lg={2} xl={2}>
          <Col className="d-flex  align-items-center">
            <header className={classes.textContainer}>
              <h1 className={classes.title}>footBook</h1>
              <h4 className={classes.subTitle}>
                \ all you need about football
              </h4>
              <p className="mt-4">
                1.
                <span className={classes.underliedSubtitle}>
                  Search and book
                </span>{" "}
                the place for the next game with your friends or colleagues
              </p>
              <p className="mt-4">
                2.
                <span className={classes.underliedSubtitle}>
                  Register and publish
                </span>{" "}
                the place where others can believe themselves Cristiano Ronaldo.
              </p>
              <p className="mt-4">
                3.
                <span className={classes.underliedSubtitle}>
                  Watch live scores and stay updated
                </span>{" "}
                on your favorite team.
              </p>
              <p className="mt-4">
                4.
                <span className={classes.underliedSubtitle}>
                  Take part in discussions
                </span>{" "}
                on the most interesting sports topics
              </p>
            </header>
          </Col>
          <Col className="d-flex justify-content-center align-items-center mb-2 stickySide">
            <div className={classes.imageContainer}>
              <div className="d-flex justify-content-center align-items-center">
                <AvatarMenu />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <BrowseButton />
              </div>
              <img src={Event} alt="logo" className={classes.image} />
            </div>
          </Col>
          <Col className="d-flex  align-items-center">
            <div>
              <h4 className={classes.title}>What?</h4>
              <p>
                footBook is a community that wants to bring together all the
                people with a common passion: football
              </p>
              <h4 className={classes.title}>History?</h4>
              <p>
                Sued's interview for now, but the future is a question mark and
                who knows it could become a serious project
              </p>
              <h4 className={classes.title}>Pricing?</h4>
              <p>
                prices are to be considered{" "}
                <span className={classes.underliedSubtitle}>
                  for those who want publish places
                </span>{" "}
              </p>
              <div>
                <Pricing />
              </div>
              <div className="mt-4">
                <Copyright />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default FirstPage;
