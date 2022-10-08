import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <ContentLoader>
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%"/>
    </ContentLoader>
);

function Polls() {
    let [polls, setPolls] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState()
    let navigate = useNavigate()
    let host = window.location.href
    let url = 'https://nxoo-json-server.herokuapp.com/polls'
    if (host.includes('localhost')) {
        url = 'http://localhost:8000/polls/'
        //url = 'https://nxoo-json-server.herokuapp.com/polls'
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPolls(data)
                setLoading(false)
            })
            .catch(error => setError(error))
    }, [])

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Error fetching polls
            </div>
        )
    }

    return (
        loading ?
            <>
                <h4>Fetching polls</h4>
                <svg width="100%" height="100%">
                    <MyLoader/>
                </svg>
            </>
            :
            <>
                {polls.length === 0 ?
                    <h4>No polls</h4> :
                    <div>
                        <h4 className="mb-3">Latest polls</h4>
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
                                                onClick={() => navigate('/vote', {
                                                    state: {pollId: poll.id}
                                                })}>Vote
                                            </button>
                                            <button
                                                className="btn btn-outline-secondary btn-sm mx-2"
                                                onClick={() => navigate('/results', {
                                                    state: {pollId: poll.id}
                                                })}>Results
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
            </>
    )
}

export default Polls;