import React from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  outer: {
    paddingLeft: '2em',
  },
  title: {
    fontWeight: 400,
    color: '#333333',
  },
  subTitle: {
    margin: '0',
  },
  role: {
    margin: '0',
  },
  paragraph: {
    margin: '0',
    marginBottom: '0.5em',
  },
});
/**
 * A short biography of the actor
 * @return {biography} biography box
 */
export default function Description({details}) {
  const styles = useStyles();
  return (
    <Box
      classes={{root: styles.outer}}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Typography classes={{root: styles.title}} variant="h2">
        {details?.name}
      </Typography>
      <Box classes={{root: styles.subTitle}}></Box>

      <Typography gutterBottom variant="h3">
        Biography
      </Typography>
      <Typography classes={{root: styles.paragraph}} variant="body1">
        {details?.biography}
      </Typography>
    </Box>
  );
}
