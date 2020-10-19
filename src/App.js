import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import MovieSearchContainer from './pages/movie/MovieSearchContainer'
import ActorSearchContainer from './pages/actor/ActorSearchContainer'
import TelevisionSearchContainer from './pages/tv/TelevisionSearchContainer'
import { MovieDescription } from './pages/MovieDescription'
import { TelevisionDescription } from './pages/TelevisionDescription'
import Home from './pages/home/Home'
import { AppState, MovieContextProvider } from './context'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import './App.css'

const App = () => {
  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  }

  const theme = createMuiTheme({
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      up: (key) => `@media (min-width:${breakpoints[key]}px)`
    },
    typography: {
      fontFamily: 'Lato',
      h1: {
        fontSize: '2rem',
        color: '#e8e8e9',
        margin: '1em 0em'
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
        margin: '1em 0 0.3em 0',
        color: '#e8e8e9'
      },
      h3: {
        fontSize: '1.2rem',
        marginTop: '1em'
      },
      h4: {
        fontSize: '1.3rem',
        fontWeigth: 500,
        lineHeight: 2,
        color: '#e8e8e9'
      },
      h5: {
        fontSize: '1rem',
        marginTop: '0.8em',
        fontWeight: 500,
        maxWidth: '230px',
        color: '#e8e8e9'
      },
      h6: {
        fontSize: '0.9rem',
        marginTop: '0.8em',
        fontWeight: 500,
        maxWidth: '230px',
        color: '#e8e8e9'
      },
      body1: {
        fontSize: 16,
        lineHeight: 1.2
      },
      subtitle1: {
        fontSize: 16,
        lineHeight: 1.2,
        fontFamily: `'Roboto', sans-serif`,
        fontWeight: 100
      },
      body2: {
        fontWeight: 200,
        fontSize: 16,
        lineHeight: 2
      },
      button: {
        textTransform: 'none',
        secondary: {
          main: '#ffffff'
        }
      }
    },
    palette: {
      primary: {
        main: '#e8e8e9'
      },
      secondary: {
        main: '#999898'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <Router>
          <div className="App">
            <MovieContextProvider>
              <TelevisionContextProvider>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route exact path="/home">
                    <Home />
                  </Route>
                  <Route exact path="/movie">
                    <MovieSearchContainer />
                  </Route>
                  <Route exact path="/television">
                    <TelevisionSearchContainer />
                  </Route>
                  <Route exact path="/actor">
                    <ActorSearchContainer />
                  </Route>
                  <Route path="/movie/:movieId">
                    <MovieDescription />
                  </Route>
                  <Route path="/tv/:tvId">
                    <TelevisionDescription />
                  </Route>
                </Switch>
              </TelevisionContextProvider>
            </MovieContextProvider>
          </div>
        </Router>
      </AppState>
    </ThemeProvider>
  )
}

export default App
