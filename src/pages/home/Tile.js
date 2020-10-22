import React, { useContext } from 'react'
import Style from './HomeTile.module.css'
import { MovieContext } from '../../context'

export default function Tile(props) {
  const { setLocalStorage, setMovieContext } = useContext(MovieContext)

  function viewShow() {
    setMovieContext(props.show)
    setLocalStorage(props.show)
    window.location.href = `/${props.showType}/${props.show.id}`
  }

  return (
    <div
      className={
        props.type === 'main'
          ? Style.nonExpandingContainerMajor
          : Style.nonExpandingContainerMinor
      }
      onClick={viewShow}
    >
      <div
        className={
          props.type === 'main' ? Style.flexGridWholeRow : Style.flexGridHalves
        }
        style={{
          backgroundImage: `url(${props.show.poster_src})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h3 className={Style.title} onClick={viewShow}>
          {props.showType === 'movie' ? props.show.title : props.show.name}
        </h3>
      </div>
    </div>
  )
}
