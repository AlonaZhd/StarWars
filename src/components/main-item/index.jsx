import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import "./main-item.css";

const MainItem = ({ name, imgSrc }) => {
        return (
            <div className="main__item">
                <img 
                    src={imgSrc} 
                    alt={name}
                    className="main__item--img"
                />
                <a href="#"><span className="main__item--text">{name}</span></a>
            </div>
        )
    }


export default MainItem;
