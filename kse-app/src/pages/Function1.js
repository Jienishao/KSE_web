import React, { useEffect } from "react";
import ToolBar from "../components/ToolBar";
import NavBar from "../components/NavBar";
import SiteMap from "../components/SiteMap";
import "../css/MainPage.css"
import "../css/Function1.css"

const Function1 = () => {

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
                <div className="img_container">
                    <img
                        src="https://www.stellantriebe.de/wp-content/uploads/2016/04/P1090257-1500x430.jpg"
                        alt="Subject picture"
                        className="subject_img"
                    />
                    <div className="text_box title">ELECTRICAL ACTUATORS</div>
                    <div className="text_box sub_title">Economical - precise - safe</div>
                </div>

                <div className="class_container">
                    <img
                        src="https://www.stellantriebe.de/wp-content/uploads/2013/04/entwicklung-300x225.jpg"
                        alt="Concept picture"
                        className="class_img"
                    />
                    <p className="class_description">
                        ARIS Stellantriebe GmbH produces robust actuators for industrial applications at their headquarters
                        in Troisdorf/Germany. Based on more than 40 years of experience, the Nano, Nano + and Tensor series were
                        developed from scratch in 2014 and thus ensure a modern technology for use in your plants. ARIS actuators are
                        generally used in demanding and safety-relevant systems in which the reliability of the individual installed
                        components is compulsory. This requirement was consistently implemented in the constructions in addition to a
                        high degree of safety. Divided into four series, ARIS customers always find the right drive for theit
                        application. The portfolio ranges from the fully electronically controlled precision actuator “Tensor” to the
                        classic actuator in a contemporary design. If you are unsure about the type of drive that suits your application,
                        please contact our sales team at +49 2241 25186-16. We will be pleased to advise you.
                    </p>
                </div>

                <div className="product_container">
                    <h1>ELECTRICAL ROTARY AND PART-TURN ACTUATORS</h1>
                    <div className="product_content">
                        <p className="product_description">
                            ARIS Stellantriebe GmbH produces robust actuators for industrial applications at their headquarters
                            in Troisdorf/Germany. Based on more than 40 years of experience, the Nano, Nano + and Tensor series were
                            developed from scratch in 2014 and thus ensure a modern technology for use in your plants. ARIS actuators are
                            generally used in demanding and safety-relevant systems in which the reliability of the individual installed
                            components is compulsory. This requirement was consistently implemented in the constructions in addition to a
                            high degree of safety. Divided into four series, ARIS customers always find the right drive for their
                            application. The portfolio ranges from the fully electronically controlled precision actuator “Tensor” to the
                            classic actuator in a contemporary design. If you are unsure about the type of drive that suits your application,
                            please contact our sales team at +49 2241 25186-16. We will be pleased to advise you.
                        </p>
                        <img
                            src="https://www.stellantriebe.de/wp-content/uploads/2016/09/Tensor_Zone_2_22_03.jpg"
                            alt="Concept picture"
                            className="product_image"
                        />
                    </div>
                    <a href="#" className="product_button">Learn More</a>
                </div>

                <div className="product_container">
                    <h1>ELECTRICAL ROTARY AND PART-TURN ACTUATORS</h1>
                    <div className="product_content">
                        <p className="product_description">
                            ARIS Stellantriebe GmbH produces robust actuators for industrial applications at their headquarters
                            in Troisdorf/Germany. Based on more than 40 years of experience, the Nano, Nano + and Tensor series were
                            developed from scratch in 2014 and thus ensure a modern technology for use in your plants. ARIS actuators are
                            generally used in demanding and safety-relevant systems in which the reliability of the individual installed
                            components is compulsory. This requirement was consistently implemented in the constructions in addition to a
                            high degree of safety. Divided into four series, ARIS customers always find the right drive for their
                            application. The portfolio ranges from the fully electronically controlled precision actuator “Tensor” to the
                            classic actuator in a contemporary design. If you are unsure about the type of drive that suits your application,
                            please contact our sales team at +49 2241 25186-16. We will be pleased to advise you.
                        </p>
                        <img
                            src="https://www.stellantriebe.de/wp-content/uploads/2016/09/Tensor_Zone_2_22_03.jpg"
                            alt="Concept picture"
                            className="product_image"
                        />
                    </div>
                    <a href="#" className="product_button">Learn More</a>
                </div>

                <div className="product_container">
                    <h1>ELECTRICAL ROTARY AND PART-TURN ACTUATORS</h1>
                    <div className="product_content">
                        <p className="product_description">
                            ARIS Stellantriebe GmbH produces robust actuators for industrial applications at their headquarters
                            in Troisdorf/Germany. Based on more than 40 years of experience, the Nano, Nano + and Tensor series were
                            developed from scratch in 2014 and thus ensure a modern technology for use in your plants. ARIS actuators are
                            generally used in demanding and safety-relevant systems in which the reliability of the individual installed
                            components is compulsory. This requirement was consistently implemented in the constructions in addition to a
                            high degree of safety. Divided into four series, ARIS customers always find the right drive for their
                            application. The portfolio ranges from the fully electronically controlled precision actuator “Tensor” to the
                            classic actuator in a contemporary design. If you are unsure about the type of drive that suits your application,
                            please contact our sales team at +49 2241 25186-16. We will be pleased to advise you.
                        </p>
                        <img
                            src="https://www.stellantriebe.de/wp-content/uploads/2016/09/Tensor_Zone_2_22_03.jpg"
                            alt="Concept picture"
                            className="product_image"
                        />
                    </div>
                    <a href="#" className="product_button">Learn More</a>
                </div>

                <div className="product_container">
                    <h1>ELECTRICAL ROTARY AND PART-TURN ACTUATORS</h1>
                    <div className="product_content">
                        <p className="product_description">
                            ARIS Stellantriebe GmbH produces robust actuators for industrial applications at their headquarters
                            in Troisdorf/Germany. Based on more than 40 years of experience, the Nano, Nano + and Tensor series were
                            developed from scratch in 2014 and thus ensure a modern technology for use in your plants. ARIS actuators are
                            generally used in demanding and safety-relevant systems in which the reliability of the individual installed
                            components is compulsory. This requirement was consistently implemented in the constructions in addition to a
                            high degree of safety. Divided into four series, ARIS customers always find the right drive for their
                            application. The portfolio ranges from the fully electronically controlled precision actuator “Tensor” to the
                            classic actuator in a contemporary design. If you are unsure about the type of drive that suits your application,
                            please contact our sales team at +49 2241 25186-16. We will be pleased to advise you.
                        </p>
                        <img
                            src="https://www.stellantriebe.de/wp-content/uploads/2016/09/Tensor_Zone_2_22_03.jpg"
                            alt="Concept picture"
                            className="product_image"
                        />
                    </div>
                    <a href="#" className="product_button">Learn More</a>
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

export default Function1;