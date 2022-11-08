import React from "react";

const ProfileCard = ({userData}:any) => {
    return (
        <div className='profile-container d-flex justify-content-center align-items-center w-100 '>
            <div className='profile-wrapper container-fluid w-50 h-50 card rounded-3 container-lg'>
                <h2 className='text-center text-light mt-3 border-bottom'>{userData.username}'s Profile Details</h2>
                <div
                    className='profile-details mt-4 mx-4 w-75 d-flex flex-wrap justify-content-center align-items-center'>
                    <div className='w-50 h-100 text-light text-start'>
                        <h6 className='mx-2 my-3 text-start'>QUIZ CREATED : {userData?.totalQuizes}</h6>
                        <h6 className='mx-2 my-3 text-start'>NAME : {userData.username}</h6>
                        <h6 className='mx-2 my-3 text-start'>USERNAME : {userData.username}</h6>
                        <h6 className='mx-2 my-3 text-start'>EMAIL : {userData.email}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;