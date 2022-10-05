import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Polls from "./components/polls";
import './App.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route path='/' element={<Polls/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
