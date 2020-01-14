import React, {Component} from 'react';
import Rating from './Rating';
import './App.css'
import Style from './css/movie.module.css'

class Television extends Component {
    viewTelevision() {
        console.log("Trying to view television")
        const url = "https://www.themoviedb.org/tv/" + this.props.show.id
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
                        <h3 style={{margin: "20px"}} onClick={this.viewTelevision.bind(this)} >{this.props.show.name}</h3>
                        <p style={{textAlign: 'justify'}}>{this.props.show.overview}</p>
                    </tr>
                    </tbody>
                </table>
            
    }
}

export default Television;