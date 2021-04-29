import React from "react";
import "./SecondPage.css";
import { Row, Col, Container } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Search from "../../Components/Navigation/Search";
import Favorites from "../../Components/Navigation/Favorites";
import Profile from "../../Components/Navigation/Profile";
import Places from "../../Components/Navigation/Places";
import { Link } from "@reach/router";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PersonIcon from "@material-ui/icons/Person";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "inherit",
  },

  Link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      textDecoration: "none",
      color: "#544af4",
    },
    "&:active": {
      textDecoration: "none",
      color: "#544af4",
    },
    "&:focus": {
      textDecoration: "none",
      color: "#544af4",
    },
  },

  title: { fontWeight: "bold" },
}));
function SecondPage() {
  const [value, setValue] = React.useState("search");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function Sliding() {
    if (value === "search") {
      return <Search />;
    }
    if (value === "favorites") {
      return <Favorites />;
    }
    if (value === "places") {
      return <Places />;
    }
    if (value === "profile") {
      return <Profile />;
    }
  }
  const classes = useStyles();
  return (
    <>
      <Container className="justify-content-center align-items-center mainContainer">
        <Row xs={1} md={2} lg={2} xl={2}>
          <Col className="d-flex  align-items-center">
            <header className={classes.textContainer}>
              <Link to="/" className={classes.Link}>
                <h1 className={classes.title}>footBook</h1>
              </Link>
            </header>
          </Col>
          <Col className="d-flex justify-content-center align-items-center mb-2 stickySide">
            <div className="d-flex justify-content-center align-items-center">
              {" "}
              <BottomNavigation
                value={value}
                onChange={handleChange}
                className={classes.root}
              >
                <BottomNavigationAction
                  label="Search"
                  value="search"
                  icon={<SearchIcon />}
                />
                <BottomNavigationAction
                  label="Favorites"
                  value="favorites"
                  icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                  label="Places"
                  value="places"
                  icon={<LocationOnIcon />}
                />
                <BottomNavigationAction
                  label="Profile"
                  value="profile"
                  icon={<PersonIcon />}
                />
              </BottomNavigation>
            </div>
          </Col>
        </Row>
        <Row xs={1} md={1} lg={1} xl={1} className="mt-5">
          <Col className="d-flex justify-content-center align-items-center">
            <Sliding />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default SecondPage;
