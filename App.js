import React from "react"
import Header from "Header"
import Card from "Card"
import data from "data"

console.log(data)
 export default function App(){
    const cards = data.map(item => {  
 return (
     
    // 
     
    <Card 
    imageUrl= {item.imageUrl}
    location= {item.location}
        googleMapsUrl= {item.googleMapsUrl}
    title= {item.title}
        
        startDate= {item.startDate}
        endDate= {item.endDate}
        description={item.description}
        />
 ) 
      })
        
    
 
 
      
  
   return (
      <div>
           <Header/>
            {cards}
            </div>
       
    )  
 }
