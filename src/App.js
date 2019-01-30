import React from 'react'
import Header from './Header'
import DayLayout from './DayLayout'

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
      isButtonClicked: false,
      fullDate: undefined
    }
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  search() {
    const key = 'c2e69d04079cfbe116fe0acc17abb587'
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?'
    fetch(`${endpoint}q=${this.state.value}&appid=${key}`)
      .then(response => {
        try {
          if(response.ok){
            console.log(response)
            return response.json()
            .then(response => this.setState({
              total: response,
              temperature: response.main.temp,
              city: response.name,
              country: response.sys.country,
              humidity: response.main.humidity,
              description: response.weather[0].main,
              day: this.getDay(),
              value: "",
              isButtonClicked: true,
              fullDate: this.getFullDate()
            }))
          }}
        catch(error){
          console.log('error', error)
          // throw new Error('WTF')
        }
      })

  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  getDay() {
    const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let d = new Date().getDay()
    return daysArray[d]
  }

  getFullDate() {
    let date = new Date()
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }

  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.search()
    }
  }

  render() {
    const {temperature, description, day, city, country, isButtonClicked, fullDate} = this.state

    if(isButtonClicked & temperature !== undefined & this.state.error !== 'error'){
        return(
          <div>
          <Header />
            <header className="header">
              <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange}></input>
              <button onClick={this.search}>Search</button>
            </header>
          <DayLayout
            temperature={Math.floor((temperature - 272.15))}
            description={description}
            day={day}
            city={city}
            country={country}
            fullDate={fullDate}
          />
          </div>
        )
      }else {
        return(
          <div>
            <Header />
              <header className="header">
              <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange}></input>
              <button onClick={this.search}>Search</button>
            </header>
          </div>
        )
      }
  }
}

export default App
