import React from 'react'
import Navigation from '../../components/Navigation.js'
import MovieItemContent from './MovieItemContent'
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined'
import LandingPageTitle from './LandingPageTitle'

import { makeStyles } from '@material-ui/core/styles'

import { Carousel } from 'antd'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  movieItemContentWrap: {
    display: 'relative'
  },
  landingPageTitleWrap: {
    display: 'relative'
  },
  outer: {
    paddingTop: '10vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftArrow: {
    transform: 'rotate(-90deg)',
    fontSize: '2em',
    webkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      color: '#b03226',
      webkitTransition: 'all 0.4s ease-in-out',
      mozTransition: 'all 0.4s ease-in-out',
      msTransition: 'all 0.4s ease-in-out',
      oTransition: 'all 0.4s ease-in-out',
      transition: 'all 0.4s ease-in-out'
    }
  },
  rightArrow: {
    transform: 'rotate(90deg)',
    fontSize: '2em',
    webkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      color: '#b03226',
      webkitTransition: 'all 0.4s ease-in-out',
      mozTransition: 'all 0.4s ease-in-out',
      msTransition: 'all 0.4s ease-in-out',
      oTransition: 'all 0.4s ease-in-out',
      transition: 'all 0.4s ease-in-out'
    }
  }
}))

export default function LandingPage() {
  const style = useStyles()
  return (
    <>
      <Carousel
        effect="fade"
        autoplay={true}
        prevArrow={
          <NavigationOutlinedIcon classes={{ root: style.leftArrow }} />
        }
        nextArrow={
          <NavigationOutlinedIcon classes={{ root: style.rightArrow }} />
        }
      >
        <div>
          <div
            style={{
              height: '100vh',
              backgroundImage:
                'linear-gradient(to top, rgba(242, 101, 34, 0.51) -18%, rgba(10, 21, 33, 0.9) 34%), url(home.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <Navigation transparent={true} position="fixed-top" theme="dark" />
            <Box classes={{root: style.outer}}>
              <Box classes={{root: style.movieItemContentWrap}}>
                <MovieItemContent />
              </Box>
              <Box classes={{root: style.landingPageTitleWrap}}>
                <LandingPageTitle />
              </Box>
            </Box>
          </div>
        </div>
        <div>
          <div
            style={{
              height: '100vh',
              backgroundPosition: '40% 0',
              backgroundImage: 'url(author.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <Navigation transparent={true} position="fixed-top" theme="dark" />
            <Box classes={{root: style.outer}}>
              <Box classes={{root: style.movieItemContentWrap}}>
                <MovieItemContent />
              </Box>
              <Box classes={{root: style.landingPageTitleWrap}}>
                <LandingPageTitle />
              </Box>
            </Box>
          </div>
        </div>
      </Carousel>
    </>
  )
}
