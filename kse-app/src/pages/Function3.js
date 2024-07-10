import React, { useEffect } from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/MainPage.css"
import "../css/Function3.css"

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

        return () => {
            jumpButtons.forEach(button => {
                button.removeEventListener('click', handleJumpButtonClick);
            });
            window.onscroll = null;
        };
    }, []);

    useEffect(() => {
        const imageMappings = [
            { id: 'dynamicImage1', src: require('../image/test1.jpg') },
            { id: 'dynamicImage2', src: require('../image/test2.png') },
            { id: 'dynamicImage3', src: require('../image/test3.jpg') },
            { id: 'dynamicImage4', src: require('../image/test4.jpg') },
            { id: 'dynamicImage5', src: require('../image/test5.jpg') },
        ];

        imageMappings.forEach(mapping => {
            const imgElement = document.getElementById(mapping.id);
            if (imgElement) {
                imgElement.src = mapping.src;
            }
        });
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
        <div className="mainpage" id="title1">
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

            <div className="guide_box">
                <button className="jumpButton" data-target="title2">Jump to Title 1</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title3">Jump to Title 2</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title4">Jump to Title 3</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title5">Jump to Title 4</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title6">Jump to Title 5</button>
            </div>

            <div id="title2" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>Example 1</h2>
                            <p>Ball valves are suitable to shut-off air and gas belonging to the first, second and third gas family.
                                The ball valves can be supplied with thread or flange connections.
                                They are CE certified according to EN331 for the thread
                                version and according to EN13774 for the flanged version.
                            </p>
                            <ul>
                                <li>manual operated (on request with lockable lever)</li>
                                <li>with electric actuator</li>
                                <li>with pneumatic actuator</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Housing of thread valve</td>
                                <td>Nickel plated brass</td>
                            </tr>
                            <tr>
                                <td>Housing of flanged valve</td>
                                <td>Cast-iron GJS 400-15</td>
                            </tr>
                            <tr>
                                <td>O-ring</td>
                                <td>NBR</td>
                            </tr>
                            <tr>
                                <td>Seat</td>
                                <td>PTFE</td>
                            </tr>
                            <tr>
                                <td>Max. Operating pressure</td>
                                <td>5 bar (thread version)
                                    <br />16 bar (flanged version)</td>
                            </tr>
                            <tr>
                                <td>Operating temperatur</td>
                                <td>-20 °C up to +60 °C</td>
                            </tr>
                            <tr>
                                <td>Connection</td>
                                <td>1/4″ up to 4″ thread connection (brass)
                                    DN15 up to DN200 flange connection (cast iron)</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage1" src="" alt="Image" />
                    </div>
                </div>
            </div>

            <div id="title3" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>Example 2</h2>
                            <p>Ball valves are suitable to shut-off air and gas belonging to the first, second and third gas family.
                                The ball valves can be supplied with thread or flange connections.
                                They are CE certified according to EN331 for the thread
                                version and according to EN13774 for the flanged version.
                            </p>
                            <ul>
                                <li>manual operated (on request with lockable lever)</li>
                                <li>with electric actuator</li>
                                <li>with pneumatic actuator</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Housing of thread valve</td>
                                <td>Nickel plated brass</td>
                            </tr>
                            <tr>
                                <td>Housing of flanged valve</td>
                                <td>Cast-iron GJS 400-15</td>
                            </tr>
                            <tr>
                                <td>O-ring</td>
                                <td>NBR</td>
                            </tr>
                            <tr>
                                <td>Seat</td>
                                <td>PTFE</td>
                            </tr>
                            <tr>
                                <td>Max. Operating pressure</td>
                                <td>5 bar (thread version)
                                    <br />16 bar (flanged version)</td>
                            </tr>
                            <tr>
                                <td>Operating temperatur</td>
                                <td>-20 °C up to +60 °C</td>
                            </tr>
                            <tr>
                                <td>Connection</td>
                                <td>1/4″ up to 4″ thread connection (brass)
                                    DN15 up to DN200 flange connection (cast iron)</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage2" src="" alt="Image" />
                    </div>
                </div>
            </div>

            <div id="title4" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>Example 3</h2>
                            <p>Ball valves are suitable to shut-off air and gas belonging to the first, second and third gas family.
                                The ball valves can be supplied with thread or flange connections.
                                They are CE certified according to EN331 for the thread
                                version and according to EN13774 for the flanged version.
                            </p>
                            <ul>
                                <li>manual operated (on request with lockable lever)</li>
                                <li>with electric actuator</li>
                                <li>with pneumatic actuator</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Housing of thread valve</td>
                                <td>Nickel plated brass</td>
                            </tr>
                            <tr>
                                <td>Housing of flanged valve</td>
                                <td>Cast-iron GJS 400-15</td>
                            </tr>
                            <tr>
                                <td>O-ring</td>
                                <td>NBR</td>
                            </tr>
                            <tr>
                                <td>Seat</td>
                                <td>PTFE</td>
                            </tr>
                            <tr>
                                <td>Max. Operating pressure</td>
                                <td>5 bar (thread version)
                                    <br />16 bar (flanged version)</td>
                            </tr>
                            <tr>
                                <td>Operating temperatur</td>
                                <td>-20 °C up to +60 °C</td>
                            </tr>
                            <tr>
                                <td>Connection</td>
                                <td>1/4″ up to 4″ thread connection (brass)
                                    DN15 up to DN200 flange connection (cast iron)</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage3" src="" alt="Image" />
                    </div>
                </div>
            </div>

            <div id="title5" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>Example 4</h2>
                            <p>Ball valves are suitable to shut-off air and gas belonging to the first, second and third gas family.
                                The ball valves can be supplied with thread or flange connections.
                                They are CE certified according to EN331 for the thread
                                version and according to EN13774 for the flanged version.
                            </p>
                            <ul>
                                <li>manual operated (on request with lockable lever)</li>
                                <li>with electric actuator</li>
                                <li>with pneumatic actuator</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Housing of thread valve</td>
                                <td>Nickel plated brass</td>
                            </tr>
                            <tr>
                                <td>Housing of flanged valve</td>
                                <td>Cast-iron GJS 400-15</td>
                            </tr>
                            <tr>
                                <td>O-ring</td>
                                <td>NBR</td>
                            </tr>
                            <tr>
                                <td>Seat</td>
                                <td>PTFE</td>
                            </tr>
                            <tr>
                                <td>Max. Operating pressure</td>
                                <td>5 bar (thread version)
                                    <br />16 bar (flanged version)</td>
                            </tr>
                            <tr>
                                <td>Operating temperatur</td>
                                <td>-20 °C up to +60 °C</td>
                            </tr>
                            <tr>
                                <td>Connection</td>
                                <td>1/4″ up to 4″ thread connection (brass)
                                    DN15 up to DN200 flange connection (cast iron)</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage4" src="" alt="Image" />
                    </div>
                </div>
            </div>

            <div id="title6" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>Example 5</h2>
                            <p>Ball valves are suitable to shut-off air and gas belonging to the first, second and third gas family.
                                The ball valves can be supplied with thread or flange connections.
                                They are CE certified according to EN331 for the thread
                                version and according to EN13774 for the flanged version.
                            </p>
                            <ul>
                                <li>manual operated (on request with lockable lever)</li>
                                <li>with electric actuator</li>
                                <li>with pneumatic actuator</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Housing of thread valve</td>
                                <td>Nickel plated brass</td>
                            </tr>
                            <tr>
                                <td>Housing of flanged valve</td>
                                <td>Cast-iron GJS 400-15</td>
                            </tr>
                            <tr>
                                <td>O-ring</td>
                                <td>NBR</td>
                            </tr>
                            <tr>
                                <td>Seat</td>
                                <td>PTFE</td>
                            </tr>
                            <tr>
                                <td>Max. Operating pressure</td>
                                <td>5 bar (thread version)
                                    <br />16 bar (flanged version)</td>
                            </tr>
                            <tr>
                                <td>Operating temperatur</td>
                                <td>-20 °C up to +60 °C</td>
                            </tr>
                            <tr>
                                <td>Connection</td>
                                <td>1/4″ up to 4″ thread connection (brass)
                                    DN15 up to DN200 flange connection (cast iron)</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage5" src="" alt="Image" />
                    </div>
                </div>
            </div>

            <div id="scroll_top" onClick={scrollToTop}>
                <span id="arrow-up">&#9650;</span>
                <span>Top</span>
            </div>

            <div className="sitemap">
                <SiteMap />
            </div>
        </div >
    )
}

export default Function3;