import React from 'react'

const DayContent = (props) => {

  const imgArray = {
    "Clear": require('./imgs/icons/sunny.svg'),
    "Clouds": require('./imgs/icons/clouds.svg'),
    "Rain": require('./imgs/icons/drop.svg'),
    "Moon": require('./imgs/icons/moon.svg'),
    "Snow": require('./imgs/icons/snowflake.svg'),
    "Haze": require('./imgs/icons/fog.svg')
    }

  return(
    <div className="content">
      <div className="location">{props.city} {props.country}</div>

      <div>
        <span className="temp">{props.temperature}°</span> <br/>
        <span className="description">{props.description}</span> <br/><br/>
        <img alt={props.description} src={imgArray[`${props.description}`]} /> <br/>
      </div>

      <div className="date">
        <span>{props.day} {props.fullDate}</span>
      </div>
    </div>
  )
}

export default DayContent
