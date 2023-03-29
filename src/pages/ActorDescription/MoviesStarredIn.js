import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import MoviePoster from '../../components/MoviePoster'

const useStyles = makeStyles({
  outer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  movieWrap: {
    margin: '1rem'
  }
})

export default function MoviesStarredIn({ movies }) {
  const styles = useStyles()
  return (
    <Box classes={{root: styles.outer}}>
      {movies
        ?.filter((e, i) => i < 15)
        .map((show, index) => (
          <Box classes={{root: styles.movieWrap}} key={index}>
            <MoviePoster show={show} />
          </Box>
        ))}
    </Box>
  )
}
