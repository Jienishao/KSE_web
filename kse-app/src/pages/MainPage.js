import React from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/Header.css"

const MainPage = () => {
    return (
        <div className="layout">
            <div className="toolbar">
                <ToolBar />
            </div>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <p>Main</p>
            </div>
            <div className="sitemap">
                <SiteMap />
            </div>
        </div>
    )
}

export default MainPage;