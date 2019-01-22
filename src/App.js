import React from 'react'
import DaySection from './DaySection'
import Header from './Header'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <div>
        <Header />
        <DaySection />
        <DaySection />
        <DaySection />
      </div>
    )
  }
}

export default App
