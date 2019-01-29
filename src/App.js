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
      isButtonClicked: false,
      fullDate: undefined
    }
    this.handleChange = this.handleChange.bind(this)
    this.search = this.search.bind(this)
  }

  search() {
    const key = 'c2e69d04079cfbe116fe0acc17abb587'
    const endpoint = 'http://api.openweathermap.org/data/2.5/weather?'

    fetch(`${endpoint}q=${this.state.value}&appid=${key}`)
      .then(response => {
        if(response.ok){
          console.log(response)
          return response.json()
        }
        else{
          console.log(response)
        }
      })
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

  getFullDate() {
    let date = new Date()
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
  }

  render() {
    const {temperature, description, day, city, country, isButtonClicked, fullDate} = this.state

    if(isButtonClicked & temperature !== undefined & this.state.error !== 'error'){
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
            fullDate={fullDate}
          />
          </div>
        )
      }

      else if (isButtonClicked & this.state.error === 'error') {
        return(
          <div>
          <Header />
            <header className="header">
            <input type="text" onChange={this.handleChange}></input>
            <button onClick={this.search}>Search</button>
            <h1>The city that you typed is wrong or not in our database</h1>
          </header>
          </div>
        )
      }






      else {
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
