import React from "react";
import "./card-element.css";
import characters1 from './characters-1.jpg'
import characters2 from './characters-2.jpg'
import characters3 from './characters-3.jpg'
import characters4 from './characters-4.jpg'
import characters5 from './characters-5.jpg'
import characters6 from './characters-6.jpg'
import characters7 from './characters-7.jpg'
import characters8 from './characters-8.jpg'
import characters9 from './characters-9.jpg'
import characters10 from './characters-10.jpg'

const CardElement = ({ name }) => {
    return (
        <div className="card-element">
            { name === "Luke Skywalker" ? (
                <div className="card-item">
                    <img src={characters1} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "C-3PO" ? (
                <div className="card-item">
                    <img src={characters2} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "R2-D2" ? (
                <div className="card-item">
                    <img src={characters3} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "Darth Vader" ? (
                <div className="card-item">
                    <img src={characters4} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "Leia Organa" ? (
                <div className="card-item">
                    <img src={characters5} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "Owen Lars" ? (
                <div className="card-item">
                    <img src={characters6} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "Beru Whitesun lars" ? (
                <div className="card-item">
                    <img src={characters7} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "R5-D4" ? (
                <div className="card-item">
                    <img src={characters8} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "Biggs Darklighter" ? (
                <div className="card-item">
                    <img src={characters9} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

            { name === "Obi-Wan Kenobi" ? (
                <div className="card-item">
                    <img src={characters10} alt={name} />
                    <span className="card-text">{name}</span>
                </div>
            ) : "" }

        </div>
    )
}

export default CardElement;