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
      day: undefined
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const key = 'c2e69d04079cfbe116fe0acc17abb587'
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?'

    fetch(`${endpoint}q=London&appid=${key}`)
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
        value: '',
      }))
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    console.log(this.state.value)
  }

  getDay() {
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date()
    d = d.getDay()
    return daysArray[d]
  }

  render() {
    const {temperature, description, day, city, country, date} = this.state

    return(
      <div>
        <Header />
          <header className="header">
            <input type="text" onChange={this.handleChange} value={this.state.value}></input>
            <button>Search</button>
          </header>

        <DayLayout
          temperature={Math.floor((temperature - 272,15))}
          description={description}
          day={day}
          city={city}
          country={country}
          // date={date}
        />
      </div>
    )
  }
}

export default App
