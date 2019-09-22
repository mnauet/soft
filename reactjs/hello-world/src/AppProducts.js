import React from "react"
import productData from './components/vschoolProducts'
import Products from './components/Products'


function AppProducts() {
    const productComponents = productData.map(prod => 
        <Products key= {prod.id} product = {prod}
        //id={prod.id}
        //name={prod.name} 
        //price= {prod.price}
        //description={prod.description}
        />)
    return (
        <div>
            {productComponents}
        </div>

    )
}

export default AppProducts