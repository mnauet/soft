import React from "react"

/*

Challenge:
1. Convert all 3 components to be class-based
2. Fix the small bug

*/


// #2
// function Header(props) {
//     return (
//         <header>
//             <p>Welcome, {props.username}!</p>
//         </header>
//     )
// }

class Header extends React.Component {
    render() {
     return (
        <header>
            <p>Welcome, {this.props.username}!</p>
        </header>
    )       
    }
}


export default Header
