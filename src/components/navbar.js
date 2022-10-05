import React from "react";

function Navbar() {
    return (
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
                            <a className="nav-link ps-0 active" aria-current="page" href="#">
                                <i className="bi bi-house-door-fill"></i>{' '}
                                Home
                            </a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link active" aria-current="page" href="#">
                                <i className="bi bi-file-earmark-plus"></i>{' '}
                                Create Poll
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar