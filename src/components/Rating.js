import React from 'react'
import heart from '../assets/images/heart_icon.svg'
import person from '../assets/images/person_icon.svg'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  ratingIcon: {
    backgroundColor: 'white',
    boxShadow: '1px 2px 5px 1px #3332328a',
    borderRadius: '10px',
    width: '75px',
    height: '65px',
    zIndex: '1000',
    position: 'absolute',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '10px',
  },
  heart: {
    margin: '5px 3px',
    maxWidth: '27%',
    maxHeight: '27%',
  },
  score: {
    fontSize: '16px',
    fontFamily: "'Open Sans', sans-serif",
    fontWeight: '600',
    color: '#3a3b45',
    margin: '1px 0px 0px 0px',
  },
  break: {
    flexBasis: '100%',
    height: '0',
  },
  person: {
    marginTop: '2px',
    marginRight: '2px',
    maxWidth: '23%',
    maxHeight: '23%',
    fill: '#5e595a',
  },
  voteCount: {
    color: '#797985',
    margin: '0',
    fontSize: '12px',
  }
})
const Rating = ({ show }) => {
  const styles = useStyles()
  return (
    <div id="this" className={styles.ratingIcon}>
      <img className={styles.heart} alt="likes" src={heart} />
      <p className={styles.score}>{(show.vote_average * 10).toFixed(0) + '%'}</p>
      <div className={styles.break} />
      <img className={styles.person} alt="person" src={person} />
      <p className={styles.voteCount}>
        {show.vote_count &&
          show.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
    </div>
  )
}

export default Rating
