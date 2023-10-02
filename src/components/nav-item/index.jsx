import React from "react";
import "./nav-item.css";

const NavItem = ({name}) => {
    return (
        <li className="nav__item">
            <button type="button" class="btn btn-outline-light">{name}</button>
        </li>
    )
}

export default NavItem;