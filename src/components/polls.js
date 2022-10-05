import React, {useEffect, useState} from "react";

let url = 'http://localhost:8000/polls/'

function Polls() {
    let [polls, setPolls] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPolls(data))
    }, [])

    if (polls.length === 0) {
        return <div>There are no polls, be the first to create one.</div>
    }

    return (
        <div className="table-responsive">
            <table className="table table-striped">
                <tbody>
                {polls.map(poll => (
                    <tr className="py-5" key={poll.id}>
                        <td>{poll.id}</td>
                        <td className="fw-bold text-secondary">{poll.poll}</td>
                        <td>
                            <a className="btn btn-success btn-sm text-white" href="#">Vote</a>
                        </td>
                        <td>
                            <a className="btn btn-outline-secondary btn-sm" href="#">Results</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Polls;