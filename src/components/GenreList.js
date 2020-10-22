import React from 'react'
import { Typography, Box } from '@material-ui/core'

function GenreList({ genreId }) {
  return (
    <>
      {genreId
        ?.filter((elem, index) => index < genreId.length - 1)
        .map((genre, index) => (
          <Box display="flex" alignItems="center" key={index}>
            <Typography color="primary" style={{ margin: '0 0.4em' }}>
              {genre.name}
            </Typography>
            <Typography color="primary" style={{ margin: '0 0.4em' }}>
              /
            </Typography>
          </Box>
        ))}
      <Typography color="primary" style={{ margin: '0 0.1em' }}>
        {genreId?.slice(-1)[0]?.name}
      </Typography>
    </>
  )
}
export { GenreList }
