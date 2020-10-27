import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  outer: {
    paddingLeft: '2em'
  },
  title: {
    fontWeight: 400,
    color: '#333333'
  },
  subTitle: {
    margin: '0'
  },
  role: {
    margin: '0'
  },
  paragraph: {
    margin: '0',
    marginBottom: '0.5em'
  }
})

export default function Description() {
  const styles = useStyles()
  const actor = useSelector((state) => state.actor.actor)
  return (
    <Box
      classes={{ root: styles.outer }}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Typography classes={{ root: styles.title }} variant="h2">
        {actor?.name}
      </Typography>
      <Box classes={{ root: styles.subTitle }}></Box>
      
      <Typography gutterBottom variant="h3">
        Biography
      </Typography>
      <Typography classes={{ root: styles.paragraph }} variant="body1">
        {actor?.biography}
      </Typography>
    </Box>
  )
}
