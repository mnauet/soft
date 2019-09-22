import React from "react"

function Joke(props) {
    return(
        <div>
            <wl>
                <li> Hallo Malik</li>
            </wl>

            <h3 style = {{display: props.question ? "block" : "none" }}>
                Question: {props.question} </h3>
            <h3 style = {{color: !props.Question && '#8e8e8e'}}>
                Answer: {props.punchLine} </h3>            

            <br></br>
            <hr></hr>
        </div>
    )
}
export default Joke