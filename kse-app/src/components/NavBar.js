import React from "react";
import { PiWindowsLogoBold } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import "../css/NavBar.css"

const NavBar = () => {
    return (
        <>
            <div className="brand_logo">
                <a className="logo2"> <PiWindowsLogoBold className="react_icon" /></a>
            </div>
            <div className="function1">
                Function 1
                <div className="fun_pop1">
                    <div className="button-container">
                        <div className="title"> Function 1 Title</div>
                        <div className="column">
                            <button>Button 1</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="function2">
                Function 2
                <div className="fun_pop2">
                    <div className="button-container">
                        <div className="title"> Function 2 Title</div>
                        <div className="column">
                            <button>Button 1</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="function3">
                Function 3
                <div className="fun_pop3">
                    <div className="button-container">
                        <div className="title"> Function 3 Title</div>
                        <div className="column">
                            <button>Button 1</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="function4">
                Function 4
                <div className="fun_pop4">
                    <div className="button-container">
                        <div className="title"> Function 4 Title</div>
                        <div className="column">
                            <button>Button 1</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>

            <div></div>

            <div className="search">
                <div className="search_bar">
                    <MdSearch className="s_icon"/>
                </div>
            </div>
        </>
    )
}

export default NavBar;