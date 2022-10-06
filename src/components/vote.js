import React from "react";
import {useLocation} from "react-router-dom";

export default function Vote() {
    const location = useLocation()

    return (
        <div>Vote {location.state.pollId}</div>
    )
}