import React, { useEffect } from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/Function3.css"
import SlideImages from "../assets/SlideImages";
import Slider from "../components/Slider";

const Function3 = () => {
    useEffect(() => {
        const jumpButtons = document.querySelectorAll('.jumpButton');
        jumpButtons.forEach(button => {
            button.addEventListener('click', handleJumpButtonClick);
        });

        scrollFunction();
        window.onscroll = () => {
            scrollFunction();
        };

        // Cleanup event listeners on component unmount
        return () => {
            jumpButtons.forEach(button => {
                button.removeEventListener('click', handleJumpButtonClick);
            });
            window.onscroll = null;
        };
    }, []);

    const handleJumpButtonClick = (event) => {
        const targetId = event.target.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

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
        <div className="Function3" id="title1">
            <div className="toolbar">
                <ToolBar />
            </div>
            <div className="navbar">
                <NavBar />
            </div>

            <div className="front_base"></div>
            <div className="base_t" />
            <div className="main_title">PRODUCT RANGE</div>
            <div className="detail1">Any details that need to be set on this page ...</div>
            <div className="test" id="title1"> test box 1</div>
            <div className="guide_box">
                <button className="jumpButton" data-target="title1">Jump to Title 1</button>
                <button className="jumpButton" data-target="title2">Jump to Title 2</button>
                <button className="jumpButton" data-target="title3">Jump to Title 3</button>
            </div>
            <div className="test" id="title2"> test box 2</div>
            <div className="content">

                <div className="two_sides">
                <div className="test" id="title3"> test box 3</div>
                    <div className="left_side">
                        <div className="title_1" >
                            <h2>Additional Content id 1</h2>
                        </div>
                        <button>button</button>
                    </div>
                    <div className="right_side">
                        <img src="path/to/your/image.jpg" alt="Image" />
                    </div>
                </div>

                <div className="two_sides">
                    <div className="left_side">
                        <img src="path/to/your/image.jpg" alt="Image" />
                    </div>
                    <div className="right_side">
                        <div className="title_1" >
                            <h2>Additional Content</h2>
                        </div>
                        <button>button</button>
                    </div>
                </div>

                <div className="two_sides">
                    <div className="left_side">
                        <div className="title_1">
                            <h2>Additional Content</h2>
                        </div>
                        <button>button</button>
                    </div>
                    <div className="right_side">
                        <img src="path/to/your/image.jpg" alt="Image" />
                    </div>
                </div>

                <div className="title_2">
                    <h2>Additional Content id2</h2>
                </div>
                <div className="cards">
                    <div className="card">
                        <img src="your-image-url-1" alt="Image 1" />
                        <div>aaaaa</div>
                    </div>
                    <div className="card">
                        <img src="your-image-url-1" alt="Image 1" />
                        <div>bbbbb</div>
                    </div>
                    <div className="card">
                        <img src="your-image-url-1" alt="Image 1" />
                        <div>ccccc</div>
                    </div>
                </div>

                <div id="scroll_top" onClick={scrollToTop}>
                    <span id="arrow-up">&#9650;</span>
                    <span>Top</span>
                </div>
            </div>

            {/*<div className="sitemap">
                <SiteMap />
            </div>*/}
        </div >
    )
}

export default Function3;