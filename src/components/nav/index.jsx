import React, { Component } from "react";
import NavItem from "../nav-item";
import request from '../../servises/data'
import Loader from "../loader";

import "./nav.css";

class Nav extends Component {
    state = {
        data : null
    }

    componentDidMount(){
        request.then((value) => {
            this.setState((state) => {
                return {
                    data : value
                }
            })
        })
    }

    render() {
        console.log(this.state)
        return (
            <ul className="nav__list">
                {
                    this.state.data === null 
                    ? <Loader></Loader> 
                    : elements(this.state.data)
                }
            </ul>
        )
    }
}

function elements(el) {
    let btn = []

    for (let e in el) {
        btn.push(<NavItem name={e}></NavItem>)
    }

    return btn
}

export default Nav;