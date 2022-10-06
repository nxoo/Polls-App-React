import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/navbar";
import Polls from "./components/polls";
import NewPoll from "./components/newPoll";
import Vote from "./components/vote";
import Results from "./components/results";
import './App.css';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>}>
                    <Route path='/' element={<Polls/>}/>
                    <Route path='/newPoll' element={<NewPoll />}/>
                    <Route path='/vote' element={<Vote/>}/>
                    <Route path='/results' element={<Results/>}/>
                </Route>
            </Routes>
        </Router>
    )
}
