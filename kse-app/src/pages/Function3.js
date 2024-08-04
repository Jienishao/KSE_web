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
            { id: 'dynamicImage0', src: require('../image/overview_str.png') },
            { id: 'dynamicImage1', src: require('../image/kvc200.png') },
            { id: 'dynamicImage2', src: require('../image/kvc300.png') },
            { id: 'dynamicImage3', src: require('../image/kvc400.png') },
            { id: 'dynamicImage4', src: require('../image/kvc500.png') },
            { id: 'dynamicImage5', src: require('../image/kvc600.png') },
            { id: 'dynamicImage6', src: require('../image/kvc700.png') },
            { id: 'dynamicImage7', src: require('../image/kvc800.png') },
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

            <div className="front_base">
            <img id="dynamicImage0" src="" alt="Image" style={{ maxWidth: '100%', height: 'auto' }}/>
            </div>
            <div className="main_title">CERAMIC BALL VALVES - KVC series</div>
            <div className="detail1">KVC series ceramic-lined ball valve, for high corrosion resistance, high wear, high temperature and medium pressure applications, fits in granule medium of high hardness or Medium with erosive soft granule. It is also the only valve suitable for this type of medium.
Meanwhile, this valve also work in abrasive slurries, or in case of highly corrosive applications.</div>

            <div className="guide_box">
                <button className="jumpButton" data-target="title2">KVC200</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title3">KVC300</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title4">KVC400</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title5">KVC500</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title6">KVC600</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title7">KVC700</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title8">KVC800</button>
            </div>

            <div id="title2" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>KVC200</h2>
                            <p>KVC200 ceramic ball valve is the standard type of ceramic ball valve series,
                                applicable high corrosion and strong temperature of 180℃ and maximum pressure difference of 2.0MPa Wear condition.
                            </p>
                            <ul>
                                <li>Wide sealing face, scraping-type valve seat, reliable and high sealing life</li>
                                <li>Valve seat surface paired with spherical grinding to ensure sealing</li>
                                <li>Stuffing box designed with a “live load” that maintains constant load
                                    even under significant wear, ensuring prolonged packing life</li>
                                <li>Symmetrical valve design enables bidirectional sealing without flow
                                    direction restrictions, doubling the service life</li>
                                <li>Large ceramic flange sealing face prevents corrosion of metal flanges</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Nominal size range</td>
                                <td>Flange connections DN 15 (½˝) up to DN 250 (10˝)</td>
                            </tr>
                            <tr>
                                <td>Pressure range</td>
                                <td>PN 10 to PN 40
                                    ANSI class 150 and class 300</td>
                            </tr>
                            <tr>
                                <td>Temperature Range</td>
                                <td>-40 °C to +180 °C / -40 °F to to +356 °F</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage1" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                    </div>
                </div>
            </div>

            <div id="title3" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>KVC300</h2>
                            <p>The KVC300 is suitable for high-temperature and thermally challenging environments,
                                as well as corrosive media with granular particles. Ceramic ball valves offer several advantages,
                                including corrosion resistance, wear resistance, and resistance to cavitation.
                            </p>
                            <ul>
                                <li>The valve is designed without sealing rings, making it suitable for harsh
                                    conditions such as high temperatures, organic solvents, and strong corrosion.</li>
                                <li>It features a fully hard-sealed surface without non-metallic materials like
                                    graphite or PTFE.</li>
                                <li>The packing chamber is equipped with a “live load” system that maintains
                                    constant load even under significant wear, ensuring long-lasting packing life.</li>
                                <li>The upper and lower sliding bearings in the packing chamber prevent material
                                    displacement due to pressure differentials, thereby enhancing the lifespan
                                    of the packing material.</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Nominal size range</td>
                                <td>Flange connections DN 25 (1˝) up to DN 250 (10˝)</td>
                            </tr>
                            <tr>
                                <td>Pressure range</td>
                                <td>PN 10 to PN 40
                                    ANSI class 150 and class 300</td>
                            </tr>
                            <tr>
                                <td>Temperature Range</td>
                                <td>-40 °C to +456 °C / -40 °F to to +852 °F</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage2" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                    </div>
                </div>
            </div>

            <div id="title4" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>KVC400</h2>
                            <p>PTFE is an extremely corrosion-resistant material. Over time, PTFE can age and experience seal failure.
                                To address valve-related issues, consider replacing the PTFE ball core with a structural ceramic.
                                This modification significantly improves the valve's sealing performance and lifespan,
                                especially in low-temperature, low-pressure environments with particle-free media.
                            </p>
                            <ul>
                                <li>The sealing arrangement between the two valve bodies employs a combination
                                    of flat and raised-and-grooved sealing surfaces.</li>
                                <li>This dual-sealing approach ensures effective sealing performance and minimizes
                                    the risk of leakage.The flat sealing surface provides reliable sealing, while the
                                    MFM surface allows for automatic compensation using metal gaskets.</li>
                                <li>The valve is manufactured using compression molding techniques. Inside the valve
                                    body, there are multiple dovetail grooves, a multi-sided stem structure, and a ball
                                    with perforations.</li>
                                <li>The design incorporates a central partition structure to prevent material buildup.</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Nominal size range</td>
                                <td>Flange connections DN 15 (½˝) up to DN 250 (10˝)</td>
                            </tr>
                            <tr>
                                <td>Pressure range</td>
                                <td>PN 10 to PN 16
                                    ANSI class 150 </td>
                            </tr>
                            <tr>
                                <td>Temperature Range</td>
                                <td>-40 °C to +150 °C / -40 °F to to +302 °F</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage3" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                    </div>
                </div>
            </div>

            <div id="title5" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>KVC500</h2>
                            <p>KVC500 ceramic ball valve developed specifically for operating conditions where temperatures are high,
                                pressures are substantial, and the medium contains solid particles with fast flow rates.
                                It is suitable for severe wear and corrosion conditions involving high temperatures, high pressures, and large pressure differentials.
                            </p>
                            <ul>
                                <li>Developed for high-temperature, high-pressure, and high-pressure differential
                                    conditions. The ball's strength is doubled, and it can accommodate up to 20%
                                    additional travel based on sealing requirements.</li>
                                <li>Scraping-Type Valve Seat: Features a large sealing surface for reliable, high-life sealing.</li>
                                <li>Fully Hard Sealing Surface: Excludes non-metallic materials like graphite or PTFE.</li>
                                <li>Tongue-and-Groove Sealing Structure: Incorporates a wide, spiral-wound gasket to ensure zero leakage under pipe stress or cyclic thermal stress.</li>
                                <li>Stuffing Box with “Live Load”: Maintains constant load even under significant wear, ensuring prolonged packing life.</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Nominal size range</td>
                                <td>Flange connections DN 25 1˝ up to DN 300 (12˝)</td>
                            </tr>
                            <tr>
                                <td>Pressure range</td>
                                <td>PN 40 to PN150
                                    ANSI class 300LB to 900LB</td>
                            </tr>
                            <tr>
                                <td>Temperature Range</td>
                                <td>-40 °C to +456 °C / -40 °F to to +852 °F</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage4" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                    </div>
                </div>
            </div>

            <div id="title6" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>KVC600</h2>
                            <p>The KVC600 series ceramic C valve addresses these pain points. The valve features a non-eccentric design,
                                ensuring minimal erosion of the valve stem during partial opening and maximizing protection.
                                Additionally, the inherent self-lubricating properties of ceramics prevent adhesion between the ball core and the valve seat.
                            </p>
                            <ul>
                                <li>C-Type Special Structure Design: unique C-type design, where the ball crown is made of
                                    integral ceramic material. it protects the C-type support ear from erosion by the medium.</li>
                                <li>Concentric Design: during the whole operation the ceramic ball crown remains in close contact with the valve seat. This allows for effective scraping of adhered material on the sealing surface, ensuring better sealing performance.</li>
                                <li>The absence of a valve cavity prevents material accumulation inside the valve.</li>
                                <li>All flow passages in contact with the medium are lined with ceramic material, preventing corrosion of the metal shell and ensuring excellent corrosion resistance.</li>
                                <li>Anti-Blowout Valve Stem Design: The valve incorporates a design that prevents the valve stem from being expelled, ensuring safety and reliability.</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Nominal size range</td>
                                <td>Flange connections DN 50 2˝ up to DN 400 (16˝)</td>
                            </tr>
                            <tr>
                                <td>Pressure range</td>
                                <td>PN 10 to PN150
                                    ANSI class 150LB to 900LB</td>
                            </tr>
                            <tr>
                                <td>Temperature Range</td>
                                <td>-40 °C to +456 °C / -40 °F to to +852 °F</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage5" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                    </div>
                </div>
            </div>

            <div id="title7" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>KVC700</h2>
                            <p>The KVC700 valve intentionally separates the valve flow channel from the pipeline channel to reduce the impact of the medium
                                on the sealing components. By using a slider with a corresponding shape to the valve flow channel,
                                the valve achieves flat sealing along the edge of the flow channel. It designed for use as on-off or control condition,
                                particularly suitable for applications with high levels of impurities and severe erosion. Each valve is selected based on the optimal
                                structural design and material combination. according to specific operating conditions.
                            </p>
                            <ul>
                                <li>The flow channel edge create a flat seal, allowing for throttling, opening, and closing of the fluid. it minimizes flow resistance and erosion to the maximum extent.</li>
                                <li>The valve core is embedded in a metal mounting plate using ceramics. Each valve seat is precisely matched and ground with the valve core to ensure excellent sealing performance.</li>
                                <li>The metal mounting plate for the valve core features a T-shaped groove that connects with the T-shaped notch on the valve stem. This design ensures that the valve core remains in a floating state, enhancing the valve's sealing performance.</li>
                                <li>Both the valve core and the valve seat are made of structural ceramics. The ceramic lining in the flange area provides excellent wear resistance, corrosion resistance, and resistance to erosion.</li>
                                <li>The packing box is designed with a live-load that maintains a constant load even under significant wear, ensuring long-lasting packing life.</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Nominal size range</td>
                                <td>Flange connections DN 50 2˝ up to DN 400 (16˝)</td>
                            </tr>
                            <tr>
                                <td>Pressure range</td>
                                <td>PN 10 to PN 150
                                    ANSI class 150LB to 900LB</td>
                            </tr>
                            <tr>
                                <td>Temperature Range</td>
                                <td>-40 °C to +456 °C / -40 °F to to +852 °F</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage6" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
                    </div>
                </div>
            </div>

            <div id="title8" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>KVC800</h2>
                            <p>The valve has a simple and compact structure, low operating torque, and is less prone to blockages.
                                Additionally, it features a self-cleaning function. Unlike traditional direct-acting plunger-type angle valves,
                                the ceramic valve core and seat do not experience high-frequency vibrations, effectively avoiding noise issues.
                                Furthermore, there is no risk of scratching or jamming between the valve core and the sealing seat.
                            </p>
                            <ul>
                                <li>The main sealing pair and the fixed circular disc valve seat of the ceramic angle valve are made from high-performance structural ceramic materials. it significantly extending the valve's lifespan.</li>
                                <li>The valve has a simple and compact structure, low operating torque, and is less prone to blockages.</li>
                                <li>The ceramic valve plug and seat do not experience high-frequency vibrations, effectively avoiding noise issues.</li>
                                <li>The packing box is designed with a “live load” that maintains a constant load even under significant wear, ensuring long-lasting packing life.</li>
                            </ul>
                        </div>
                        <table className="table">
                            <tr>
                                <td>Nominal size range</td>
                                <td>Flange connections DN 25 1˝ up to DN 400 (16˝)</td>
                            </tr>
                            <tr>
                                <td>Pressure range</td>
                                <td>PN 10 to PN150
                                    ANSI class 150LB to 900LB</td>
                            </tr>
                            <tr>
                                <td>Temperature Range</td>
                                <td>-40 °C to +456 °C / -40 °F to to +852 °F</td>
                            </tr>
                        </table>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage7" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/>
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