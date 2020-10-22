import React, { useEffect, useContext, useState } from 'react'
import { Paper, Typography, Card, CardMedia, Box } from '@material-ui/core'
import { MovieContext } from '../../context'
import { GenreList } from '../../components/GenreList'

import MayAlsoLikeSection from '../../components/MayAlsoLikeSection'
import GallerySection from '../../containers/GallerySection'
import SimilarCollection from './SimilarCollection'
import Footer from '../../components/Footer'

import { useDispatch, useSelector } from 'react-redux'
import { movieActions } from '../../actions'

import CastList from './CastList'

import FastAverageColor from 'fast-average-color'

import { useLocation } from 'react-router-dom'

import Navigation from '../../components/Navigation'

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
    padding: '2.5em',
    textShadow: '1px 1px 5px rgba(0,0,0,0.4)'
  }
}))

const fac = new FastAverageColor()

const MovieDescription = () => {
  const styles = useStyles()

  const { movie } = useContext(MovieContext)

  const location = useLocation()

  useEffect(
    (movie) => {
      if (location.pathname.includes('/movie/')) {
        const tvId = location.pathname.split('/').slice(-1)
        dispatch(movieActions.getDetails(tvId))

        fetchMoreDetails(tvId)
      }
    },
    [location]
  )

  const [tint, setTint] = useState()

  const dispatch = useDispatch()

  const movieItem = useSelector((state) => state.movie.movie)

  const cast = useSelector((state) => state.cast)
  const similar = useSelector((state) => state.similar)
  const reviews = useSelector((state) => state.reviews)
  const recommended = useSelector((state) => state.recommended)
  const gallery = useSelector((state) => state.gallery.gallery)

  function fetchCredits(id) {
    dispatch(movieActions.getCredits(id))
  }

  function fetchReviews(id) {
    dispatch(movieActions.getReviews(id))
  }

  function fetchSimilar(id) {
    dispatch(movieActions.getSimilarMovies(id))
  }

  function fetchRecommended(id) {
    dispatch(movieActions.getRecommendedMovies(id))
  }

  function fetchGallery(id) {
    dispatch(movieActions.getImages(id))
  }

  function fetchMoreDetails(id) {
    fetchReviews(id)
    fetchSimilar(id)
    fetchRecommended(id)
    fetchCredits(id)
    fetchGallery(id)
  }

  fac
    .getColorAsync(`https://image.tmdb.org/t/p/w342/${movieItem?.poster_path}`)
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
          url(https://image.tmdb.org/t/p/original/${movieItem?.backdrop_path})`
        }}
      >
        <Navigation transparent={true} position="fixed-top" theme="dark" />
        <Card elevation={0} classes={{ root: styles.card }}>
          <CardMedia
            classes={{ root: styles.poster }}
            image={`https://image.tmdb.org/t/p/w342${movieItem?.poster_path}`}
          ></CardMedia>
          <Box classes={{ root: styles.description }}>
            <Typography variant="h2" color="primary">
              {movieItem?.title}
            </Typography>
            <Box display="flex">
              <GenreList genreId={movieItem?.genres} />
              <Typography color="primary" style={{ margin: '0 0.3em' }}>
                &middot;
              </Typography>
              <Typography variant="body1" color="primary">
                {movieItem?.release_date}
              </Typography>
            </Box>
            <Typography></Typography>
            <Typography variant="h6" color="primary">
              Overview
            </Typography>
            <Typography variant="body1" color="primary">
              {movieItem?.overview}
            </Typography>
            <Typography variant="h6" color="primary">
              Cast
            </Typography>
            {cast?.cast?.filter((e,i) => i < 4).map((person, index) => 
              <Typography style={{display: 'inline-block', marginRight: '20px'}} gutterBottom key={index} variant="body1" color="primary">
                {person.name}
              </Typography>
            )}
          </Box>
        </Card>
      </Paper>
      <CastList castList={cast.cast} />
      <MayAlsoLikeSection title="Similar Movies">
        <SimilarCollection />
      </MayAlsoLikeSection>
      <GallerySection gallery={gallery} />
      <Footer />
    </ThemeProvider>
  )
}
export { MovieDescription }
