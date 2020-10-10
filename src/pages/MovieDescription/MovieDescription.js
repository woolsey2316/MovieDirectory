import React, { useContext, useState } from 'react'
import { Paper, Typography, Card, CardMedia, Box } from '@material-ui/core'
import { MovieContext } from '../../context'
import Rating from '../../components/Rating'

import { useDispatch, useSelector } from 'react-redux'

import { GenreList } from './GenreList'

import FastAverageColor from 'fast-average-color';

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: '2.1rem',
      fontWeight: 700,
      lineHeight: 1.1,
      margin: '0.4em 0em',
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 700,
      margin: '1em 0em',
      lineHeight: 1.3
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 200,
      lineHeight: 1.2,
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
});

const useStyles = makeStyles((theme) => ({
  canvas: {
    verticalAlign: 'middle',
    padding: '2em 4em',
    height: '90vh'
  },
  card: {
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
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

const fac = new FastAverageColor();

const MovieDescription = () => {

  const styles = useStyles()

  const { movie } = useContext(MovieContext)

  const [tint, setTint] = useState()

  fac.getColorAsync(`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`)
    .then(function(color) {
      console.log('Average color', color)
      setTint(color.hex)
    })
    .catch(function(e) {
      console.log(e)
    })

  return (
    <ThemeProvider theme={theme}>
      <Paper
        id="bg"
        square={true}
        classes={{root: styles.canvas}}
        style={{ 
          backgroundSize: 'cover',
          background: `linear-gradient(to right, ${tint+'ff'}, ${tint+'bb'}),
          url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
      }}
      >
        <Card elevation={0} classes={{root: styles.card}}>
          <CardMedia
            classes={{root: styles.poster}}
            image={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          >
            
          </CardMedia>
          <Box classes={{root: styles.description}}>
            <Typography variant="h2" color="primary">{movie.title}</Typography>
            <Box display="flex">
              <GenreList genreId={movie.genre_ids}/>
              <Typography color="primary" style={{margin: '0 0.3em'}}>&middot;</Typography>
              <Typography variant="body1" color="primary">{movie.release_date}</Typography>
            </Box>
            <Typography></Typography>
            <Typography variant="h6" color="primary">Overview</Typography>
            <Typography variant="body1" color="primary">{movie.overview}</Typography>
          </Box>
        </Card>
      </Paper>
      <Paper>

      </Paper>
    </ThemeProvider>
  )
}
export { MovieDescription }
