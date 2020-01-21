import React from 'react';
import Rating from './Rating';
import './App.css'
import Style from './css/movie.module.css'

var Television = (props) => {
    function viewTelevision(showId) {
        console.log('Trying to view television')
        const url = 'https://www.themoviedb.org/tv/' + showId
        window.location.href = url
    }
    if (!props.show) {
        return <div/>;
    }
    return (
        <table width="40%" key={props.show.id}>
            <tbody>
            <tr>
                <td>
                <div className={Style.container}>
                    <Rating show={props.show}></Rating>
                    <img 
                      alt="poster" 
                      height="350" 
                      width="230" 
                      src={props.show.poster_src}
                    />
                </div>
                </td>
                <h3 style={{ margin: "20px"}} onClick={viewTelevision(props.show.id)}>
                    {props.show.name}
                </h3>
                <p style={{ textAlign: 'justify'}}>
                    {props.show.overview}
                </p>
            </tr>
            </tbody>
        </table>
    )
}

export default Television;