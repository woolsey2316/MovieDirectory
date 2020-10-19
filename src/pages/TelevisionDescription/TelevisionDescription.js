import React, { useEffect, useContext, useState } from 'react'
import { Paper, Typography, Card, CardMedia, Box } from '@material-ui/core'
import { TelevisionContext } from '../../context'
import MayAlsoLikeSection from './MayAlsoLikeSection'

import { useDispatch, useSelector } from 'react-redux'
import { televisionActions } from '../../actions'

import { GenreList } from './GenreList'
import CastList from './CastList'

import FastAverageColor from 'fast-average-color'

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: '2.6rem',
      fontWeight: 700,
      lineHeight: 1.1,
      margin: '0.4em 0em'
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 700,
      margin: '0.8em 0em 0.35em 0em',
      lineHeight: 1.3
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 200,
      lineHeight: 1.2
    }
  },
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#999898'
    }
  }
})

const useStyles = makeStyles((theme) => ({
  canvas: {
    verticalAlign: 'middle',
    padding: '2em 4em',
    height: '95vh'
  },
  card: {
    background: 'transparent',
    display: 'flex',
    alignItems: 'center'
  },
  poster: {
    height: '80vh',
    minWidth: '342px',
    borderRadius: '1em'
  },
  description: {
    padding: '2.5em'
  }
}))

const fac = new FastAverageColor()

const TelevisionDescription = () => {
  const styles = useStyles()

  const { television } = useContext(TelevisionContext)

  const [tint, setTint] = useState()

  const dispatch = useDispatch()
  
  const reviews = useSelector((state) => state.reviews)
  const cast = useSelector((state) => state.cast)
  const recommended = useSelector((state) => state.recommended)
  const similar = useSelector((state) => state.similar)
  
  function fetchCredits() {
    dispatch(televisionActions.getCredits(television.id))
  }

  function fetchReviews() {
    dispatch(televisionActions.getReviews(television.id))
  }

  function fetchSimilar() {
    dispatch(televisionActions.getSimilarTelevisions(television.id))
  }

  function fetchRecommended() {
    dispatch(televisionActions.getRecommendedTelevisions(television.id))
  }

  useEffect(() => {
    fetchReviews()
    fetchSimilar()
    fetchRecommended()
    fetchCredits()
  }, [])

  fac
    .getColorAsync(`https://image.tmdb.org/t/p/w342/${television.poster_path}`)
    .then(function (color) {
      setTint(color.hex)
    })
    .catch(function (e) {
      console.log(e)
    })

  return (
    <ThemeProvider theme={theme}>
      <Paper
        id="bg"
        square={true}
        classes={{ root: styles.canvas }}
        style={{
          backgroundSize: 'cover',
          backgroundImage: `linear-gradient(0deg, ${tint + 'cc'}, ${
            tint + 'aa'
          }),
          url(https://image.tmdb.org/t/p/original/${television.backdrop_path})`
        }}
      >
        <Card elevation={0} classes={{ root: styles.card }}>
          <CardMedia
            classes={{ root: styles.poster }}
            image={`https://image.tmdb.org/t/p/w342${television.poster_path}`}
          ></CardMedia>
          <Box classes={{ root: styles.description }}>
            <Typography variant="h2" color="primary">
              {television.name}
            </Typography>
            <Box display="flex">
              <GenreList genreId={television.genres || television.genre_ids}/>
              <Typography color="primary" style={{ margin: '0 0.3em' }}>
                &middot;
              </Typography>
              <Typography variant="body1" color="primary">
                {television.first_air_date}
              </Typography>
            </Box>
            <Typography></Typography>
            <Typography variant="h6" color="primary">
              Overview
            </Typography>
            <Typography variant="body1" color="primary">
              {television.overview}
            </Typography>
          </Box>
        </Card>
      </Paper>
      <CastList castList={cast.cast}/>
      <MayAlsoLikeSection mayAlsoLike={similar.similar} />
    </ThemeProvider>
  )
}
export { TelevisionDescription }
