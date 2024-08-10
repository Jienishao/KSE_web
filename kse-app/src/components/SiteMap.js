import React from "react";
import "../css/SiteMap.css"
import { PiWindowsLogoBold } from "react-icons/pi";

const SiteMap = () => {
    return (
        <div className="site">
            <div className="box">
                <div className="column">
                    <PiWindowsLogoBold className="react_icon1" />
                </div>
                <div className="column">
                    <div className="title">Legal Information</div>
                    <button className="button">IMPRINT</button>
                    <button className="button">DISCLAIMER</button>
                    <button className="button">PRIVACY STATEMENT</button>
                    <button className="button">TERMS AND CONDITIONS</button>
                </div>
                <div className="column">
                    <div className="title">KSE FLOW NEWS</div>
                    <button className="button">News 1</button>
                    <button className="button">News 2</button>
                    <button className="button">News 3</button>
                </div>
                <div className="column">
                    <div className="title">CONTACT KSE</div>
                    <div className="address">Address:</div>
                    <div className="address">xxx xxx St, xxxxxxxx, XXX, 1234</div>
                    <hr />
                    <div className="address">Phone: xxxxxxxxxx</div>
                    <div className="address">Fax: xxx-xxx-xxx</div>
                    <div className="address">Email: xxxxxx@xxx.com</div>

                </div>

            </div>

            <hr />
            <div className="row">
                <p className="col-small">
                    &copy;{new Date().getFullYear()} COMPANY NAME INC | All right reserved | Terms Of Service | Privicy
                </p>
            </div>
        </div>
    )
}

export default SiteMap;