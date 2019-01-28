import React from 'react'
import Header from './Header'
import DayLayout from './DayLayout'
// import Search from './Search'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      total: undefined,
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      day: undefined,
      value: undefined,
      isButtonClicked: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
  }

  search() {
    const key = 'c2e69d04079cfbe116fe0acc17abb587'
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?'

    fetch(`${endpoint}q=${this.state.value}&appid=${key}`)
      .then(response => response.json())
      .then(response => this.setState({
        total: response,
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].main,
        error: "",
        day: this.getDay(),
        value: "",
        isButtonClicked: true
      }))
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  getDay() {
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date()
    d = d.getDay()
    return daysArray[d]
  }

  render() {
    const {temperature, description, day, city, country, isButtonClicked} = this.state

    if(isButtonClicked){
        return(
          <div>
          <Header />
            <header className="header">
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.search}>Search</button>
          </header>
          <DayLayout
            temperature={Math.floor((temperature - 272.15))}
            description={description}
            day={day}
            city={city}
            country={country}
          />
          </div>
        )
      } else {
        return(
          <div>
          <Header />
            <header className="header">
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.search}>Search</button>
          </header>
          </div>
        )
      }
  }
}

export default App
