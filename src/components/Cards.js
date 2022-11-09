import React from 'react'


export default function Cards(props) {
    return (
        <div className="box--line">
        <div className="cards">
            <img src={`${props.imageUrl}`} className="card--image" />
            <div className="info">
                <div className="location"> <img src="https://icon-library.com/images/location-icon-transparent-background/location-icon-transparent-background-1.jpg"  className="way" /> {props.location} 
                <a className="google" href={props.googleMapsUrl}> View on google maps </a> </div> 
                <div className="title">{props.title}</div> 
                <div className="dates">{props.startDate} - {props.endDate}</div> 
                <div className="description">{props.description}</div>
                
            </div>
            
        </div>
        </div>
    )
}