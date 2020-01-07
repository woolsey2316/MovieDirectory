import React, {Component} from 'react';
import Rating from './Rating';
import './App.css'
import Style from './css/movie.module.css'

class Movie extends Component {
    viewMovie() {
        console.log("Trying to view movie")
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return <table width ="35%" key={this.props.movie.id}>
                    <tbody>
                    <tr>
                        <td>
                        <div className={Style.container}>
                            <Rating movie={this.props.movie}></Rating>
                            <img alt="poster" height="350" width="230" src ={this.props.movie.poster_src}></img>
                        </div>
                        </td>
                        <h3 align="top">{this.props.movie.title}</h3>
                        <p>{this.props.movie.vote_average} |  {this.props.movie.release_date}</p>
                        <p style={{textAlign: 'justify'}}>{this.props.movie.overview}</p>
                        <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
                    </tr>
                    </tbody>
                </table>
            
    }
}

export default Movie;