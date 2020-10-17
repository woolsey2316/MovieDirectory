import React from 'react'
import {
  makeStyles
} from '@material-ui/core/styles'
import StarIcon from '@material-ui/icons/Star';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const useStyles = makeStyles((theme) => ({
  movieItemContent: {
    overflow: 'hidden',
    position: 'absolute',
    background: 'linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.2)),url(2.jpg)',
    backgroundRepeat: 'no-repeat',
    width: '360px',
    height: '471px',
    top: '10vh',
    zIndex: 1,
    "&:hover $movieCountTime": {
      marginLeft: '0px',
      webkitTransition: 'all 0.4s ease-in-out',
      mozTransition: 'all 0.4s ease-in-out',
      msTransition: 'all 0.4s ease-in-out',
      oTransition: 'all 0.4s ease-in-out',
      transition: 'all 0.4s ease-in-out',
      
    },
    "&:hover $movieItemContentCenter": {
      marginTop: '-10%',
      webkitTransition: 'all 0.4s ease-in-out',
      mozTransition: 'all 0.4s ease-in-out',
      msTransition: 'all 0.4s ease-in-out',
      oTransition: 'all 0.4s ease-in-out',
      transition: 'all 0.4s ease-in-out',
      
    },
    "&:hover $itemCatHover": {
      marginBottom: '0',
      opacity: 1,
      webkitTransition: 'all 0.4s ease-in-out',
      mozTransition: 'all 0.4s ease-in-out',
      msTransition: 'all 0.4s ease-in-out',
      oTransition: 'all 0.4s ease-in-out',
      transition: 'all 0.4s ease-in-out',
    },
    "&:hover": {
      marginLeft: '0',
      background: 'linear-gradient(to top right, rgba(16, 15, 25, 0.8) 19%, rgba(176, 50, 38, 0.21) 90%),url(2.jpg)',
      backgroundRepeat: 'no-repeat',
      
    }
  },
  hoverLeft: {
    marginLeft: '-99px',
    webkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
  },
  hoverRight: {
    marginRight: '-99px',
    webkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
  },
  movieItemContentTop: {
    overflow: 'hidden',
    paddingTop: '25px',
    
  },
  pullLeft: {
    float: 'left',
    textAlign: 'center'
  },
  movieCountTime: {
    background: '#b03226',
    padding: '6px 16px',
    display: 'block',
    borderTopRightRadius: '50px',
    borderBottomRightRadius: '50px',
    backgroundColor: '#b03226',
    color: '#fff',
    marginLeft: '-99px'
  },
  pullRight: {
    float: 'right'
  },
  movieRating: {
    marginRight: '13px',
    display: 'block',
    color: '#fff',
  },
  a: {
    textDecoration: 'none',
    outline: 'none',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    webkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
    "&:hover": {
      color: 'white',
      textDecoration: 'none',
    }
  },
  movieItemContentCenter: {
    margin: '0 auto',
    position: 'absolute',
    top: '37%',
    bottom: 'auto',
    textAlign: 'center',
    left: '0',
    right: '0',
    marginTop: '-200%',
    webkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
  },
  ul: {
    listStyle: 'none',
    color: 'white'
  },
  viewMovie: {
    display: 'inline-block',
    float: 'right'
  },
  flatIcons: {},
  flaticon: {},
  movieItemContentButtom: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: 'auto',
    paddingBottom: '20px',
  },
  movieItemTitle: {
    padding: '0 23px',
    marginBottom: '0.8em',
    color: '#fff',
    fontSize: '25px',
    display: 'inline-block',
    fontWeight: 'bold',
    lineHeight: '28px',
    textTransform: 'capitalize',
  },
  itemCat: {},
  itemCatHover: {
    marginTop: '9px',
    marginBottom: '-58px',
    opacity: 0,
    webkitTransition: 'all 0.4s ease-in-out',
    mozTransition: 'all 0.4s ease-in-out',
    msTransition: 'all 0.4s ease-in-out',
    oTransition: 'all 0.4s ease-in-out',
    transition: 'all 0.4s ease-in-out',
  },
  movieItemBeta: {
    textAlign: 'left',
    marginTop: '16px',
    paddingTop: '16px',
  },
  movieDetails: {
    display: 'inline-block',
  },
  blackBg: {
    backgroundColor: '#060f19'
  },
  leftButton: {
    borderTopLeftRadius: '0 !important',
    borderBottomLeftRadius: '0 !important'
  },
  rightButton: {
    borderTopRightRadius: '0 !important',
    borderBottomRightRadius: '0 !important'
  },
  button: {
    display : 'inline-block',
    padding: '8px 19px',
    borderRadius: '100px',
    color: '#fff',
    fontWeight: 'bold',
    border: '1px solid transparent',
    textTransform: 'capitalize',
    display: 'inline-block',
    padding: '6px 12px',
    marginBottom: '0',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.42857143',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    msTouchAction: 'manipulation',
    touchAction: 'manipulation',
    cursor: 'pointer',
    webkitUserSelect: 'none',
    mozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
    backgroundImage: 'none',
    border: '1px solid transparent',
    "&:hover": {
      color: 'white',
      textDecoration: 'none'
    }
  },
  icon: {
    color: "#b03226",
    marginRight: '4px',
    marginBottom: '3px'
  },
  playIcon: {
    color: 'white',
    fontSize: '5em'
  }
}))

export default function MovieItemContent() {
  const styles = useStyles()
  return (
    <div className={styles.movieItemContents}>
      <div className={styles.movieItemContent}>
        <div className={styles.movieItemContentTop}>
          <div className={styles.pullLeft}>
            <span className={styles.movieCountTime}>02.50.20</span>
          </div>
          <div className={styles.pullRight}>
            <div className={styles.movieRating}>
              <a className={styles.a} href=""><StarIcon classes={{root: styles.icon}}/>2/20</a>
            </div>
          </div>
        </div>
        <div className={styles.movieItemContentCenter}>
          <PlayCircleOutlineIcon classes={{root: styles.playIcon}}/>
        </div>
        <div className={styles.movieItemContentButtom}>
          <div className={styles.movieItemTitle}>
            <a className={styles.a} href="">Hurry Animate Blue Strack New Movie (2018)</a>
          </div>
          <div className={styles.itemCat}>
            <ul className={styles.ul}>
              <li><span className={styles.a}>Category : </span><a className={styles.a} href="">English Animation Movies</a></li>
            </ul>
            <div className={styles.itemCatHover}>
              <ul className={styles.ul}>
                <li><span className={styles.a}>Release : </span><a className={styles.a} href="">October 26, 2017</a></li>
                <li><span className={styles.a}>Genre : </span><a className={styles.a} href="">Action, Drama</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.movieItemBeta}>
            <div className={styles.movieDetails}>
              <a href="" className={`${styles.button} ${styles.leftButton} ${styles.blackBg}`}>details</a>
            </div>
            <div className={styles.viewMovie}>
              <a className={`${styles.button} ${styles.rightButton} ${styles.blackBg}`} href="">15k view</a>
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}