import React, { View, Component } from 'react';
import Rating from './Rating';
import './App.css'

class Movie extends Component {
    viewMovie() {
        console.log("Trying to view movie")
        const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url
    }
    render() {
        return <View style={{flex: 1, flexDirection: 'column'}} width = "50%">
        <table width ="40%" key={this.props.movie.id}>
            <tbody>
            <tr>
                <td>
                <img alt="poster" height="350" width="230" src ={this.props.movie.poster_src}></img>
                <Rating movie={this.props.movie}></Rating>
                </td>
                <h3 align="top">{this.props.movie.title}</h3>
                <p>{this.props.movie.vote_average} |  {this.props.movie.release_date}</p>
                <p style={{textAlign: 'justify'}}>{this.props.movie.overview}</p>
                <input type="button" onClick={this.viewMovie.bind(this)} value="View"/>
            </tr>
            </tbody>
        </table>
      </View>
    }
}

export default Movie;