import React from "react";


export default function newPoll() {
    let host = window.location.href
    let url = 'https://nxoo-json-server.herokuapp.com/polls/'
    if (host.includes('localhost')) {
        url = 'http://localhost:8000/polls/'
        //url = 'https://nxoo-json-server.herokuapp.com/polls/'
    }
    console.log(url)

    return (
        <div className="col-sm-6">
            <h4 className="mb-3">Add a new poll</h4>
            <form>
                <div className="mb-2">
                    <input type="text" className="form-control" id="question" placeholder="Question"/>
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" id="choice1" placeholder="Choice 1"/>
                </div>
                <div className="mb-0">
                    <input type="text" className="form-control" id="choice2" placeholder="Choice 2"/>
                </div>
                <div className="mb-3">
                    <button className="btn btn-link text-decoration-none ps-0">Add choice</button>
                    <button className="btn btn-link text-decoration-none">Remove choice</button>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}