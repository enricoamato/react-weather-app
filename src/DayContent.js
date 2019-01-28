import React from 'react'

const DayContent = (props) => {

  const imgArray = {
    "Clouds": require('./imgs/icons/clouds.svg'),
    "Drop": require('./imgs/icons/drop.svg'),
    "Moon": require('./imgs/icons/moon.svg'),
    "Snowflake": require('./imgs/icons/snowflake.svg'),
    "Clear": require('./imgs/icons/sunny.svg'),
    "Fog": require('./imgs/icons/fog.svg')
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
        <span>{props.day}</span>
      </div>
    </div>
  )
}

export default DayContent


// <img alt="sun" src={imgArray["drop"]} /> <br/>
// <img alt="sun" src={imgArray["moon"]} /> <br/>
// <img alt="sun" src={imgArray["snowflake"]} /> <br/>
// <img alt="sun" src={imgArray["sunny"]} /> <br/>
// <img alt="sun" src={imgArray["fog"]} /> <br/>
