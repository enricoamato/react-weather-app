import React from 'react'

const DayContentError = () => {
  return(
    <div className="boxError">
      <span className="error">The city you searched for is either
      wrong or not in our database</span>
      <img alt="error" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Oxygen480-actions-dialog-close.svg/2000px-Oxygen480-actions-dialog-close.svg.png" ></img>
    </div>
  )
}

export default DayContentError
