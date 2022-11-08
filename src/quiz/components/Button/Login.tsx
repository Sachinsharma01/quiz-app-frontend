import React from "react";
const Login = (props:any) => {
    return (
        <>
            <button type="submit" className={`btn btn-primary login-btn ${props.className}`} onClick={props.onClick}>LOG IN</button>
        </>
    );
};

export default Login;
