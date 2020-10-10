import React from 'react'
import style from './Rating.module.css'
import heart from '../assets/images/heart_icon.svg'
import person from '../assets/images/person_icon.svg'

const Rating = ({ show }) => {
  return (
    <div id="this" className={style.ratingIcon}>
      <img className={style.heart} alt="likes" src={heart} />
      <p className={style.score}>{show.vote_average * 10 + '%'}</p>
      <div className={style.break} />
      <img className={style.person} alt="person" src={person} />
      <p className={style.voteCount}>
        {show.vote_count && show.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </p>
    </div>
  )
}

export default Rating
