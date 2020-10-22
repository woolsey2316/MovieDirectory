import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  sectionHeader: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  sectionArea: {
    color: '#fff',
    overflow: 'hidden',
    display: 'block',
    borderLeft: '2px solid #b03226',
    paddingLeft: '15px',
    borderBottom: '1px solid #182028'
  },
  outer: {
    margin: '3em 0em'
  },
  description: {
    fontSize: '16px',
    padding: '0px 0 15px 0',
    fontWeight: '300',
    color: '#e8e8e9'
  },
  '@media (min-width: 22em)': {},
  '@media (min-width: 23em)': {},
  '@media (min-width: 25em)': {},
  '@media (min-width: 47em)': {},
  '@media (min-width: 64em)': {},
  '@media (min-width: 85em)': {},
  '@media (min-width: 110em)': {},
  '@media (min-width: 160em)': {}
})

function SectionHeading({ title, description }) {
  const styles = useStyles()
  return (
    <div className={styles.outer}>
      <div className={styles.sectionArea}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="subtitle1" className={styles.description}>
          {description}
        </Typography>
      </div>
    </div>
  )
}
export { SectionHeading }
