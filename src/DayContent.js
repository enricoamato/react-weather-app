import React from 'react'

const DayContent = (props) => {

  const imgArray = {
    "Clear": require('./imgs/icons/sunny.svg'),
    "Clouds": require('./imgs/icons/clouds.svg'),
    "Rain": require('./imgs/icons/drop.svg'),
    "Drizzle": require('./imgs/icons/drop.svg'),
    "Moon": require('./imgs/icons/moon.svg'),
    "Snow": require('./imgs/icons/snowflake.svg'),
    "Haze": require('./imgs/icons/fog.svg'),
    "Fog": require('./imgs/icons/fog.svg')
    }

  // const backgroundArray = {
  //   "Morning": './imgs/bg/morning.jpg',
  //   "Afternoon": './imgs/bg/afternoon.jpg',
  //   "Evening": './imgs/bg/evening.jpg',
  //   "Night": './imgs/bg/night.png'
  // }

  // const backgroundChoice = () => {
  //   let d = new Date().getHours()
  //     if(d >= 0 && d < 7){
  //       return "Morning"
  //     }
  //     if(d >= 7 && d < 13){
  //       return "Afternoon"
  //     }
  //     if(d >= 13 && d < 19){
  //       return "Evening"
  //     }
  //     else{
  //       return "Night"
  //     }
  // }
  //
  // const applyBackground = () => {
  //   document.querySelector("box").style.backgroundImage = backgroundArray[backgroundChoice]
  // }
  //
  // applyBackground()

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
