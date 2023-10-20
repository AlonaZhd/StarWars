import React from "react";
import logo from './sw_logo.webp'
import Search from "../search";

import "./header.css";

function Header() {
    return (
            <div className="header">
                <img className="logo" src={logo}></img>
                <Search></Search>
            </div>
    );
}

export default Header