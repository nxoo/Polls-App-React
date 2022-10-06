import React, {useState, useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <ContentLoader>
        <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%"/>
    </ContentLoader>
);

export default function Vote() {
    const location = useLocation()
    const navigate = useNavigate()
    const [poll, setPoll] = useState()
    const [choiceId, setChoiceId] = useState()
    const [loading, setLoading] = useState(true)
    let pollId = location.state.pollId
    let host = window.location.href
    let url = 'https://nxoo-json-server.herokuapp.com/polls/' + pollId
    if (host.includes('localhost')) {
        url = 'http://localhost:8000/polls/' + pollId
        //url = 'https://nxoo-json-server.herokuapp.com/polls/' + pollId
    }

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPoll(data)
                setLoading(false)
            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        console.log('a', poll)
        const newChoice = poll['choices'].map(choice => {
            if (parseInt(choiceId) === choice.id) {
                return {...choice, votes: choice.votes + 1}
            }
            return choice
        })
        let newState = {...poll, choices: newChoice}
        console.log('b', poll)
        console.log(newState)
        fetch(url,{
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newState)
        }).then(res => res.json())
            .then(data => navigate('/results', {
                state: {
                    pollId: data.id
                }
            }))
    }

    return (
        loading ?
            <svg width="100%" height="100%">
                <MyLoader/>
            </svg>
            :
            <div>
                <h2 className="mb-3">{poll.poll}</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    {poll.choices.map(choice => (
                        <div className="form-check" key={choice.id}>
                            <input className="form-check-input" type="radio" name="choice1"
                                   onChange={e => setChoiceId(e.target.id)}
                                   id={choice.id} required />
                            <label className="form-check-label" htmlFor={choice.id}>
                                {choice.choice}
                            </label>
                        </div>
                    ))}
                    <input className="btn btn-success mt-3" type="submit" value="Vote"/>
                </form>
                <div>
                    <button className="btn btn-link text-decoration-none mt-2 ps-0"
                            onClick={() => navigate("/results", {
                                state: {pollId: poll.id}
                            })}>See Results
                    </button>
                </div>
            </div>
    )
}
