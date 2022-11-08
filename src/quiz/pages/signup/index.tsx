import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import SignupButton from "../../components/Button/Signup";
import ProcessRest from "../../../config/axios";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const history = useHistory()

    const signupHandler = async (event:any) => {
        event.preventDefault();
        setUsername('');
        setPassword('');
        setEmail('');
        const obj: any = {
            username: username,
            email: email,
            password: password
        }
        const body: any = {
            url: 'http://localhost:3000/quiz/api/customer/create-user',
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            data: {...obj}
        }
        const response = await ProcessRest(body);
        console.log(response)
        history.replace('/login');
    }

    return (
        <>
            <div className="signup-container row row-centered w-100 d-flex justify-content-center align-items-center">
                <div className="signup-wrapper container-fluid w-25 card rounded-3 container-lg">
                    <h2 className="text-center text-light mt-2">SIGN UP</h2>
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
                        <SignupButton onClick={signupHandler} className="float-end"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;