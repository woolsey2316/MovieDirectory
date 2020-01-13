import React, {Component} from 'react';
import Rating from './Rating';
import './App.css'
import Style from './css/movie.module.css'

class Television extends Component {
    viewTelevision() {
        console.log("Trying to view television")
        const url = "https://www.themoviedb.org/television/" + this.props.show.id
        window.location.href = url
    }
    
    render() {
        if (!this.props.show) {
            return <div/>;
        }
        return <table width ="40%" key={this.props.show.id}>
                    <tbody>
                    <tr>
                        <td>
                        <div className={Style.container}>
                            <Rating show={this.props.show}></Rating>
                            <img alt="poster" height="350" width="230" src ={this.props.show.poster_src}></img>
                        </div>
                        </td>
                        <h3 align="top">{this.props.show.title}</h3>
                        <p>{this.props.show.vote_average} |  {this.props.show.release_date}</p>
                        <p style={{textAlign: 'justify'}}>{this.props.show.overview}</p>
                        <input type="button" onClick={this.viewTelevision.bind(this)} value="View"/>
                    </tr>
                    </tbody>
                </table>
            
    }
}

export default Television;