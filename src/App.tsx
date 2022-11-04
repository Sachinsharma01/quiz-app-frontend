import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./quiz/components/header";
import Profile from "./quiz/pages/profile";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/user/profile" exact>
          <Profile />
        </Route>
      </Switch>
    </>
  );
}

export default App;
