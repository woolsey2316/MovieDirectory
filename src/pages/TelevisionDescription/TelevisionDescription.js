import React, { useEffect, useState } from 'react'
import { Paper, Typography, Card, CardMedia, Box } from '@material-ui/core'

import MayAlsoLikeSection from '../../components/MayAlsoLikeSection'
import SimilarTvShowContainer from './SimilarTvShowContainer'
import GallerySection from '../../containers/GallerySection'
import Footer from '../../components/Footer'

import { useDispatch, useSelector } from 'react-redux'
import { televisionActions } from '../../actions'

import { GenreList } from '../../components/GenreList'
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

const TelevisionDescription = () => {
  const styles = useStyles()

  const location = useLocation()

  useEffect(
    (movie) => {
      if (location.pathname.includes('/tv/')) {
        const tvId = location.pathname.split('/').slice(-1)
        dispatch(televisionActions.getDetails(tvId))

        fetchMoreDetails(tvId)
      }
    },
    [location]
  )

  const [tint, setTint] = useState()

  const dispatch = useDispatch()

  const tvShow = useSelector((state) => state.tvShow.tvShow)

  const credits = useSelector((state) => state.credits)
  const similar = useSelector((state) => state.similar)
  const reviews = useSelector((state) => state.reviews)
  const recommended = useSelector((state) => state.recommended)
  const gallery = useSelector((state) => state.gallery.gallery)

  function fetchCredits(id) {
    dispatch(televisionActions.getCredits(id))
  }

  function fetchReviews(id) {
    dispatch(televisionActions.getReviews(id))
  }

  function fetchSimilar(id) {
    dispatch(televisionActions.getSimilarTelevisions(id))
  }

  function fetchRecommended(id) {
    dispatch(televisionActions.getRecommendedTelevisions(id))
  }

  function fetchGallery(id) {
    dispatch(televisionActions.getImages(id))
  }

  function fetchMoreDetails(id) {
    fetchReviews(id)
    fetchSimilar(id)
    fetchRecommended(id)
    fetchCredits(id)
    fetchGallery(id)
  }

  function handleClick(e, obj) {
    const src = obj.photo.src
    window.location.href = obj.photo.src
  }

  fac
    .getColorAsync(`https://image.tmdb.org/t/p/w342/${tvShow?.poster_path}`)
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
          url(https://image.tmdb.org/t/p/original/${tvShow?.backdrop_path})`
        }}
      >
        <Navigation transparent={true} position="fixed-top" theme="dark" />
        <Card elevation={0} classes={{ root: styles.card }}>
          <CardMedia
            classes={{ root: styles.poster }}
            image={`https://image.tmdb.org/t/p/w342${tvShow?.poster_path}`}
          ></CardMedia>
          <Box classes={{ root: styles.description }}>
            <Typography variant="h2" color="primary">
              {tvShow?.name}
            </Typography>
            <Box display="flex">
              <Typography variant="body1" color="primary">
                {`${tvShow?.number_of_seasons} Seasons`}
              </Typography>
              <Typography color="primary" style={{ margin: '0 0.3em' }}>
                &middot;
              </Typography>
              <GenreList genreId={tvShow?.genres || tvShow?.genre_ids} />
              <Typography color="primary" style={{ margin: '0 0.3em' }}>
                &middot;
              </Typography>
              <Typography variant="body1" color="primary">
                {tvShow?.first_air_date}
              </Typography>
            </Box>
            <Typography></Typography>
            <Typography variant="h6" color="primary">
              Overview
            </Typography>
            <Typography variant="body1" color="primary">
              {tvShow?.overview}
            </Typography>
            <Typography variant="h6" color="primary">
              Cast
            </Typography>
            <div/>
            {credits.credits?.cast?.filter((e,i) => i < 4).map((person, index) => 
              <div key={index} style={{display: 'inline-block', marginRight: '35px'}}>
                <Typography style={{display: 'inline-block', marginRight: '35px'}} gutterBottom variant="h6" color="primary">
                  {person.name}
                </Typography>
                <Typography gutterBottom variant="body1" color="primary">
                  {person.character}
                </Typography>
              </div>
            )}
            <div/>
            {credits.credits?.crew?.filter((person, index) => 
              person.job === "Producer" || person.job === "Director" || person.job === "Screenplay")
              .map((person, index) =>
                <div key={index} style={{display: 'inline-block', marginRight: '35px'}}>
                  <Typography gutterBottom variant="h6" color="primary">
                    {person.name}
                  </Typography>
                  <Typography gutterBottom variant="body1" color="primary">
                    {person.job}
                  </Typography>
                </div>
            )}
          </Box>
        </Card>
      </Paper>
      <CastList castList={credits.credits?.cast} />
      { similar.length &&
      <MayAlsoLikeSection title="Similar Tv Shows">
        <SimilarTvShowContainer />
      </MayAlsoLikeSection>
      }
      <GallerySection onClick={handleClick} gallery={gallery} />
      <Footer />
    </ThemeProvider>
  )
}
export { TelevisionDescription }
