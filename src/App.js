import React from "react";
import Navbar from "./components/navbar";
import Polls from "./components/polls";
import './App.css';

function App() {
    return (
        <>
            <Navbar/>
            <div className="container">
                <Polls/>
            </div>
        </>
    );
}

export default App;
