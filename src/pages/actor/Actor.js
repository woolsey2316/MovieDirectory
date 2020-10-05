import React, { Component } from 'react'
import MoviePoster from '../../components/MoviePoster'
import Style from './Actor.module.css'
import { Box } from '@material-ui/core'

class Actor extends Component {
  viewactor() {
    console.log('Trying to view actor')
    const url = 'https://www.theactordb.org/actor/' + this.props.profile.show.id
    window.location.href = url
  }
  render() {
    return (
      <Box bgcolor="#3c3c3c" className="searchResultCanvas">
        <div className={Style.profileContainer}>
          <div
            className={Style.profile}
            style={{
              backgroundImage: `url(${this.props.profile.profile_pic})`,
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          <p className={Style.actorName}>{this.props.profile.name}</p>
          <div />
          <p className={Style.popularity}>
            {this.props.profile.popularity + 'm'}
          </p>
        </div>
        {this.props.profile.known_for.map((show) => (
          <MoviePoster key={show.id} show={show}></MoviePoster>
        ))}
      </Box>
    )
  }
}

export default Actor