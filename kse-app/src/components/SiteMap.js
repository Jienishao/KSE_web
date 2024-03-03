import React from "react";
import "../css/SiteMap.css"

const SiteMap = () => {
    return (
        <div className="site">
            <div className="row">
                <div className="col">
                    <h4>COMPANY NAME</h4>
                    <ul className="list">
                        <li>123456</li>
                        <li>LOCATION</li>
                        <li>ADDRESS</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>STUFF</h4>
                    <ul className="list">
                        <li>ONE</li>
                        <li>TWO</li>
                        <li>THREE</li>
                    </ul>
                </div>
                <div className="col">
                    <h4>Another</h4>
                    <ul className="list">
                        <li>ONE</li>
                        <li>TWO</li>
                        <li>THREE</li>
                    </ul>
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