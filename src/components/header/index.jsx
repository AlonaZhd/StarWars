import React from "react";
import logo from './sw_logo.webp'
import Search from "../search";

import "./header.css";

function Header() {
    return (
            <div className="header">
                <a href="/"><img className="logo" src={logo}></img></a>
                <Search></Search>
            </div>
    );
}

export default Header