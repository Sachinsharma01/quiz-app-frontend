import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import ProcessRest from '../../../config/axios'
import ProfileCard from "../../components/profile";

const Profile = () => {
    const [user, setUser] = useState({});
    const {token} = useSelector((state: any) => state.tokenReducer);

    useEffect(() => {
        (async function getMetaData() {
            const response = await ProcessRest({
                url: 'http://localhost:3000/quiz/api/customer/getMetaData',
                method: 'POST',
                headers: {
                    authorization: token
                },
                data: {
                    token: token
                }
            });
            console.log(response)
            const data = await response.data.data;
            setUser(data);
            console.log(user)
        }())
    }, [])
    return (
        <>
            <ProfileCard userData={user}/>
        </>
    )
}

export default Profile