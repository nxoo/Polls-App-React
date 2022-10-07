import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ContentLoader from "react-content-loader";
let pollId, url;

const MyLoader = () => (
    <ContentLoader>
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%"/>
    </ContentLoader>
);

function pluralize(x) {
    if (x === 1) return x + ' vote'
    return x + ' votes'
}

export default function Results() {
    const location = useLocation()
    const navigate = useNavigate()
    const [poll, setPoll] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)
    const [success, setSuccess] = useState(false)
    const [choice, setChoice] = useState()

    useEffect(() => {
        if (location.state === null) {
            navigate('/')
            return
        } else {
            let host = window.location.href
            pollId = location.state.pollId
            if (location.state.choice) {
                setChoice(location.state.choice[0])
                setSuccess(true)
            }
            url = 'https://nxoo-json-server.herokuapp.com/polls/' + pollId
            if (host.includes('localhost')) {
                url = 'http://localhost:8000/polls/' + pollId
            }
        }

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPoll(data)
                setLoading(false)
            })
            .catch(error => setError(error))
    }, [])

    if (error) {
        return (
            <div className="alert alert-danger" role="alert">
                Error fetching poll
            </div>
        )
    }

    function successMessage(choice) {
        return (
            <div className="alert alert-success" role="alert">
                You voted for <b>{choice}</b>
            </div>
        )
    }

    return (
        loading ?
            <>
                <h4>Fetching poll data</h4>
                <svg width="100%" height="100%">
                    <MyLoader/>
                </svg>
            </>
            :
            <div className=" col-sm-6">
                {success? successMessage(choice['choice']):null}
                <h4 className="mb-3">{poll.poll}</h4>
                <ul className="list-group list-group-flush">
                    {poll.choices.map(choice => (
                        <li key={choice.id}
                            className="list-group-item d-flex justify-content-between align-items-center">

                            {choice.choice}{' '}
                            <button className="btn btn-secondary btn-sm disabled">
                                {pluralize(choice.votes)}
                            </button>
                        </li>
                    ))}
                </ul>
                <div>
                    <button className="btn btn-link text-decoration-none mt-2 ps-0"
                            onClick={() => navigate("/vote", {
                                state: {pollId: poll.id}
                            })}>Vote Again
                    </button>
                </div>
            </div>
    )
}
