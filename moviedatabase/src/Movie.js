import React, {useState, Component} from 'react';
import Rating from './Rating';
import { CSSTransition } from 'react-transition-group';
import './App.css'
import Style from './css/movie.module.css'

class Movie extends Component {
    constructor(props) {
        super(props)
        this.display = false
    }
    viewMovie() {
        console.log("Trying to view movie")
        const url = "https://www.themoviedb.org/movie/" + this.props.show.id
        window.location.href = url
    }
    componentDidUpdate() {
        this.setState({display:true})
    }
    render() {
        if (!this.props.show) {
            return <div/>;
        }
        return <table key={this.props.show.id}>
                    <tbody>
                    <tr>
                        <td>
                        <div className={Style.container}>
                            <Rating show={this.props.show}></Rating>
                            <img className={Style.image} alt="poster" height="350" width="230" src ={this.props.show.poster_src} style={{backgroundRepeat:"no-repeat"}}></img>
                        </div>
                        </td>
                        <h3 className={Style.movieTitle} align="top" onMouseOver={() => this.display=true} onClick={this.viewMovie.bind(this)} >{this.props.show.title}</h3>
                        <p>{this.props.show.vote_average} |  {this.props.show.release_date}</p>
                        <p style={{textAlign: 'justify'}}>{this.props.show.overview}</p>
                    </tr>
                    </tbody>
                </table>
            
    }
}

export default Movie;