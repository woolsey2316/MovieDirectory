import React, { useContext } from 'react'
import Rating from '../../components/Rating'
import Style from './Movie.module.css'
import { MovieContext } from '../../context'

import img from '../../assets/images/default_poster.jpg'

export default function Movie({ show }) {
  const { setLocalStorage, setMovieContext } = useContext(MovieContext)
  function viewMovie() {
    setMovieContext(show)
    setLocalStorage(show)
    window.location.href = `/movies/${show.id}`
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
          src={
            show.poster_path
              ? 'https://image.tmdb.org/t/p/w185/' + show.poster_path
              : img
          }
          style={{ backgroundRepeat: 'no-repeat' }}
          onClick={viewMovie}
        />
      </div>
      <div className={Style.description}>
        <h3
          align="top"
          onClick={viewMovie}
          style={{ paddingTop: '20px', paddingLeft: '10px' }}
        >
          <span className={Style.movieTitle}>{show.title}</span>
        </h3>
        <p className={Style.date}>{show.release_date}</p>
        <p style={{ textAlign: 'justify' }}>{show.overview}</p>
      </div>
    </div>
  )
}
