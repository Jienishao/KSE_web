import React, { useEffect } from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/MainPage.css"
import SlideImages from "../assets/SlideImages";
import Slider from "../components/Slider";

const MainPage = () => {

    useEffect(() => {
        scrollFunction();
        window.onscroll = () => {
            scrollFunction();
        };
    }, []);

    const scrollFunction = () => {
        const scrollToTopButton = document.getElementById("scroll_top");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    const scrollToTop = () => {
        const scrollTop = Math.max(
            document.body.scrollTop,
            document.documentElement.scrollTop
        );

        if (scrollTop > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, scrollTop - scrollTop / 10);
        } else {
            window.cancelAnimationFrame(scrollToTop);
        }
    }
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

                <div class="two_sides">
                    <div class="left_side">
                        <div class="title_1">
                            <h2>Additional Content</h2>
                        </div>
                        <button>button</button>
                    </div>
                    <div class="right_side">
                        <img src="path/to/your/image.jpg" alt="Image" />
                    </div>
                </div>

                <div class="two_sides">
                    <div class="left_side">
                        <img src="path/to/your/image.jpg" alt="Image" />
                    </div>
                    <div class="right_side">
                        <div class="title_1">
                            <h2>Additional Content</h2>
                        </div>
                        <button>button</button>
                    </div>
                </div>

                <div class="two_sides">
                    <div class="left_side">
                        <div class="title_1">
                            <h2>Additional Content</h2>
                        </div>
                        <button>button</button>
                    </div>
                    <div class="right_side">
                        <img src="path/to/your/image.jpg" alt="Image" />
                    </div>
                </div>

                <div className="title_2">
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

                <div className="title_2">
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

                <div className="title_2">
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

                <div className="title_2">
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

                <div className="title_3">
                    <h2>Additional Content</h2>
                </div>
                <div className="cards">
                    <div className="loc">
                        <img src="your-image-url-1" alt="Image 1" />
                        <div>
                            <p>Additional Content 1</p>
                            <button>Button 1</button>
                        </div>
                    </div>
                    <div className="loc">
                        <img src="your-image-url-2" alt="Image 2" />
                        <div>
                            <p>Additional Content 2</p>
                            <button>Button 2</button>
                        </div>
                    </div>
                    <div className="loc">
                        <img src="your-image-url-3" alt="Image 3" />
                        <div>
                            <p>Additional Content 3</p>
                            <button>Button 3</button>
                        </div>
                    </div>
                </div>

                <div id="scroll_top" onClick={scrollToTop}>
                    <span id="arrow-up">&#9650;</span>
                    <span>Top</span>
                </div>

            </div>

            <div className="sitemap">
                <SiteMap />
            </div>

        </div>
    )
}

export default MainPage;