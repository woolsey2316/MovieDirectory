import React, { useContext } from 'react'
import { MovieContext } from '../../context'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  nonExpandingContainerMajor: {
    overflow: 'hidden',
    width: '100%',
    height: '350px'
  },
  nonExpandingContainerMinor: {
    overflow: 'hidden',
    height: '150px',
    width: '50%'
  },
  flexGridWholeRow: {
    width: '100%',
    height: '350px',
    display: 'table',
    backgroundSize: '100% 100%',
    transition: 'all 1s',
    '&:hover': {
      backgroundSize: '102% 102%'
    },
    '&:focus': {
      backgroundSize: '102% 102%'
    }
  },
  flexGridHalves : {
    height: '150px',
    width: '100%',
    display: 'table',
    backgroundSize: '100% 100%',
    transition: 'all 1s',
    '&:hover': {
      backgroundSize: '102% 102%'
    },
    '&:focus': {
      backgroundSize: '102% 102%'
    }
  },
  title: {
    color: '#fff',
    verticalAlign: 'bottom',
    display: 'table-cell',
    textShadow: '-1px -1px 3px black,1px 1px 3px black',
    paddingBottom: '10px',
    fontSize: '20px',
    textAlign: 'center',
  }
}))
/*
  A movie/tv tile on the homepage beneath the landing page. Just contains an image and a title
  and the image expands when hovered over
*/
export default function Tile(props) {
  const styles = useStyles()
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
          ? styles.nonExpandingContainerMajor
          : styles.nonExpandingContainerMinor
      }
      onClick={viewShow}
    >
      <div
        className={
          props.type === 'main' ? styles.flexGridWholeRow : styles.flexGridHalves
        }
        style={{
          backgroundImage: `url(${props.show.poster_src})`,
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h3 className={styles.title} onClick={viewShow}>
          {props.showType === 'movie' ? props.show.title : props.show.name}
        </h3>
      </div>
    </div>
  )
}
