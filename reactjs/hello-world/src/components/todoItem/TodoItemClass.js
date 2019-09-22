import React from "react"

import './style.css'


// function TodoItemClass(props) {
//     return(
//         <div className="todo-item">
//             <input type = "checkbox" checked={props.itemNames.completed}></input>
//             <p>{props.itemNames.text}</p>
//         </div> 
//     )
// }


class TodoItemClass extends React.Component {

    render() {
        return(
            <div className="todo-item">
                <input type = "checkbox" 
                    checked={this.props.itemNames.completed}
                    onChange = {() => this.props.handleChange(this.props.itemNames.id)}>
                    </input>
                <p>{this.props.itemNames.text}</p>
            </div> 
        )
    }
    
}
export default TodoItemClass