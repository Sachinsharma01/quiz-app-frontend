import React from "react";
import {Link} from "react-router-dom";
import Logout from "../Button/Logout";

const Dropdown = (props: any) => {
    return (
        <div className='text-light header_side-dropdown mx-3 h-100'>
            <ul className="text-start d-flex justify-content-center align-items-center flex-column mx-2">
                <li className='dropdown-item text-center border-bottom header_profile my-3 p-2'>
                    <Link className="text-uppercase text-light text-decoration-none text" to="/user/profile" target="_blank">
                        Profile
                    </Link>
                </li>
                <li className="dropdown-item d-flex justify-content-center align-items-center my-3">
                    <Logout/>
                </li>
            </ul>
        </div>
    );
};

export default Dropdown;
