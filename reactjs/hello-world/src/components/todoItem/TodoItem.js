import React from "react"

import './style.css'


function TodoItem(props) {
    return(
        <div className="todo-item">
            <input type = "checkbox" checked={props.itemNames.completed}></input>
            <p>{props.itemNames.text}</p>
  
        </div>
      
    )


}


export default TodoItem