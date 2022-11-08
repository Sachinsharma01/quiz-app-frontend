import React, {useState} from 'react';
import LoginButton from "../../components/Button/Login";
import ProcessRest from "../../../config/axios";
import {useDispatch} from "react-redux";
import {updateToken} from "../../../redux/actions/tokenActions";
import {Redirect, useHistory} from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()

    const loginHandler = async (event: any) => {
        event.preventDefault();
        setUsername('');
        setEmail('');
        setPassword('');
        const obj: any = {
            username: username,
            email: email,
            password: password
        }
        const body: any = {
            url: "http://localhost:3000/quiz/api/auth/create-token",
            method: "POST",
            headers: {
                "Content-type" : 'application/json',
            },
            data: {...obj}
        }
        const response = await ProcessRest(body);
        console.log(response)
        const token = await response.data.data.data.token;
        dispatch(updateToken(token));
        history.replace('/user/profile');

    }
    return (
        <>
            <div className="login-container row row-centered w-100 d-flex justify-content-center align-items-center">
                <div className="login-wrapper container-fluid w-25 card rounded-3 container-lg">
                    <h2 className="text-center text-light mt-2">LOG IN</h2>
                    <input name="username" type="text" value={username} placeholder="USERNAME"
                           className='mt-4 mx-2 p-2 rounded-2'
                           onChange={(e) => setUsername(e.target.value)}/>
                    <input name="email" type="email" value={email} placeholder="EMAIL"
                           className='mt-4 mx-2 p-2 rounded-2'
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input name="password" type="password" value={password} placeholder="PASSWORD"
                           className='mt-4 mx-2 p-2 rounded-2'
                           onChange={(e) => setPassword(e.target.value)}/>
                    <div className="mt-4 mx-2">
                        <LoginButton onClick={loginHandler} className="float-end"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;