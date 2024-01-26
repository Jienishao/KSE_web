import React from "react";
import { PiWindowsLogoBold } from "react-icons/pi";

const NavBar = () => {
    return (
        <>
            <div>

            </div>
            <div className="brand_logo">
                <a className="logo2"> <PiWindowsLogoBold className="react_icon" /></a>
            </div>
            <div className="function1">
                Function 1
                <div className="fun_pop1">
                    {/* Add your popup content here */}
                    This is a popup!
                </div>
            </div>
            <div className="function2">
                Function 2
                <div className="fun_pop2">
                    {/* Add your popup content here */}
                    This is a popup2!
                </div>
            </div>
            <div className="function3">
                Function 3
                <div className="fun_pop3">
                    {/* Add your popup content here */}
                    This is a popup3!
                </div>
            </div>
        </>
    )
}

export default NavBar;