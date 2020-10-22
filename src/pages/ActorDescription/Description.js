import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { SocialMediaQuilt } from '../../components/SocialMediaQuilt'

import { useSelector } from 'react-redux'

const useStyles = makeStyles({
  outer: {
    paddingLeft: '2em'
  },
  title: {
    textAlign: 'right',
    color: '#333333'
  },
  subTitle: {
    textAlign: 'right'
  },
  role: {
    textAlign: 'right'
  },
  paragraph: {
    textAlign: 'right'
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
      alignItems="flex-end"
    >
      <Typography classes={{ root: styles.title }} variant="h2">
        {actor?.name}
      </Typography>
      <Box classes={{ root: styles.subTitle }}></Box>
      <Typography classes={{ root: styles.role }} variant="body1">
        {actor?.known_for_department}
      </Typography>
      <SocialMediaQuilt />
      <Typography classes={{ root: styles.paragraph }} variant="h3">
        Biography
      </Typography>
      <Typography classes={{ root: styles.paragraph }} variant="body1">
        {actor?.biography}
      </Typography>
    </Box>
  )
}
