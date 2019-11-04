import React, { Component } from 'react';

class Rating extends Component 
{
    render() {
        return <div style={{zIndex:1}}>
            <img alt="likes" src= "heart_icon.svg" align= "left"></img>
            <p>{this.props.movie.vote_average + "%"}</p>
            <p>{this.props.movie.vote_count}</p>

        </div>
    }
}

export default Rating;