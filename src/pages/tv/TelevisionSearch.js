import React, { Component } from 'react'
import Television from './Television'
import SearchBar from '../../components/SearchBar.js'
import Navigation from '../../components/Navigation.js'

class TelevisionSearch extends Component {
  constructor(props) {
    super(props)
    this.state = { televisions: [] }
    this.searchChangeHandler = this.searchChangeHandler.bind(this)
    console.log({ props })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const searchTerm = event.target.value
    this.props.searchTelevision(searchTerm)
  }
  render() {
    return (
      <div>
        <Navigation />
        <SearchBar type="tv" onChange={this.searchChangeHandler} search={this.props.searchTelevision}/>
        <div className="searchResultCanvas">
          {this.props.televisions.televisionResults?.map((show) => {
              show.poster_src =
                'https://image.tmdb.org/t/p/w185' + show.poster_path
              return <Television key={show.id} show={show} />
            })}
        </div>
      </div>
    )
  }
}

export default TelevisionSearch
