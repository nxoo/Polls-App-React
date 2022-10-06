import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Polls() {
    let [polls, setPolls] = useState([])
    let navigate = useNavigate()
    let url = 'http://localhost:8000/polls/'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPolls(data))
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-striped text-nowrap">
                <tbody>
                {polls.map(poll => (
                    <tr className="py-5" key={poll.id}>
                        <td>{poll.id}</td>
                        <td className="fw-bold text-secondary">{poll.poll}</td>
                        <td className="">
                            <button
                                className="btn btn-success btn-sm text-white mx-2"
                                onClick={() => navigate('/vote')}>Vote
                            </button>
                            <button
                                className="btn btn-outline-secondary btn-sm mx-2"
                                onClick={() => navigate('/results')}>Results
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Polls;