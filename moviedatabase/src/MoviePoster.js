import React, {useState, Component} from 'react';
import Rating from './Rating';
import './App.css'
import Style from './css/movieposter.module.css'

class MoviePoster extends Component {
    constructor(props) {
        super(props)
        this.display = false
    }
    viewMovie() {
        console.log("Trying to view movie")
        const url = "https://www.themoviedb.org/movie/" + this.props.show.id
        window.location.href = url
    }

    render() {
        if (!this.props.show) {
            return <div/>;
        }
        return (
            <div className={Style.container}>
                <Rating show={this.props.show}></Rating>
                <img className={Style.image} alt="poster" height="350" width="230" src ={this.props.show.poster_src} style={{backgroundRepeat:"no-repeat"}}></img>
                <p className={Style.releaseDate}>{this.props.show.release_date}</p>
                <h3 className={Style.movieTitle} align="top" onClick={this.viewMovie.bind(this)} >{this.props.show.title}</h3>
            
            </div>
        )
                    
            
    }
}

export default MoviePoster;