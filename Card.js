import React from "react"

export default function Card(props){
    console.log(props)
    let badgeText
    if (props.item.travelled === 0) {
        badgeText = "Not Explored Yet"
    } else if (props.item.travelled === 1) {
        badgeText = "Explored!"
    }
    return (
        <div ClassName="container">
        <div className="card">
         {badgeText && <div className="card--badge">{badgeText}</div>}
        <div className="imageContainer">
       <img src={props.item.imageUrl} className="image"/>
       </div>
       <div className="card--info">
       <div ClassName="info--1">
       <span className="location">{props.item.location}  </span>
       <span><a href={props.item.googleMapsUrl} className="grey"> View on Google Maps</a></span>
      </div>
       <h1 className="title">{props.item.title}</h1>
       <span>{props.item.startDate}-{props.item.endDate}</span>
       <p>{props.item.description}</p>
      
       </div>
       </div>
       <div>
       <hr className="horizontal--rule"/>
      
       </div>
       </div> 
       
    )
}
