import {Provider} from "react-redux";
import store from "../redux/store";
import Header from "./components/header";
import {Route, Switch} from "react-router-dom";
import Profile from "./pages/profile";
import React from "react";

function Main() {
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
    )
}

export default Main;