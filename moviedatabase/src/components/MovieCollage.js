import React, {Component} from 'react';
import Style from '../css/hometile.module.css';
import Tile from './Tile'

class MovieCollage extends Component {
    constructor(props) {
        super(props);
        this.state={
            movieList: this.props.movieList,
            collage: []
        };

        for (let i = 0; i < 2; i++) {
            let show = this.state.movieList[i];
            this.state.collage.push( 
                <Tile show={show} type="secondary" showType="movie"/>
            )
        }

        let show = this.state.movieList[2]
        this.state.collage.push( 
            <Tile show={show} type="main" showType="movie"/>
        )
    }

    viewMovie() {
        console.log('Trying to view movie')
        const url = 'https://www.themoviedb.org/movie/' + this.props.show.id
        window.location.href = url
    }

    render() {
        return (
            <div className={Style.movieContainer}>
            <h3 style={{marginTop:'10px',
                textAlign: 'left',
                fontSize: '1.2rem'
            }}>In Theatres</h3>
                <div className={Style.break}/>
                {this.state.collage}
            </div>
        )
    }
}

export default MovieCollage;