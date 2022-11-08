import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./components/header";
import Profile from "./pages/profile";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import {useSelector} from "react-redux";


function Main() {
    const {isLoggedIn} = useSelector((state: any) => state.tokenReducer)
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/user/profile" exact>
                    {isLoggedIn ? <Profile/> : <Redirect to='/login'/>}
                </Route>
                <Route path="/login">
                    {isLoggedIn ? <Redirect to='/user/profile'/> : <Login/>}
                </Route>
                <Route path="/signup">
                    {isLoggedIn ? <Redirect to='/user/profile'/> : <Signup/>}
                </Route>
                <Route path='*' exact>
                    {isLoggedIn ? <Redirect to='/user/profile'/> : <Redirect to='/login'/>}
                </Route>
            </Switch>
        </>
    )
}

export default Main;