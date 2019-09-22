import React from "react"

import TodoItems from "./TodoItems"

function MainContent() {

    const firstName = "Malik"
    const lastName = "Akram"
    const date = new Date()
    const hours = date.getHours()



    let timeOfDay
    if (hours <12){
        timeOfDay = "good morning"
    } else if (hours >= 12) {
        timeOfDay = "It is evening"
    }
    const styles = {
        color: 'yellow' , 
        backgroundColor: 'black' ,
        fontSize : '24px'
    }
    return(

        <main>
            <div>
                <h>main section</h>
                <h1>It is now {date.getHours() % 12} o'clock</h1>
                <h1 style = {styles}>{timeOfDay}</h1>
                <p> HALLO {firstName + " " + lastName}</p>
                
                <TodoItems />
                <TodoItems />
                <TodoItems />
                <TodoItems />

            </div>

        </main>
    )
}


export default MainContent
