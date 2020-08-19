import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MovieSearch from './pages/movie/MovieSearch'
import ActorSearch from './pages/actor/ActorSearch'
import TelevisionSearch from './pages/tv/TelevisionSearch'
import Home from './pages/home/Home'
import Navigation from './components/Navigation.js'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { scrollingLock: false }
    this.scrollFunction = this.scrollFunction.bind(this)
  }

  scrollFunction() {
    if (window.scrollY > 100) {
      console.log('should lock')
      this.setState({
        scrollingLock: true
      })
    } else if (window.scrollY < 100) {
      console.log('not locked')
      this.setState({
        scrollingLock: false
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollFunction)
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/movie">
              <MovieSearch />
            </Route>
            <Route exact path="/television">
              <TelevisionSearch />
            </Route>
            <Route exact path="/actor">
              <ActorSearch />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
