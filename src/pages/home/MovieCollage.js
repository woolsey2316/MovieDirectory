import React, { Component } from 'react'
import Style from './HomeTile.module.css'
import Tile from './Tile'
import { Typography, Box } from '@material-ui/core'

class MovieCollage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: this.props.movieList,
      collage: []
    }

    for (let i = 0; i < 2; i++) {
      let show = this.state.movieList[i]
      this.state.collage.push(
        <Tile show={show} type="secondary" key={show.id} showType="movie" />
      )
    }

    let show = this.state.movieList[2]
    this.state.collage.push(
      <Tile show={show} key={show.id} type="main" showType="movie" />
    )
  }

  render() {
    return (
      <Box width="500px" display="flex" flexWrap="wrap">
        <Typography variant="h2" margin="1em">
          In Theatres
        </Typography>
        <div className={Style.break} />
        {this.state.collage}
      </Box>
    )
  }
}

export default MovieCollage
