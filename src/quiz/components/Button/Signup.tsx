import React from "react";

const Signup = (props:any) => {
    return (
        <>
            <button className={`btn btn-primary signup-btn ${props.className}`} onClick={props.onClick}>
                SIGN UP
            </button>
        </>
    );
};

export default Signup;
