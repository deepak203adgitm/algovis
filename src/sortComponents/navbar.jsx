import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand">Algo 404    </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <Link to={"/sort"}>
                        <span style={{ color: "white" }}>
                        <b>  Sorting Algorithim</b>
                        </span>
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <Link to={"/recursivesort"}>
                        <span style={{ color: "white" }}>
                        <b> Recursive  Sort </b>
                        </span>
                    </Link>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <Link to={"/pathfinder"}>
                        <span style={{ color: "white" }}>
                        <b> Path Finder Algorithim </b>
                        </span>
                    </Link>
                </div>
                

           <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <Link to={"/prime"}>
                        <span style={{ color: "white" }}>
                            <b> Prime Sieve </b>
                        </span>
                    </Link>
                </div>

            </nav>
        );
    }
}

export default Navbar;