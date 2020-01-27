import React, {Component} from 'react';
import Rating from './Rating';
import './App.css'
import Style from './css/movieposter.module.css'

class MoviePoster extends Component {
    viewMovie() {
        console.log('Trying to view movie')
        const url = 'https://www.themoviedb.org/movie/' + this.props.show.id
        window.location.href = url
    }
    render() {
        if (!this.props.show) {
            return <div/>;
        }
        return (
            <div className={Style.container}>
                <Rating show={this.props.show}></Rating>
                <img 
                  className={Style.image} 
                  alt="poster" 
                  height="350" 
                  width="230" 
                  src={this.props.show.poster_src} 
                  style={{ backgroundRepeat: 'no-repeat'}}
                  onClick={this.viewMovie.bind(this)}
                >
                </img>
                <p className={Style.releaseDate}>
                    {this.props.show.release_date}
                </p>
                <h3 
                  align="top"
                  style={{textAlign:'center'}}
                  onClick={this.viewMovie.bind(this)}
                >
                    <span className={Style.movieTitle}>
                        {this.props.show.title}
                    </span>
                </h3>
            
            </div>
        )
    }
}

export default MoviePoster;