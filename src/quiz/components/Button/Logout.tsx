import React from "react";
import {useDispatch} from "react-redux";
import {removeToken} from "../../../redux/actions/tokenActions";
import {useHistory} from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const logOutHandler = () => {
        dispatch(removeToken());
        history.replace('/login')
    };
    return (
        <button className='btn logout-btn text-light' onClick={logOutHandler}>
            LOG OUT
        </button>
    )
}

export default Logout