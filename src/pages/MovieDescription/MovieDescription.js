import React, { useState } from 'react'
import { Paper, Typography, Card, CardMedia, Box } from '@material-ui/core'
import { GenreList } from '../../components/GenreList'

import MayAlsoLikeSection from '../../components/MayAlsoLikeSection'
import GallerySection from '../../containers/GallerySection'
import SimilarCollection from './SimilarCollection'
import Footer from '../../components/Footer'

import ListOfPeople from '../../components/ListOfPeople'

import FastAverageColor from 'fast-average-color'

import { useLocation } from 'react-router-dom'

import Navigation from '../../components/Navigation'

import {
  makeStyles,
  ThemeProvider,
  createTheme
} from '@material-ui/core/styles'

import {
  useGetMovieCreditsQuery,
  useGetSimilarMovieQuery,
  useGetMovieDetailsQuery,
  useGetMovieGalleryQuery
} from '../../features/movie/movie-slice-api'


const theme = createTheme({
  typography: {
    h2: {
      fontSize: '2.6rem',
      fontWeight: 700,
      lineHeight: 1.1,
      margin: '0.4em 0em'
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 700,
      lineHeight: 1.5,
      color: '#e8e8e9'
    },
    h6: {
      fontSize: '1.1rem',
      fontWeight: 700,
      margin: '0.8em 0em 0.35em 0em',
      lineHeight: 1
    },
    body1: {
      fontSize: '0.9rem',
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
    height: '600px',
    minWidth: '342px',
    borderRadius: '1em'
  },
  description: {
    padding: '2.5em',
    textShadow: '1px 1px 5px rgba(0,0,0,0.4)'
  },
  genreDetails: {
    marginBottom: '1em',
    paddingLeft: '0'
  }
}))

const fac = new FastAverageColor()

const MovieDescription = () => {
  const styles = useStyles()
  const location = useLocation()

  const movieId = location.pathname.split('/').slice(-1)[0]
  const {
    data: movieItem,
  } = useGetMovieDetailsQuery(movieId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const {
    data: credits,
  } = useGetMovieCreditsQuery(movieId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const {
    data: similar,
  } = useGetSimilarMovieQuery(movieId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const {
    data: gallery,
  } = useGetMovieGalleryQuery(movieId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  const [tint, setTint] = useState()

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
          backgroundImage: `linear-gradient(0deg, ${tint + 'ee'}, ${
            tint + 'dd'
          }),
          url(https://image.tmdb.org/t/p/original/${movieItem?.backdrop_path})`
        }}
      >
        <Navigation transparent={true} position="fixed-top" theme="dark" />
        <Card elevation={0} classes={{ root: styles.card }}>
          <CardMedia
            classes={{ root: styles.poster }}
            image={`https://image.tmdb.org/t/p/w342${movieItem?.poster_path}`}
          />
          <Box classes={{ root: styles.description }}>
            <Typography variant="h3" color="primary">
              {movieItem?.title}
            </Typography>
            <Box display="flex" classes={{ root: styles.genreDetails }}>
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
            <Typography variant="body1" gutterBottom color="primary">
              {movieItem?.overview}
            </Typography>
            <div/>
            <Typography variant="h6" color="primary">
              Cast
            </Typography>
            {credits?.cast?.filter((e,i) => i < 4).map((person, index) => 
              <div key={index} style={{display: 'inline-block', marginRight: '35px'}}>
                <Typography style={{display: 'inline-block', marginRight: '35px'}} gutterBottom variant="h6" color="primary">
                  {person.name}
                </Typography>
                <Typography gutterBottom variant="body1" color="primary">
                  {person.character}
                </Typography>
              </div>
            )}
            <Typography variant="h6" color="primary">
              Crew
            </Typography>
            {credits?.crew?.filter((person, index) => 
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
      <ListOfPeople title="Cast List" list={credits?.cast} limit={10}/>
      <ListOfPeople title="Crew List" list={credits?.crew} limit={5}/>
      { similar?.length &&
      <MayAlsoLikeSection title="Similar Movies">
        <SimilarCollection similar={similar}/>
      </MayAlsoLikeSection>
      }
      <GallerySection gallery={gallery?.posters} />
      <Footer />
    </ThemeProvider>
  )
}
export { MovieDescription }
