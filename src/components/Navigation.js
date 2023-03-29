import React from 'react'
import { Box, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  link: {
    margin: '0 0.4rem',
    float: 'right',
    '&:hover': {
      textDecoration: 'none'
    }
  }
})
const Navigation = ({ theme, transparent, searchBar }) => {
  const styles = useStyles()
  function handleClick(e) {
    window.location = '/' + e.key
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={transparent ? 'transparent' : '#001529'}
    >
      {searchBar}
      <Box
        mode="horizontal"
        onClick={handleClick}
        theme={theme}
        style={{ background: transparent && 'transparent', marginLeft: 'auto' }}
      >
        <Link classes={{root: styles.link}} href="/home">
          Home
        </Link>
        <Link classes={{root: styles.link}} href="/television">
          Television
        </Link>
        <Link classes={{root: styles.link}} href="/movie">
          Movie
        </Link>
        <Link classes={{root: styles.link}} href="/actor">
          Actor
        </Link>
      </Box>
    </Box>
  )
}

export default Navigation
