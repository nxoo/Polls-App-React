import React, {useState} from "react";

export default function newPoll() {
    const [question, setQuestion] = useState('')
    const [choices, setChoices] = useState([{value: ''}, {value: ''}])
    let host = window.location.href
    let url = 'https://nxoo-json-server.herokuapp.com/polls/'
    if (host.includes('localhost')) {
        url = 'http://localhost:8000/polls/'
        //url = 'https://nxoo-json-server.herokuapp.com/polls/'
    }

    function handleChange(e, index) {
        e.preventDefault()
        let newState = choices
        newState[index]['value'] = e.target.value
        setChoices(newState)
        console.log(url, question, index, choices)
    }

    function addChoice(e) {
        e.preventDefault()
        setChoices(choices => [...choices, {value: ''}])
    }

    function removeChoice(e, i) {
        e.preventDefault()
        const newState = choices.filter((x, index) => index !== i);
        setChoices(newState)
    }

    return (
        <div className="col-sm-6">
            <h4 className="mb-3">Add a new poll</h4>
            <form>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="question"
                        placeholder="Question"
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>
                {choices.map((choice, index) => (
                    <div key={index} className="input-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id={`${index + 1}`}
                            placeholder={`choice ${index + 1}`}
                            onChange={(e) => handleChange(e, index)}
                        />
                        {index < 2 ? null :
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                    onClick={(e) => removeChoice(e, index)}
                            >X</button>}
                    </div>
                ))}
                <div className="mb-3">
                    <button className="btn btn-link text-decoration-none ps-0"
                            onClick={(e) => addChoice(e)}>Add choice
                    </button>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}