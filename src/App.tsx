import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import Header from "./quiz/components/header";
import Profile from "./quiz/pages/profile";
import "./App.css";

function App() {
    return (
        <>
            <Provider store={store}>
                <Header/>
                <Switch>
                    <Route path="/user/profile" exact>
                        <Profile/>
                    </Route>
                </Switch>
            </Provider>
        </>
    );
}

export default App;
