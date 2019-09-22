import React, {Component} from "react"
import todosData from "./todosData"
import TodoItemClass from './TodoItemClass'

// function AppTodoItemClass() {
//     const todoItems = todosData.map(item => <TodoItemClass itemNames ={item}/>)
    
//     return(
//         <div>
//             {todoItems}
//         </div>
//     )
//}
class AppTodoItemClass extends Component {
    constructor() {
        super()
        this.state = {
            todos : todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {

        this.setState( prevState => {
            const updatedTodos= prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos : updatedTodos
            }
        })
    }
    render() {
        const todoItems = this.state.todos.map(item => 
            <TodoItemClass itemNames ={item} handleChange = {this.handleChange}/>)  
        return(
            <div>
                {todoItems}
            </div>
        )
    }
    
}
export default AppTodoItemClass