import React, { Component } from 'react'
import Rating from './Rating'
import Style from '../pages/movie/Movie.module.css'

class Television extends Component {
  viewTelevision() {
    const url = 'https://www.themoviedb.org/tv/' + this.props.show.id
    window.location.href = url
  }
  render() {
    if (!this.props.show) {
      return <div />
    }
    return (
      <table width="40%" key={this.props.show.id}>
        <tbody>
          <tr>
            <td>
              <div className={Style.container}>
                <Rating show={this.props.show}></Rating>
                <img
                  className={Style.image}
                  alt="poster"
                  height="350"
                  width="230"
                  src={
                    'https://image.tmdb.org/t/p/w185/' +
                    this.props.show.poster_path
                  }
                  onClick={this.viewTelevision.bind(this)}
                />
              </div>
            </td>
            <h3
              onClick={this.viewTelevision.bind(this)}
              style={{ paddingTop: '20px', paddingLeft: '10px' }}
            >
              <span className={Style.movieTitle}>{this.props.show.name}</span>
            </h3>
            <p style={{ textAlign: 'justify' }}>{this.props.show.overview}</p>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Television
