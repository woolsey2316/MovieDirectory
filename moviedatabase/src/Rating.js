import React, { Component } from 'react';
import style from './css/rating.module.css'

class Rating extends Component 
{
    render() {
        return <div id='this' className={style.ratingIcon} >
            <img className={style.heart} alt="likes" src= "heart_icon.svg"></img>
            <p className={style.score}>{this.props.movie.vote_average*10 + "%"}</p>
            <p className={style.voteCount}>{this.props.movie.vote_count}</p>
        </div>
    }
}

export default Rating;