import React from "react";
import avatar from "../../../assets/user.png";
import { Link } from "react-router-dom";

const Avatar = ({onClick}:any) => {
  return (
    <div className="rounded-circle mx-2 position-absolute " onClick={onClick}>
      <img src={avatar} alt="profile" />
    </div>
  );
};

export default Avatar;
