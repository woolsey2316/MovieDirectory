import React from 'react'
import Navigation from '../../components/Navigation.js'
import Carousel from 'react-bootstrap/Carousel'
import MovieItemContent from './MovieItemContent'
import NavigationOutlinedIcon from '@material-ui/icons/NavigationOutlined'
import LandingPageTitle from './LandingPageTitle'

import { makeStyles } from '@material-ui/core/styles'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const useStyles = makeStyles((theme) => ({
  leftArrow: { 
    transform: 'rotate(-90deg)', 
    fontSize: '2em',
    webkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
    "&:hover": {
      color: '#b03226',
      webkitTransition: 'all 0.4s ease-in-out',
      mozTransition: 'all 0.4s ease-in-out',
      msTransition: 'all 0.4s ease-in-out',
      oTransition: 'all 0.4s ease-in-out',
      transition: 'all 0.4s ease-in-out',
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
    "&:hover": {
      color: '#b03226',
      webkitTransition: 'all 0.4s ease-in-out',
      mozTransition: 'all 0.4s ease-in-out',
      msTransition: 'all 0.4s ease-in-out',
      oTransition: 'all 0.4s ease-in-out',
      transition: 'all 0.4s ease-in-out',
    }  
  }
}))

export default function LandingPage() {
  const style = useStyles()
  return (
    <>
      
      <Carousel 
        pause="hover" 
        prevIcon={<NavigationOutlinedIcon classes={{root: style.leftArrow}}/>} 
        nextIcon={<NavigationOutlinedIcon classes={{root: style.rightArrow}}/>} 
        interval={50000000}>
        <Carousel.Item>
          <div
            style={{
              height: '100vh',
              backgroundPosition: '-200px 0',
              backgroundImage:
                'linear-gradient(to top, rgba(242, 101, 34, 0.51) -18%, rgba(10, 21, 33, 0.9) 34%), url(home.jpg)'
            }}
          >
            <Navigation position="fixed-top" theme="transparent" />
            <Container>
              <Row className="flex-row align-items-center">
                <Col sm={4}><MovieItemContent/></Col>
                <Col sm={8}><LandingPageTitle/></Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div
            style={{
              height: '100vh',
              backgroundPosition: '40% 0',
              backgroundImage: 'url(author.jpg)'
            }}
          >
            <Navigation position="fixed-top" theme="transparent" />
            <Container>
              <Row className="flex-row align-items-center">
                <Col sm={4}><MovieItemContent/></Col>
                <Col sm={8}><LandingPageTitle/></Col>
              </Row>
            </Container>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
