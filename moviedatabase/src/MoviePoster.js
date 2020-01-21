import React from 'react';
import Rating from './Rating';
import './App.css'
import Style from './css/movieposter.module.css'

var MoviePoster = (props) => {

    if (!props.show) {
        return <div/>;
    }
    return (
        <div className={Style.container}>
            <Rating show={props.show}></Rating>
            <img 
                className={Style.image} 
                alt="poster" 
                height="350" 
                width="230" 
                src={props.show.poster_src} 
                style={{backgroundRepeat:"no-repeat"}}
            >
            </img>
            <p className={Style.releaseDate}>
                {props.show.release_date}
            </p>
            <h3 
                className={Style.movieTitle} 
                align="top" 
                onClick={viewMovie(props.show.id)}
            >{props.show.title}
            </h3>
        
        </div>
    )
}

function viewMovie(showId) {
    console.log('Trying to view movie')
    const url = 'https://www.themoviedb.org/movie/' + showId
    window.location.href = url
}

export default MoviePoster;