import React from "react";
import { Route, Routes } from "react-router-dom";

import Nav from "../nav";
import Header from "../header";
import CardPage from "../card-page";

import "./app.css";
import Main from "../main";
import Page404 from "../page-404";


function App() {
    return (
        <>
            <div className="app container ">
                <Header></Header>
                <Nav></Nav>
                <section>
                    <Routes>
                        <Route path="/" element={<Main></Main>}></Route>

                        <Route path="people" element={<CardPage url={{
                            url: 'people',
                            img: 'characters'
                        }}></CardPage>}></Route>

                        <Route path="planets" element={<CardPage url={{
                            url: 'planets',
                            img: 'planets'
                        }}></CardPage>}></Route>

                        <Route path="films" element={<CardPage url={{
                            url: 'films',
                            img: 'films'
                        }}></CardPage>}></Route>

                        <Route path="species" element={<CardPage url={{
                            url: 'species',
                            img: 'species'
                        }}></CardPage>}></Route>

                        <Route path="vehicles" element={<CardPage url={{
                            url: 'vehicles',
                            img: 'vehicles'
                        }}></CardPage>}></Route>

                        <Route path="starships" element={<CardPage url={{
                            url: 'starships',
                            img: 'starships'
                        }}></CardPage>}></Route>

                        <Route path="/*" element={<Page404></Page404>}></Route>
                    </Routes>
                </section>
            </div>
        </>
    );
}

export default App;
