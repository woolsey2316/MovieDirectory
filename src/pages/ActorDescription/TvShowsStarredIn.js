import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import TelevisionPoster from '../../components/TelevisionPoster'

const useStyles = makeStyles({
  outer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  tvPosterWrap: {
    margin: '1rem'
  }
})

export default function TvShowsStarredIn({ tvShows }) {
  const styles = useStyles()
  return (
    <Box classes={{root: styles.outer}}>
      {tvShows
        ?.filter((e, i) => i < 15)
        .map((show, index) => (
          <Box classes={{root: styles.tvPosterWrap}} key={index}>
            <TelevisionPoster show={show} />
          </Box>
        ))}
    </Box>
  )
}