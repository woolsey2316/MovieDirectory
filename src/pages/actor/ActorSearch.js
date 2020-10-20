import React, { Component } from 'react'
import Actor from './Actor.js'
import SearchBar from '../../components/SearchBar.js'
import Navigation from '../../components/Navigation'

class ActorSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { actors: [] }
    this.searchChangeHandler = this.searchChangeHandler.bind(this)
    console.log({ props })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.props.searchActor(searchTerm)
  }
  render() {
    return (
      <div>
        <Navigation bg="dark" variant="dark" searchBar={<SearchBar type="actors" onChange={this.searchChangeHandler} />}/>
        <div className="searchResultCanvas">
          {this.props.actors.actorResults &&
            this.props.actors.actorResults.map((res) => {
              res.profile_src =
                'https://image.tmdb.org/t/p/w185' + res.profile_src
              return <Actor key={res.id} profile={res} />
            })}
        </div>
      </div>
    )
  }
}

export default ActorSearch
