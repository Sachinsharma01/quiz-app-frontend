import React, {useState} from "react";
import Avatar from "../Avatar";
import Dropdown from "../dropdown";

const Header = () => {
    const [dropdownToggle, setDropdownToggle] = useState(false);
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid my-3 mx-5">
                    <h2 className="text-light ">QUIZZEZ</h2>
                    <div className="d-flex justify-content-center align-items-center mx-2">
                        <Avatar onClick={() => setDropdownToggle(!dropdownToggle)} />
                         {/*<IoIosArrowDown />*/}
                    </div>
                </div>
            </nav>
            {dropdownToggle &&
                <div className='float-end text-light mx-3 header_side-dropdown'>
                    <Dropdown className="mt-4"/>
                </div>
            }
        </>
    );
};

export default Header;
