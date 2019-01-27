import React from 'react'

const DayContent = (props) => {

  return(

    <div className="content">

      <div className="location">{props.city} {props.country}</div>

      <div>
        <span className="temp">{props.temperature}°</span> <br/>
        <span className="description">{props.description}</span> <br/><br/>
        <img alt="sun" src={require('./weather_icons/sun.svg')}/> <br/>
      </div>

      <div className="date">
        <span>{props.day} 27/01/2019</span>
      </div>

    </div>
  )
}

export default DayContent
