import React, { Component } from "react";
import "./search.css";
import { Autocomplete, TextField } from "@mui/material";
import { request } from "../../servises/data";

export default class Search extends Component {
    state = {
        data : [],
    }

    componentDidMount() {
        request("https://swapi.dev/api/people/").then((data) => {
            if(Array.isArray(data.results)) {

                this.setState((state) => {
                    return {
                        data : data.results.map((e) => {
                            return {
                                label: e.name,
                                year: e.birth_year,
                            }
                        }),
                    }
                })
            } else {
                throw new Error('data is not array')
            }
        })
    }


    render() {
        return (
            // <div class="search">
            //     <span >Search</span>
            // </div>
            <Autocomplete
                disablePortal
                id="demo-simple-select"
                options={this.state.data}
                sx={{
                    width: 300,
                    "#demo-simple-select-label": {
                        color: "white", // Змінює колір тексту
                    },
                    "& .MuiAutocomplete-popupIndicator": {
                        color: "white", // Змінює колір стрілки
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white", // Змінює колір бордера
                    },
                }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            ></Autocomplete>
        )
    }
}
