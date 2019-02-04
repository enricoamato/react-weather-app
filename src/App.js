import React from 'react'
import Header from './Header'
import DayLayout from './DayLayout'
import DayContentError from './DayContentError'

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
      error: false,
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
          console.log(response.ok, response.status)
          if(response.ok){
            console.log(response)
            return response.json()
          .then(response => this.setState({
            temperature: response.main.temp,
            city: response.name,
            description: response.weather[0].main,
            day: this.getDay(),
            isButtonClicked: true,
            fullDate: this.getFullDate(),
            error: false
          }))
        } else{
            console.log('error')
            this.setState({error: true})

        }
        }
        catch(error){
          console.log(response)
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
    const {temperature, description, day, city, country, fullDate, error, isButtonClicked} = this.state
    console.log(error)

    if (error === false && isButtonClicked === true) {
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
    }

    else if(error === false){
      return(
        <div>
          <Header />
            <header className="header">
              <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange}></input>
              <button onClick={this.search}>Search</button>
            </header>
        </div>
      )
    } else {
      return(
        <div>
          <Header />
          <header className="header">
            <input type="text" onKeyPress={this.handleKeyPress} onChange={this.handleChange}></input>
            <button onClick={this.search}>Search</button>
          </header>
          <DayContentError />
        </div>
      )
    }
  }
}

export default App
