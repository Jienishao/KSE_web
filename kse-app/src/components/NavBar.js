import React, { useState, useEffect, useRef } from "react";
import { PiWindowsLogoBold } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import "../css/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {

    const [expanded, setExpanded] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const popupRef = useRef(null);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const expendSearch = (event) => {
        event.stopPropagation();
        setExpanded(true);
        setButtonClicked(true);
    };
    
    const closeSearch = () => {
        setExpanded(false);
        setButtonClicked(false);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            closeSearch();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="brand_logo">
            <Link to="/main" className="logo_link">
                <a className="logo2"> <PiWindowsLogoBold className="react_icon" /></a>
            </Link>
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

            <div className="search" ref={popupRef}>
                <div className={`search_bar ${expanded ? 'expanded' : ''}`} onClick={toggleExpand}>
                    <MdSearch className="s_icon" />
                    <input type="text"
                        id="searchInput"
                        className="search-input"
                        placeholder="Search" />
                </div>
            </div>
        </>
    )
}

export default NavBar;