import React, { Component } from 'react'
import Style from './HomeTile.module.css'

class Tile extends Component {
  constructor(props) {
    super(props)
    this.viewShow = this.viewShow.bind(this)
  }

  viewShow = (event) => {
    console.log('Trying to view tv show')
    const url = 'https://www.themoviedb.org/tv/' + this.props.show.id
    window.location.href = url
  }
  render() {
    return (
      <div
        className={
          this.props.type === 'main'
            ? Style.nonExpandingContainerMajor
            : Style.nonExpandingContainerMinor
        }
        onClick={this.viewShow}
      >
        <div
          className={
            this.props.type === 'main'
              ? Style.flexGridWholeRow
              : Style.flexGridHalves
          }
          style={{
            backgroundImage: `url(${this.props.show.poster_src})`,
            backgroundRepeat: 'no-repeat'
          }}
        >
          <h3 className={Style.title} onClick={this.viewShow}>
            {this.props.showType === 'movie'
              ? this.props.show.title
              : this.props.show.name}
          </h3>
        </div>
      </div>
    )
  }
}

export default Tile
