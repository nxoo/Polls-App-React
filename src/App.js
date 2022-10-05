import React from "react";
import Navbar from "./components/navbar";
import Polls from "./components/polls";
import './App.css';

function App() {
    return (
        <>
            <Navbar/>
            <div className="container col-sm-9">
                <Polls/>
            </div>
        </>
    );
}

export default App;
