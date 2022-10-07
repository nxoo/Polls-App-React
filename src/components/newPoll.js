import React, {useState} from "react";

export default function newPoll() {
    const [question, setQuestion] = useState('')
    const [choices, setChoices] = useState([{value:''}, {value:''}])
    let host = window.location.href
    let url = 'https://nxoo-json-server.herokuapp.com/polls/'
    if (host.includes('localhost')) {
        url = 'http://localhost:8000/polls/'
        //url = 'https://nxoo-json-server.herokuapp.com/polls/'
    }

    function handleChange(e, index) {
        const updatedChoice = {...choices[index], value: e.target.value}
        const updatedChoices = [
            ...choices.slice(0, index),
            updatedChoice,
            ...choices.slice(index + 1)
        ]
        setChoices(updatedChoices)
        console.log(url, question, index, choices)
    }

    function addChoice(e) {
        e.preventDefault()
        setChoices(choices => [...choices, {value:''}])
    }

    function removeChoice(e, index) {
        e.preventDefault()
        //const newState = choices.filter((x, index) => index !== i);
        let newState = [...choices]
        newState.splice(index, 1)
        setChoices(newState)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(choices)
    }

    return (
        <div className="col-sm-6">
            <h4 className="mb-3">Create a new poll</h4>
            <form onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input
                        type="text"
                        className="form-control"
                        id="question"
                        placeholder="Question"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                </div>
                {choices.map((choice, index) => (
                    <div key={index} className="input-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id={`${index}`}
                            placeholder={`choice ${index + 1}`}
                            value={choice.value}
                            onChange={(e) => handleChange(e, index)}
                        />
                        {index < 2 ? null :
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                                    onClick={(e) => removeChoice(e, index)}
                            >x</button>}
                    </div>
                ))}
                <div className="mb-2">
                    <button className="btn btn-link text-decoration-none ps-0"
                            onClick={(e) => addChoice(e)}><i className="bi bi-file-plus"/> Add choice
                    </button>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}