import React from "react";
import "./page-404.css";

const Page404 = () => {
    return (
        <div className="page-404">
            <span className="accent_text--big">404</span>
            <span className="accent_text--small">SORRY!</span>
            <span className="accent_text--small">The Page You're Looking For Was Not Fount</span>
            <a href="/"><button className="btn btn-outline-light page-404--button">Go Back</button></a>
        </div>
    )
}

export default Page404;