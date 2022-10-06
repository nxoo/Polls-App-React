import React from "react";
import { useNavigate } from "react-router-dom"
import {Outlet} from "react-router-dom"


function Navbar() {
    let navigate = useNavigate()

    return (
        <div>
            <nav className="navbar navbar-expand bg-light fs-5 mb-sm-5 mb-3">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <button
                                    className="nav-link bg-light border-0"
                                    onClick={() => navigate("/")}
                                >
                                    <i className="bi bi-house-door-fill"></i>{' '}
                                    Home
                                </button>
                            </li>
                            <li className="nav-item mx-2">
                                <button
                                    className="nav-link bg-light border-0"
                                    onClick={() => navigate("/newPoll")}
                                >
                                    <i className="bi bi-file-earmark-plus-fill"></i>{' '}
                                    Create poll
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container col-sm-9">
                <Outlet/>
            </div>
        </div>
    )
}

export default Navbar