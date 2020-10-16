import React from 'react'
import {
  makeStyles,
  createMuiTheme,
  StylesProvider
} from '@material-ui/core/styles'
import { Box, FormHelperText } from '@material-ui/core'

import SendIcon from '@material-ui/icons/Send'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: '2.1rem',
      fontWeight: 700,
      lineHeight: 1.1,
      margin: '0.4em 0em'
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
  outer: {
    margin: '0 auto',
    padding: '2em 15px',
  },
  movieCategory: {
    width: '25%',
    float: 'left',
    position: 'relative',
    minHeight: '1px',
    padding: '0 15px'
  },
  title: {
    fontSize: '18px',
    color: '#fff',
    fontWeight: 'bold',
    position: 'relative',
    paddingBottom: '3px',
    display: 'block',
    textTransform: 'capitalize'
  },
  underline: {
    content: '',
    width: '33px',
    height: '2px',
    background: '#fff',
    left: 0,
    bottom: '-3px'
  },
  ul: {
    marginTop: '16px',
    listStyle: 'none'
  },
  a: {
    lineHeight: '33px',
    color: '#fff',
    textTransform: 'capitalize',
    fontSize: '14px',
    WebkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
    "&:hover, &:focus": {
      color: '#b03226',
      marginLeft: '7px',
      textDecoration: 'none'
    }
  },
  widget: {
    borderRadius: '10px',
    backgroundColor: '#5d6875'
  },
  orange: {
    color: '#b03226'
  },
  inputContainer: {
    position: 'relative',
    marginTop: '1em'
  },
  newsletterInput: {
    width: '100%',
    borderRadius: '100px',
    background: 'transparent',
    border: '1px solid #fff',
    padding: '7px 16px',
    height: '42px',
    color: '#fff'
  },
  newsletterButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    background: 'transparent',
    color: '#fff',
    border: 'transparent',
    borderLeft: '1px solid #fff',
    padding: '5px 10px',
    height: '100%',
    "&:hover, &:focus" : {
      WebkitTransition: 'all 0.4s ease-in-out',
      mozTransition: 'all 0.4s ease-in-out',
      msTransition: 'all 0.4s ease-in-out',
      oTransition: 'all 0.4s ease-in-out',
      transition: 'all 0.4s ease-in-out',
    }
  }
}))

export default function Footer() {
  const styles = useStyles()
  return (
    <Box classes={{ root: styles.outer }} display="flex" justifyContent="space-around" bgcolor="#182028">
      <div classes={{ root: styles.movieCategory }}>
        <div>
          <h2>
            <span className={styles.title}>Movie Category</span>
            <div className={styles.underline}></div>
          </h2>
          <div>
            <ul className={styles.ul}>
              <li>
                <a className={styles.a} href="">Movies</a>{' '}
              </li>
              <li>
                <a className={styles.a} href="">Videos</a>
              </li>
              <li>
                <a className={styles.a} href="">Actor</a>
              </li>
              <li>
                <a className={styles.a} href="">Upcoming Movies</a>
              </li>
              <li>
                <a className={styles.a} href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div classes={{ root: styles.movieCategory }}>
          <h2>
            <span className={styles.title}>Information</span>
            <div className={styles.underline}></div>
          </h2>
          <div class="ft-content">
            <ul className={styles.ul}>
              <li>
                <a className={styles.a} href="">About Us</a>{' '}
              </li>
              <li>
                <a className={styles.a} href="">Forums</a>
              </li>
              <li>
                <a className={styles.a} href="">Hot Collection</a>
              </li>
              <li>
                <a className={styles.a} href="">Upcoming Movies</a>
              </li>
              <li>
                <a className={styles.a} href="">All Movies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div class="newsletter">
            <h2>
              <span className={styles.title}>newsletter</span>
              <div className={styles.underline}></div>
            </h2>
            <div className={styles.inputContainer}>
              <input
                type="text"
                className={styles.newsletterInput}
                placeholder="Email Address"
              />
              <button className={styles.newsletterButton}>
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  )
}
