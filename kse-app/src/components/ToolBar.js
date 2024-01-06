import React from "react";
import logoX from "../image/X_logo.jpg"
import logoFB from "../image/facebook_logo.png"
import logoW from "../image/wechat_logo.png"

const ToolBar = () => {
    return (
        <div className="media_icon">
            <img src={logoX} alt="X logo" className="logo"></img>   
            <img src={logoFB} alt="Face book logo" className="logo"></img>
            <img src={logoW} alt="wechat logo" className="logo"></img>
        </div>
    )
}

export default ToolBar;