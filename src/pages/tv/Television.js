import React, { useContext } from 'react'
import Rating from '../../components/Rating'
import Style from '../movie/Movie.module.css'

export default function Television({ show }) {
  function viewTelevision() {
    window.location.href = `/televisions/${show.id}`
  }
  if (!show) {
    return <div />
  }
  return (
    <div className={Style.outer}>
      <div key={show.id} className={Style.container}>
        <Rating show={show}></Rating>
        <img
          className={Style.image}
          alt="poster"
          height="350"
          width="230"
          src={'https://image.tmdb.org/t/p/w185/' + show.poster_path}
          style={{ backgroundRepeat: 'no-repeat' }}
          onClick={viewTelevision}
        />
      </div>
      <div className={Style.description}>
        <h3
          align="top"
          onClick={viewTelevision}
          style={{ paddingTop: '20px', paddingLeft: '10px' }}
        >
          <span className={Style.movieTitle}>{show.name}</span>
        </h3>
        <p className={Style.date}>{show.first_air_date}</p>
        <p style={{ textAlign: 'justify' }}>{show.overview}</p>
      </div>
    </div>
  )
}
