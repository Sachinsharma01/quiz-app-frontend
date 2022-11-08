import React, {useState} from "react";
import Avatar from "../Avatar";
import Dropdown from "../dropdown";
import {useSelector} from "react-redux";

const Header = () => {
    const [dropdownToggle, setDropdownToggle] = useState(false);
    const state = useSelector((state:any) => state.tokenReducer);
    const isLoggedIn : boolean = state.isLoggedIn;
    console.log(isLoggedIn)
    return (
        <>
            <nav className="navbar container-fluid navbar-expand-lg w-100">
                <div className="container-fluid my-3 mx-5">
                    <h2 className="text-light ">QUIZZEZ</h2>
                    <div className="d-flex justify-content-center align-items-center mx-2">
                        {isLoggedIn &&
                            <Avatar onClick={() => setDropdownToggle(!dropdownToggle)}/>
                        }
                         {/*<IoIosArrowDown />*/}
                    </div>
                </div>
            </nav>
            {dropdownToggle && isLoggedIn &&
                <div className='text-light mx-3 header_side-dropdown position-absolute'>
                    <Dropdown className="mt-4"/>
                </div>
            }
        </>
    );
};

export default Header;
