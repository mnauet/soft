import React from "react"

function Products(props) {
    return(
        <div>
            <h3>id: {props.id} </h3>
            <h3>name: {props.product.name} </h3>
            <h3>price: {props.product.price} </h3>
            <h3>description: {props.product.description} </h3>
            <hr></hr>
        </div>
    )
}

export default Products