import React, {Component} from 'react';
import Style from './css/hometile.module.css';

class MovieCollage extends Component {
    constructor(props) {
        super(props);
        this.state={movieList : this.props.movieList, collage:[]};

        for (let i = 0; i < 2; i++) {
            let show = this.state.movieList[i];

            this.state.collage.push( 
                <div className={Style.nonExpandingContainerMinor}>
                    <div className={Style.flexGridHalves}
                    height="300px"
                    alt="poster" 
                    style={{
                        backgroundImage:`url(${show.poster_src})`,
                        backgroundSize: 'cover',
                    }}
                    onClick={this.viewMovie.bind(this)}>
                    <h3 className={Style.title} onClick={this.viewMovie.bind(this)}>{show.title}</h3>
                    </div>
                </div>
            )
        }

        let show = this.state.movieList[2]

        this.state.collage.push( 
            <div className={Style.nonExpandingContainerMajor}>
                <div className={Style.flexGridWholeRow}
                    height="90px"
                    alt="poster" 
                    style={{
                            backgroundImage:`url(${show.poster_src})`,
                            backgroundSize: 'cover',
                        }}
                    onClick={this.viewMovie.bind(this)}>
                <h3 className={Style.title} onClick={this.viewMovie.bind(this)}>{show.title}</h3>
                </div>
            </div>
        )
    }

    viewMovie() {
        console.log("Trying to view movie")
        const url = "https://www.themoviedb.org/movie/" + this.props.show.id
        window.location.href = url
    }

    render() {
        return (
            <div className={Style.movieContainer}>
            <h3 style={{marginTop:'10px'}}>In Theatres</h3>
            <div className={Style.break}></div>
            {this.state.collage}
            </div>
            
        )
    }
}

export default MovieCollage;