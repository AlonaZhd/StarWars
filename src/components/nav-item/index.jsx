import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";

import "./nav-item.css";

const NavItem = ({name}) => {
    return (
        <li className="nav__item">
            <NavLink to={name} class="btn btn-outline-light">{name}</NavLink>
        </li>
    )
}

export default NavItem;