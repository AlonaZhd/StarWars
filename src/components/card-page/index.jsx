import React, { Component } from "react";
import "./card-page.css";
import { request } from "../../servises/data";
import CardElement from "../card-element";

class CardPage extends Component {
    state ={
        data: [],
        loader: false
    }

    componentDidMount(){
        console.log('componentDidMount');
        request('https://swapi.dev/api/people/')
            .then((res) => {
                this.setState((state) => {
                    return {
                        data: res,
                        loader: true
                    }
                })
            })
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate', this.state.data);
    }

    componentWillUnmount() {
        // console.log('componentWillUnmount');
    }
    
    componentDidCatch() {
        // console.log('componentDidCatch');
    }


    render = () => {
        const { data, loader } = this.state;

        return (
            <div className="card-page">
                {   loader 
                    ? data.results.map((e, item) => {
                        return(
                            // console.log('element', e)
                            <CardElement key={item.id} name={e.name}></CardElement>
                        )   
                    })
                    : <></>
                }
            </div>
        )        
    }

}

export default CardPage;