import React, { useState, useEffect, useRef } from "react";
import { PiWindowsLogoBold } from "react-icons/pi";
import { MdSearch } from "react-icons/md";
import "../css/NavBar.css"
import { Link, useNavigate } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

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

    const navigate = useNavigate();

    const handleClickFun3 = () => {
        navigate('/fun3');
    };

    return (
        <>
            <div className="brand_logo">
                <Link to="/" className="logo_link">
                    <a className="logo2"> <PiWindowsLogoBold className="react_icon" /></a>
                </Link>
            </div>
            <div className="function1">
                Services
                <div className="fun_pop1">
                    <div className="button-container">
                        <div  className="title">
                        <div> Services</div>
                        <FaLongArrowAltRight className="arrow"/>
                        </div>

                        <div className="column">
                            <div className="subtitle">Group 1</div>
                            <Link to="/function1">
                                <button>Electrical Actuators</button>
                            </Link>
                            <button onClick={handleClickFun3}>Ceramic valves</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                            <div className="subtitle">Group 2</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                        <div className="column">
                            <div className="subtitle">Group 3</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="function2">
                Industries
                <div className="fun_pop2">
                    <div className="button-container">
                    <div  className="title">
                        <div> Industries</div>
                        <FaLongArrowAltRight className="arrow"/>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 1</div>
                            <button>Button 1</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 2</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 3</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="function3">
                Solutions
                <div className="fun_pop3">
                    <div className="button-container">
                    <div  className="title">
                        <div> Solutions</div>
                        <FaLongArrowAltRight className="arrow"/>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 1</div>
                            <button onClick={handleClickFun3}>Ceramic valves</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 2</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 3</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="function4">
                Resources
                <div className="fun_pop4">
                    <div className="button-container">
                    <div  className="title">
                        <div> Resources</div>
                        <FaLongArrowAltRight className="arrow"/>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 1</div>
                            <button>Button 1</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 2</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 3</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="function5">
                Company
                <div className="fun_pop5">
                    <div className="button-container">
                    <div  className="title">
                        <div> Company</div>
                        <FaLongArrowAltRight className="arrow"/>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 1</div>
                            <button>Button 1</button>
                            <button>Button 2</button>
                            <button>Button 3</button>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 2</div>
                            <button>Button 4</button>
                            <button>Button 5</button>
                            <button>Button 6</button>
                        </div>
                        <div className="column">
                        <div className="subtitle">Group 3</div>
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