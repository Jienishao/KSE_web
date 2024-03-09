import React from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/MainPage.css"
import SlideImages from "../assets/SlideImages";
import Slider from "../components/Slider";

const MainPage = () => {
    return (
        <div className="mainpage">
            <div className="toolbar">
                <ToolBar />
            </div>
            <div className="navbar">
                <NavBar />
            </div>
            <div className="content">
                <Slider>
                    {SlideImages.map((slide, index) => (
                        <div key={index} className="slide">
                            <img src={slide.imgURL} alt={slide.imgAlt} />
                            <div className="caption">{slide.caption}</div>
                            <button>{slide.buttonText}</button>
                        </div>
                    ))}
                </Slider>
                <div className="title_1">
                    <h2>Additional Content</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src="your-image-url-1" alt="Image 1" />
                        <div>Additional Content 1</div>
                    </div>
                    <div className="card">
                        <img src="your-image-url-1" alt="Image 1" />
                        <div>Additional Content 2</div>
                    </div>
                    <div className="card">
                        <img src="your-image-url-1" alt="Image 1" />
                        <div>Additional Content 3</div>
                    </div>
                </div>

            </div>

            {/*<div className="sitemap">
                <SiteMap />
            </div>*/}
        </div>
    )
}

export default MainPage;