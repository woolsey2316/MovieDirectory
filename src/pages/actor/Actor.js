import React, { Component } from 'react'
import MoviePoster from '../../components/MoviePoster'
import Style from './Actor.module.css'
import { Box } from '@material-ui/core'

class Actor extends Component {
  viewactor() {
    const url = 'https://www.themoviedb.org/actor/' + this.props.profile.show.id
    window.location.href = url
  }
  render() {
    return (
      <Box display="flex" alignItems="center">
        <div className={Style.profileContainer}>
          <div
            className={Style.profile}
            style={{
              backgroundImage: `url(${
                'https://image.tmdb.org/t/p/w185' +
                this.props.profile.profile_path
              })`,
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
