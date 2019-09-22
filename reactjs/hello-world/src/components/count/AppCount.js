
import React from "react"
import './style.css'


function handleClick() {
    return (
        <div>
            <h3> "I was clicked" </h3>>
        </div>
    )


}

// https://reactjs.org/docs/events.html#supported-events

// function App1() {
//     return (
//         <div>
//             <img onMouseOver={() => console.log("Hovered!")} src="https://www.fillmurray.com/200/100"/>
//             <br />
//             <br />
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     )
// }


class AppCount extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            countSingle : 0,
            countDouble: 1
        }
        this.handleClickCount = this.handleClickCount.bind(this)
        this.handleClickCountDouble = this.handleClickCountDouble.bind(this)
    }
    handleClickCount() {
        this.setState((prevState) => {
            return {
                count : prevState.count +1 
            }
        })
        
    }
    handleClickCountDouble() {
        this.setState( prevState => {
            return {
                countSingle : prevState.countSingle +1 ,
                countDouble : prevState.countDouble + prevState.countDouble
            }
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick ={this.handleClickCount}> Change! </button>
                
                <h1>{this.state.countSingle}</h1>
                <h1>{this.state.countDouble}</h1>
                <button onClick ={this.handleClickCountDouble}> Double! </button>
            
            
            
            </div>
        )
    }

}
export default AppCount