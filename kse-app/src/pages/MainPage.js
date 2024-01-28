import React from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/MainPage.css"
import SlideImages from "../assets/SlideImages";
import Slider from "../components/Slider";

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
                <Slider>
                    {SlideImages.map((SlideImages, index) => {
                        return <img key={index} src={SlideImages.imgURL} alt={SlideImages.imgAlt} />;
                    })}
                </Slider>
            </div>
            <div className="sitemap">
                <SiteMap />
            </div>
        </div>
    )
}

export default MainPage;