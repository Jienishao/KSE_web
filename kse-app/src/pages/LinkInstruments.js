import React, { useEffect } from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/MainPage.css"
import "../css/Function3.css"

const LinkInstruments = () => {
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
            { id: 'dynamicImage1', src: require('../image/ULLC.png') },
            { id: 'dynamicImage2', src: require('../image/G888.png') },
            { id: 'dynamicImage3', src: require('../image/TS400.png') },
            { id: 'dynamicImage4', src: require('../image/G400-MP2.png') },
            { id: 'dynamicImage5', src: require('../image/G460.png') },
            { id: 'dynamicImage6', src: require('../image/LS1B-Leak-Seeka.png') },
            { id: 'dynamicImage7', src: require('../image/RD99.png') },
            { id: 'dynamicImage8', src: require('../image/Thickness-Gauges.png') },
            { id: 'dynamicImage9', src: require('../image/UMVV01.png') },
            { id: 'dynamicImage10', src: require('../image/Multigauge5700.png') },
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
                <img id="dynamicImage0" src="" alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div className="main_title">None</div>
            <div className="detail1">None</div>

            <div className="guide_box">
                <button className="jumpButton" data-target="title2">ULLC</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title3">G888</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title4">TS400</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title5">G400-MP2</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title6">G460</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title7">LS1B Leak Seeka</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title8">RD99</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title9">Thickness Gauges</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title10">UMVV01</button>
                <button className="jumpButton2" />
                <button className="jumpButton" data-target="title11">Multigauge 5700</button>
            </div>

            <div id="title2" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>INTRINSICALLY SAFE ULLC - ULTRASONIC LIQUID LEVEL COMPARATOR</h2>
                            <p>2001 Standard Ultrasonic Level Comparator is one of the most advanced Liquid Levellers on the market.
                                Both extremely easy to use and micro-pic controlled for greater precision in measurement.
                                Hand test the level of the liquid gas contents of a fire extinguisher (CO2, FM200, HALON or similar liquid gas)
                                using Ultrasonic Technology in just few seconds.
                            </p>
                            <ul>
                                <li>Large backlit 16 Bar LCD signal display</li>
                                <li>Easy to locate and estimate the liquid gas level within =/- 2%</li>
                                <li>Each unit can be personalised with your Company name on request</li>
                                <li>Permanent ambient temperature display</li>
                                <li>Complete with Ultrasonic Hand Held Transducer</li>
                                <li>0-10 Ultrasonic setting controller</li>
                                <li>100ml tub of Ultrasonic gel supplied</li>
                                <li>Supplied in a hard carry case</li>
                                <li>A UL listed product complying with NFPA requirements</li>
                                <li>Warranty: 5 years Instrument Guarantee, 1 year for the transducer</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage1" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title3" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>MICROTECTOR III G888</h2>
                            <p>The G888 is the world's smallest and lightest 4-7 sensor personal gas monitor with optional Radio communication.
                                The G888 can detect toxic, flammable gases & vapours along with Oxygen depletion and enrichment.
                                Numerous sensor combinations and comprehensive accessories ensure the G888 can can be used in a wide range of industry
                                applications.
                            </p>
                            <ul>
                                <li>Record-breaking- world's smallest and lightest 4-7 sensor personal gas monitor with optional Radio</li>
                                <li>Easy operation- The main functions - peak display, EX LED lamp, alarm reset, display zoom and rotating display
                                    can all be controlled with a simple keystroke and the device has a convenient 3 button user menu.</li>
                                <li>Man-down alarm- The time interval for when the alarm should be triggered can be individually set and password
                                    protected so that in critical cases no time is lost while initiating rescue measures.</li>
                                <li>Wireless live measurement data-send real- time data by radio to a central GfG-Link or an operation centre.
                                    PC and tablet- Up to 20 devices can be displayed as a list or with a detailed view.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage2" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title4" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>TEST STATION TS400</h2>
                            <p>For Microtector II Series G450 and G460
                                Considering the increasing requirements for the daily use of gas detectors, GfG have developed test station TS400 on
                                the basis of the proven docking station DS400 for performing the daily bump test with gas. The test station
                                enables a cost-effective, flexible and location-independent use.
                            </p>
                            <ul>
                                <li>The on-site solution for daily Bump test</li>
                                <li>Maximum protection and high availability due to the daily tested gas detection devices</li>
                                <li>Documentation of the daily check</li>
                                <li>Optimisation of total cost of ownership of 44p per day</li>
                                <li>Mobile - simple and fast operation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage3" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title5" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>Smart Pump G400-MP2</h2>
                            <p>G400-MP2 is part of the device system belonging to the Microtector II series. Gas samples can be taken from distances of up
                                to 100 m with considerable low-pressure performance - the safe solution for measurements in confined spaces, tanks,
                                basements or channels. The pump has an own power supply as well as an own flow monitoring and communicates with the gas
                                detector. Due to the independent power supply of the pump, it does not affect the operational time of the gas detector.
                            </p>
                            <ul>
                                <li>Optimised alarm system</li>
                                <li>Visual alarm via G450 / G460 display and alarm LEDs</li>
                                <li>Audible alarm via G450 / G460 sounder</li>
                                <li>Vibration alarm via G450 / G460</li>
                                <li>Enormous flexibility (G450/G460 can be used in either pumped or diffusion mode)</li>
                                <li>Autonomous power supply (does not take power from instrument)</li>
                                <li>Sensor replacement without opening housing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage4" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title6" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>MICROTECTOR G460</h2>
                            <p>The multi-gas detector Microtector II G460 has been specifically developed for meeting the requirements of daily work.
                                It is the lightest and smallest gas detector in its class, easy to use and designed according to ergonomic principles.
                                The innovative multi-gas detector G460 passes the performance test and is certified according to EN 60079-29-1
                                (explosive gases), EN 50104 (oxygen) and EN 45544 (toxic gases)
                            </p>
                            <ul>
                                <li>Performance test approved multi-gas detector (290g)</li>
                                <li>Extremely loud alarm, 103 dB(A) for optimum personnel protection</li>
                                <li>Full featured, rugged design (IP67)</li>
                                <li>Innovative optical alarm system with colour-change display</li>
                                <li>PID sensor for direct reading of toxic volatile organic compounds (VOCs)</li>
                                <li>Infra-red (IR) sensors for CO2 and combustible gas (%LEL - %VOL)</li>
                                <li>Wide range of additional sensors including SO2, HCN, Cl2, NH3, PH3, H2, NO, NO2, ClO2, ETO and more</li>
                                <li>Highly configurable design using smart sensor</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage5" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title7" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>LEAK SEEKA COMBUSTIBLE & TOXIC GAS LEAK DETECTOR</h2>
                            <p>The new combustible and toxic gas leak detector from Kane Environmental is a small lightweight, hand-held unit for use
                                in any service situation. The LS1B Leak Seeka is highly sensitive and is fitted with a unique adjustable detector rate,
                                plus an alarm, which can be calibrated to suit any application. The LS1B can detect and quickly pinpoint leaks in a
                                wide range of toxic and combustible gases. The alarm can be turned off to allow leak searching during an alarm condition.
                                Audio and visual indication enables the user to accurately and swiftly pinpoint leaks.
                            </p>
                            <ul>
                                <li>Precision combustible detector locates the source of even the most difficult gas escape</li>
                                <li>Easy to use one handed operation with long gooseneck probe for hard to reach areas</li>
                                <li>Solid state sensor for reliability</li>
                                <li>Audio and visual indication</li>
                                <li>Thumb wheel operation eliminates background gas, locating leak source fast</li>
                                <li>Ultra sensitive sensor to 50ppm methane</li>
                                <li>Fast reaction time of less than 1 second</li>
                                <li>Operator adjustable sensitivity</li>
                                <li>Operator calibration of gas percentage settings for alarm levels</li>
                                <li>Unique tip light</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage6" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title8" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>RD 99 GAS LEAK DETECTOR</h2>
                            <p>The new refrigerant leak detector from Kane-May is a low cost, effective way of detecting the smallest of refrigerant gases.
                                The handheld unit detects environmentally damaging gases, including the latest CFC gases. The unit has a two position
                                sensitivity switch allowing the user to locate the smallest leaks. The RD99 has a dual alarm system for leak finding.
                                The increased tic rate sounds and a series of visual indicators illuminate as you approach the source of the leak.
                                This visual indication makes the detection of leaks possible, in noisy environments. The RD99 is battery powered and is
                                ideal for use with domestic and commercial refrigeration systems, automotive and air-conditioning systems.
                            </p>
                            <ul>
                                <li>Detects all existing refrigerants which include HFC's, HCFC's, CFC's</li>
                                <li>High sensitivity mode to locate small leaks</li>
                                <li>Audio and visual (LED) leak indicator</li>
                                <li>Protective rubber sleeve houses gooseneck when not in use</li>
                                <li>400mm gooseneck reaches awkward areas</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage7" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title9" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>ULTRASONIC THICKNESS GAUGES</h2>
                            <p>Rugged, fully electronic coating thickness gauges use magnetic and eddy current principles to measure coating
                                thickness on both ferrous and non-ferrous metals, accurately and quickly.
                            </p>
                            <ul>
                                <li>Ready to measure - no calibration adjustment required for most applications</li>
                                <li>Solvent, acid, oil, water, and dust resistant - weatherproof</li>
                                <li>Wear resistant ruby probe tip, for long-lasting calibration</li>
                                <li>PosiTector interchangeable platform - attach any PosiTector probe to a single gage body</li>
                                <li>USB, WiFi, and Bluetooth connectivity to PosiSoft PC, Mac, and Smartphone software</li>
                                <li>Certificate of Calibration showing traceability to NIST or PTB included (Long Form)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage8" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title10" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>UMVV01 ULTRA MEASURE ULTRASONIC THICKNESS GAUGE</h2>
                            <p>The high specification truly affordable Ultrasonic Thickness Gauge. The Link Ultra Measure Ultrasonic Thickness Gauge
                                is robust, easy to use, with variable velocity calibration that can be set to suit most materials.
                            </p>
                            <ul>
                                <li>Robust 5Mhz Transducer with split crystal protection to prevent any contamination</li>
                                <li>Simple user calibration at any time</li>
                                <li>Back Light for LCD Display</li>
                                <li>Rugged IP65 plastic casing and industrial keypad</li>
                                <li>Heavy Duty Instrument out protective rubber boot</li>
                                <li>6 hours life with (4) “AA” alkaline batteries</li>
                                <li>Five year Instrument warranty</li>
                                <li>One year Transducer warranty</li>
                                <li>Inch or mm reading selection</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage9" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>

            <div id="title11" className="content">
                <div className="two_sides">
                    <div className="left_side">
                        <div className="title1" >
                            <h2>MULTIGAUGE 5700 DATALOGGER</h2>
                            <p>The Multigauge 5700 is a simple, robust ultrasonic thickness gauge designed for most common thickness gauging applications
                                with the added benefit of being able to store measurements within the gauge. The easy to use keypad allows operator
                                interface whilst the bright LCD display can be used in all light conditions. The moulded soft rubber surround feels
                                comfortable, looks good and provides extra protection against knocks and scrapes. All probes have Intelligent Probe
                                Recognition (IPR), which automatically adjusts settings in the gauge at the same time as transmitting recognition
                                data - the result is a perfectly matched probe and gauge for enhanced performance. Additionally, the Automatic Measurement
                                Verification System (AMVS) ensures only true measurements are displayed, even on the most heavily corroded metals.
                                The gauge can store measurements in either a grid or string format which can then later be used in other proprietary
                                programs.
                            </p>
                            <ul>
                                <li>Ignores coatings up to 6 mm thick using Multiple Echo. Coating Plus+ ignores coatings up to 20 mm.</li>
                                <li>Automatic Measurement Verification System (AMVS).</li>
                                <li>Large colour LCD display giving user information.</li>
                                <li>No zeroing required.</li>
                                <li>Wireless data transmission.</li>
                                <li>Single crystal soft faced probe protected by a membrane.</li>
                                <li>Easy calibration with menu driven buttons.</li>
                                <li>Intelligent Probe Recognition (IPR).</li>
                                <li>Echo strength indicator.</li>
                                <li>3 year warranty.</li>
                                <li>Free calibration for the life of the gauge.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="right_side">
                        <img id="dynamicImage10" src="" alt="Image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
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

export default LinkInstruments;