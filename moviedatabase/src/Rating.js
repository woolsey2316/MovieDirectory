import React, { Component } from 'react';
import style from './css/rating.module.css'

class Rating extends Component 
{
    render() {
        return <div id='this' className={style.ratingIcon} >
            <img className={style.heart} alt="likes" src= "heart_icon.svg"></img>
            <p className={style.score}>{this.props.show.vote_average*10 + "%"}</p>
            <div className={style.break}></div>
            <img className={style.person} alt="ppl" src= "person_icon.svg"></img>
            <p className={style.voteCount}>{this.props.show.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        </div>
    }
}

export default Rating;