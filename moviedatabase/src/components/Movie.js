import React, {Component} from 'react';
import Rating from './Rating';
import '../App.css'
import Style from '../css/movie.module.css'

export default class Movie extends Component {
    constructor(props) {
        super(props)
        this.display = false
    }
    viewMovie() {
        console.log('redirecting to another page')
        const url = 'https://www.themoviedb.org/movie/' + this.props.show.id
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
                                src ={'https://image.tmdb.org/t/p/w185/' + this.props.show.poster_path} 
                                style={{ backgroundRepeat: "no-repeat"}}
                                onClick={this.viewMovie.bind(this)}
                                />
                            </div>
                        </td>
                        <h3 
                          align="top" 
                          onClick={this.viewMovie.bind(this)}
                          style={{paddingTop: "20px", paddingLeft: "10px"}}
                        >
                            <span className={Style.movieTitle}>
                                {this.props.show.title}
                            </span>
                        </h3>
                        <p className={Style.date}>{this.props.show.release_date}</p>
                        <p style={{textAlign: "justify"}}>{this.props.show.overview}</p>
                    </tr>
                    </tbody>
                </table>
        )
    }
}