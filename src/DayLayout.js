import React from 'react'
import DayContent from './DayContent'

const DayLayout = (props) => {
  return(
    <div className="box">

          <DayContent
            temperature={props.temperature}
            description={props.description}
            day={props.day}
            city={props.city}
            country={props.country}
            // date={props.date}
          />

    </div>
  )
}

export default DayLayout
// <img alt="boh" src="https://i.pinimg.com/originals/9f/4e/38/9f4e38d4634f2b584143be34d1324c0a.png"></img>
