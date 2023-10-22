import React from "react";
import "./card-element.css";

const CardElement = ({ name, img }) => {
    console.log(name)

    return (
        <div className="card-element col h-100">
            <div className="card-item">
                <img 
                    src={img} 
                    alt={name}
                />
                <span className="card-text">{name}</span>
            </div>
        </div>
    )
}

export default CardElement;