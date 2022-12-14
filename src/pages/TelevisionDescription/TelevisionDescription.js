import React, { useState } from 'react'
import { Paper, Typography, Card, CardMedia, Box } from '@material-ui/core'

import MayAlsoLikeSection from '../../components/MayAlsoLikeSection'
import SimilarTvShowContainer from './SimilarTvShowContainer'
import GallerySection from '../../containers/GallerySection'
import Footer from '../../components/Footer'

import { GenreList } from '../../components/GenreList'
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
  useGetTelevisionByIdQuery,
  useGetTelevisionCreditsQuery,
  useGetSimilarTelevisionQuery,
  useGetTelevisionImagesQuery } from '../../features/television/tv-slice-api'

const theme = createTheme({
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
  }
}))

const fac = new FastAverageColor()

const TelevisionDescription = () => {
  const styles = useStyles()
  const location = useLocation()

  const tvId = location.pathname.split('/').slice(-1)

  const {data: tvShow} = useGetTelevisionByIdQuery(tvId,{refetchOnMountOrArgChange: true})
  const {data: credits} = useGetTelevisionCreditsQuery(tvId,{refetchOnMountOrArgChange: true})
  const {data: similar} = useGetSimilarTelevisionQuery(tvId,{refetchOnMountOrArgChange: true})
  const {data: gallery} = useGetTelevisionImagesQuery(tvId,{refetchOnMountOrArgChange: true}) 

  const [tint, setTint] = useState()

  function handleClick(e, obj) {
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
      <MayAlsoLikeSection title="Similar Tv Shows">
        <SimilarTvShowContainer similar={similar}/>
      </MayAlsoLikeSection>
      }
      <GallerySection onClick={handleClick} gallery={gallery?.posters} />
      <Footer />
    </ThemeProvider>
  )
}
export { TelevisionDescription }
