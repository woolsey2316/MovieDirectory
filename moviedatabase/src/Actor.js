import React, {Component} from 'react';
import Movie from './Movie';
import './App.css'
import Style from './css/movie.module.css'

class Actor extends Component {
    viewactor() {
        console.log("Trying to view actor")
        const url = "https://www.theactordb.org/actor/" + this.props.profile.show.id
        window.location.href = url
    }
    render() {
        return <div className="search-result-canvas">
                <img src={this.props.profile.name} alt='profile'></img>
                <p>{this.props.profile.name}</p>
                <p>{this.props.profile.popularity}</p>
                {this.props.profile.known_for.map(show => (
                    <Movie key={show.id} show={show}></Movie>
                ))}
            </div>
    }
}

export default Actor;