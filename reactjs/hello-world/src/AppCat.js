import React from "react"
import ReactDom from "react-dom"


import ContactCards from "../src/components/ContactCards"

function AppCat() {
    return (
        <div className="contacts">
            <ContactCards 
                contact={{
                name: "Mr. Whiskerson", 
                imgUrl: "http://placekitten.com/300/200", 
                phone: "(212) 555-1234",
                email: "mr.whiskaz@catnap.meow<"}}
            />
            <ContactCards 
                contact={{
                name:"Mr. Fluffykins",
                imgUrl:"http://placekitten.com/400/200",
                phone:"(212) 555-2345",
                email: "fluff@me.com<"}}
            />
            <ContactCards 
                contact={{
                name:"Destroyer",
                imgUrl:"http://placekitten.com/400/300",
                phone:"(212) 555-3456",
                email: "ofworlds@yahoo.com"                        
                }}                      
            />

            <ContactCards 
                contact={{
                    name:"Felix",
                    imgUrl:"http://placekitten.com/200/100",
                    phone:"(212) 555-4567",
                    email: "thecat@hotmail.com"   
                }}
                     
            />
 
        </div>

    )

}


export default AppCat;