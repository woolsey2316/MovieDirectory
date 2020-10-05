import React, { useContext } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { MovieContext, AppContext } from '../../context'
import Rating from '../../components/Rating'

const MovieDescription = () => {
  const { movie } = useContext(MovieContext)
  const { genre } = useContext(AppContext)

  return (
    <Paper
      square={true}
      backgroundImage={'https://image.tmdb.org/t/p/original/' + movie.backdrop_path}
    >
      <img />
      <Typography variant="h2" >{movie.title}</Typography>
      <Typography variant="body1">&middot;</Typography>
      {movie.release_date}
      <Typography variant="body1">&middot;</Typography>
      {movie.genre_ids.map(elem => <Typography key={elem}>{genre.get.get(elem) + ', '}</Typography>)}
      <Typography variant="body1"></Typography>
      <Rating show={movie}/>
      <Typography variant="h4">Overview</Typography>
      <Typography variant="h4">{movie.overview}</Typography>
      <Typography variant="body1"></Typography>
    </Paper>
  )
}
export { MovieDescription }
