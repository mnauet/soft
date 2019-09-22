import React from "react"
import todosData from "./todosData"
import TodoItem from './TodoItem'

function AppTodoItem() {
    const todoItems = todosData.map(item => <TodoItem itemNames ={item}/>)
    
    return(
        <div>
            {todoItems}
        </div>
    )
}
export default AppTodoItem