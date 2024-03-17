import React from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/MainPage.css"
import SlideImages from "../assets/SlideImages";
import Slider from "../components/Slider";

const Request = () => {
    return (
        <div className="Request">
            <div className="toolbar">
                <ToolBar />
            </div>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">

            </div>

            <div>
            Request
            </div>

            {/*<div className="sitemap">
                <SiteMap />
            </div>*/}
        </div >
    )
}

export default Request;