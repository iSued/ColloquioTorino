import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FirstPage from "./Pages/FirstPage/FirstPage";
import SecondPage from "./Pages/SecondPage/SecondPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import { Router } from "@reach/router";

function App() {
  return (
    <>
      <Router>
        <FirstPage path="/" />
        <SecondPage path="/browse" />
        <AuthPage path="/auth" />
      </Router>
    </>
  );
}
export default App;
