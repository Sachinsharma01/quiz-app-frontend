import React from "react";
import avatar from "../../../assets/user.png";

const Avatar = ({onClick, className}:any) => {
  return (
    <div className={`rounded-circle mx-2 position-absolute ${className}`} onClick={onClick}>
      <img src={avatar} alt="profile" />
    </div>
  );
};

export default Avatar;
