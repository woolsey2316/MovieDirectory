import React, {Component} from 'react';
import Rating from './Rating';
import './App.css'
import Style from './css/movie.module.css'

export default class Movie extends Component {
    constructor(props) {
        super(props)
        this.display = false
    }
    viewMovie(showId) {
        console.log("Trying to view movie")
        const url = "https://www.themoviedb.org/movie/" + showId
        window.location.href = url
    }
    render() {
        if (!this.props.show) {
            return <div/>;
        }
        return (
            <table key={this.props.show.id}>
                    <tbody>
                    <tr>
                        <td>
                        <div className={Style.container}>
                            <Rating show={this.props.show}></Rating>
                            <img 
                              className={Style.image} 
                              alt="poster" 
                              height="350" 
                              width="230" 
                              src ={this.props.show.poster_src} 
                              style={{backgroundRepeat:"no-repeat"}}
                              />
                        </div>
                        </td>
                        <h3 
                          className={Style.movieTitle} 
                          align="top" 
                          onClick={this.viewMovie(this.props.show.id)} >{this.props.show.title}</h3>
                        <p className={Style.date}>{this.props.show.release_date}</p>
                        <p style={{textAlign: 'justify'}}>{this.props.show.overview}</p>
                    </tr>
                    </tbody>
                </table>
        )
    }
}