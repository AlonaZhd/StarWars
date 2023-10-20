import React from "react";
import Nav from "../nav";
import Header from "../header";
import CardPage from "../card-page";

import "./app.css";

function App() {
    return (
        <>
            <div className="app">
                <Header></Header>
                <Nav></Nav>
                <section>
                    <CardPage/>
                </section>
            </div>
        </>
    );
}

export default App;
