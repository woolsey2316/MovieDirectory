import React, { Component } from 'react';

class Rating extends Component 
{
    render() {
        return <div style={{zIndex:1, background ="white"}} >
            <img alt="likes" src= "heart_icon.svg" style={{align:"center"}}></img>
            <p align="center">{this.props.movie.vote_average + "%"}</p>
            <p align="center">{this.props.movie.vote_count}</p>

        </div>
    }
}

export default Rating;