import React from "react"

import Header from './Header'
import Greeting from './Greeting'
/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/

// #1
// function App() {
//     return (
//         <div>
//             <Header />
//             <Greeting />
//         </div>
//     )
// }
class App extends React.Component {
    render (){
        return (
            <div>
                <Header username= "malik"/>
                <Greeting  />
            </div>
        )  
    } 
}
export default App