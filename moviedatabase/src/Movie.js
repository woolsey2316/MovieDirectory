import React, { Component } from 'react';
import Rating from './Rating';
import './App.css'

class Movie extends Component {
    viewMovie() {
        console.log("Trying to view movie")
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return <div width = "50%">
        <table key={this.props.movie.id}>
            <tbody>
            <tr>
                <td>
                <img alt="poster" height="350" width="230" src ={this.props.movie.poster_src}></img>
                <Rating movie={this.props.movie}></Rating>
                </td>
                <h3 align="top">{this.props.movie.title}</h3>
                <p>{this.props.movie.vote_average} |  {this.props.movie.release_date}</p>
                <p>{this.props.movie.overview}</p>
                <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </tr>
            </tbody>
        </table>
      </div>
    }
}

export default Movie;