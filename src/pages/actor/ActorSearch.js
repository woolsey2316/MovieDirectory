import React, { Component } from 'react'
import ActorCard from '../../components/ActorCard'
import SearchBar from '../../components/SearchBar.js'
import Navigation from '../../components/Navigation'
import Styled from 'styled-components'
import SectionTitle from '../../components/SectionTitle'

const SectionContent = Styled.div`
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  font-weight: inherit;
  font-style: inherit;
  padding: 34px 5%;
  border: 0;
  outline: 0;
  background: white;
`

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
        <Navigation
          bg="dark"
          theme="dark"
          searchBar={
            <SearchBar type="actors" onChange={this.searchChangeHandler} />
          }
        />
        <SectionContent>
          <SectionTitle title="Actor" />
          {this.props.actors.actorResults &&
            this.props.actors.actorResults.map((res, i) => {
              return <ActorCard key={i} index={i + 1} profile={res} />
            })}
        </SectionContent>
      </div>
    )
  }
}

export default ActorSearch
