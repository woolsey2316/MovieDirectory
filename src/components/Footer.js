import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

import FacebookIcon from '@material-ui/icons/Facebook'
import PinterestIcon from '@material-ui/icons/Pinterest'
import TwitterIcon from '@material-ui/icons/Twitter'
import YouTubeIcon from '@material-ui/icons/YouTube'

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
    '&:hover, &:focus': {
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
    height: '100%'
  },
  icon :{
    color: 'white',
    cursor: 'pointer',
    fontSize: '25px',
    
  },
  iconBox: {
    width: '2.5em',
    height: '2.5em',
    borderRadius: '2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    WebkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
    '&:hover, &:focus': {
      backgroundColor: '#1e1e1e' 
    }
  },
  iconContainer: {
    margin: "0 auto",
    display: 'flex',
    justifyContent: "center"
  }
}))

export default function Footer() {
  const styles = useStyles()
  return (
    <Box
      classes={{ root: styles.outer }}
      bgcolor="#000"
    >
      <div className={styles.iconContainer}>
        <div className={styles.iconBox}>
          <FacebookIcon classes={{ root: styles.icon}} />
        </div>
        <div className={styles.iconBox}>
          <PinterestIcon classes={{ root: styles.icon}} />
        </div>
        <div className={styles.iconBox}>
          <TwitterIcon classes={{ root: styles.icon}} />
        </div>
        <div className={styles.iconBox}>
          <YouTubeIcon classes={{ root: styles.icon}} />
        </div>
      </div>
      {/* <div classes={{ root: styles.movieCategory }}>
        <div>
          <h2>
            <span className={styles.title}>Movie Category</span>
            <div className={styles.underline}></div>
          </h2>
          <div>
            <ul className={styles.ul}>
              <li>
                <a className={styles.a} href="/movie">
                  Movies
                </a>
              </li>
              <li>
                <a className={styles.a} href="/television">
                  TvShows
                </a>
              </li>
              <li>
                <a className={styles.a} href="/home">
                  Upcoming Movies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div classes={{ root: styles.movieCategory }}>
          <h2>
            <span className={styles.title}>Television Category</span>
            <div className={styles.underline}></div>
          </h2>
          <div>
            <ul className={styles.ul}>
              <li>
                <a className={styles.a} href="/home">
                  Hot Collection
                </a>
              </li>
              <li>
                <a className={styles.a} href="/home">
                  Upcoming Television
                </a>
              </li>
              <li>
                <a className={styles.a} href="/movie">
                  All Tv Shows
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>
          <style type="text/css">
            {`
            ::placeholder  {
              color: rgba(255,255,255,.5)
            }
            `}
          </style>
          <div>
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
      </div> */}
    </Box>
  )
}
