import React, { useContext } from 'react'
import { AppContext } from '../../context'
import { Typography } from '@material-ui/core'

function GenreList({ genreId }) {
  const { genre } = useContext(AppContext)
  console.log("genreId")
  console.log(genreId)
  return (
    <>
      {genreId
        ?.filter((elem, index) => index < genreId.length - 1)
        ?.map((elem, index) => (
          <>
            <Typography color="primary" key={elem} style={{ margin: '0 0.4em' }}>
              {genre.get.get(elem)}
            </Typography>
            <Typography color="primary" key={elem} style={{ margin: '0 0.4em' }}>
              /
            </Typography>
          </>
        ))}
      <Typography color="primary" style={{ margin: '0 0.1em' }}>
        {genre.get.get(genreId.slice(-1)[0])}
      </Typography>
    </>
  )
}
export { GenreList }
