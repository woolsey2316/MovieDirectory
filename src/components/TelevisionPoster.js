import React, { useContext } from 'react'
import Style from './MoviePoster.module.css'
import { displayDate } from '../helpers'
import { Box, Typography, withStyles } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { TelevisionContext } from '../context'

import img from '../assets/images/default_poster.jpg'

const StyledRating = withStyles({
  iconEmpty: {
    color: '#e5e3e4'
  },
  iconFilled: {
    color: '#b03226'
  },
  root: {
    marginTop: '0.4em'
  }
})(Rating)

export default function TelevisionPoster(props) {
  const { setLocalStorage, setTelevisionContext } = useContext(
    TelevisionContext
  )

  function viewTelevision() {
    setTelevisionContext(props.show)
    setLocalStorage(props.show)
    window.location.href = `/tv/${props.show.id}`
  }

  if (!props.show) {
    return <div />
  }
  return (
    <Box display="flex" flexDirection="column" marginBottom="20px" marginRight="20px">
      <img
        className={Style.image}
        alt="poster"
        height="350"
        width="230"
        src={
          props.show.poster_path
            ? 'https://image.tmdb.org/t/p/w185/' + props.show.poster_path
            : img
        }
        style={{
          backgroundRepeat: 'no-repeat'
        }}
        onClick={viewTelevision.bind(this)}
      />
      <StyledRating
        name="half-rating"
        defaultValue={props.show.vote_average / 2}
        precision={0.5}
        readOnly
      />
      <Typography
        style={{ color: '#e8e8e9', margin: '0.3em 0', maxWidth: '230px' }}
        variant="h5"
        onClick={viewTelevision.bind(this)}
      >
        {props.show.name}
      </Typography>
      <Typography paragraph style={{ margin: '0.3em 0' }} variant="body1" color="secondary">
        {displayDate(props.show.first_air_date)}
      </Typography>
    </Box>
  )
}
