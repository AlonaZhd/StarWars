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
        request(`https://swapi.dev/api/${this.props.url.url}/`)
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
            <>
                <h2 className="card-page__title">
                    {this.props.url.url}
                </h2>
                <div className="card-page row row-cols-1 row-cols-md-5">


                    {   loader 
                        ? data.results.map((e, item) => {
                            return(
                                <CardElement key={item.id} img={`https://starwars-visualguide.com/assets/img/${this.props.url.img}/${item+1}.jpg`} name={e.name || e.title || e.classification}>
                                </CardElement>
                            )   
                        })
                        : <></>
                    }
                </div>
            </>
        )        
    }

}

export default CardPage;