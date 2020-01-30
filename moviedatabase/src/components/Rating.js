import React from 'react';
import style from '../css/rating.module.css'

var Rating = (props) => {
    return (
        <div id="this" className={style.ratingIcon} >
            <img className={style.heart} alt="likes" src= "heart_icon.svg"/>
            <p className={style.score}>
                {props.show.vote_average*10 + "%"}
            </p>
            <div className={style.break}/>
            <img className={style.person} alt="ppl" src= "person_icon.svg"/>
            <p className={style.voteCount}>
                {props.show.vote_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
        </div>
    )
}

export default Rating;