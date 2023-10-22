import React, { Component } from "react";
import { request } from '../../servises/data'
import MainItem from "../main-item";
import Loader from "../loader";
import characterImage from './character.jpg';
import filmsImage from './films.jpg';
import speciesImage from './species.jpg';
import planetsImage from './planets.jpg';
import starshipsImage from './starships.jpg';
import vehiclesImage from './vehicles.jpg';

import "./main.css";

const imageArray = [characterImage, filmsImage, speciesImage, planetsImage, starshipsImage, vehiclesImage];

class Main extends Component {
    state = {
        data : null
    }

    componentDidMount(){
        request('https://swapi.dev/api/')
            .then((res) => {
                this.setState((state) => {
                    return {
                        data: res
                    }
                })
            })
    }


    render() {
        // console.log(this.state)
        return (
            <div className="main__list">
                {
                    this.state.data === null 
                    ? <Loader></Loader> 
                    : elements(this.state.data)
                }
            </div>
        )
    }
}

function elements(el) {
    // console.log(el)
    let mainCards = []

    for (let e in el) {
        console.log(e)
        mainCards.push(<MainItem name={e} imgSrc={imageArray[mainCards.length]}></MainItem>)
    }

    return mainCards
}

export default Main;