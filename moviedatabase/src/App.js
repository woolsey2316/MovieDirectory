import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MovieSearch from './MovieSearch.js';
import ActorSearch from './ActorSearch.js';
import TelevisionSearch from './TelevisionSearch.js';
import Home from './Home.js';
import Style from './App.css';
import Actor from './Actor.js';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {scrollingLock: false};
        this.scrollFunction = this.scrollFunction.bind(this);
    }

    scrollFunction() {
        if (window.scrollY > 100) {
            console.log("should lock");
            this.setState({
                scrollingLock: true
            });
        } else if (window.scrollY < 100) {
            console.log("not locked" );
            this.setState({
                scrollingLock: false
            });
        }
    }

  componentDidMount() {
      window.addEventListener('scroll', this.scrollFunction);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.scrollFunction);
  }

  render() {
      return (
        <Router>
          <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">movieDatabase</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="movie">Movie</Nav.Link>
              <Nav.Link href="television">Television</Nav.Link>
              <Nav.Link href="actor">Actor</Nav.Link>
            </Nav>
          </Navbar>
          <div className="search-result-canvas">{this.state.rows}</div>
            <Switch>
              <Route exact path="/" ><Home/></Route>
              <Route exact path="/home" ><Home/></Route>
              <Route exact path="/movie" ><MovieSearch/></Route>
              <Route exact path="/television" ><TelevisionSearch/></Route>
              <Route exact path="/actor" ><ActorSearch/></Route>
            </Switch>
          </div>
        </Router>
      )
    }
}

export default App;