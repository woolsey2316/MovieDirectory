import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  sectionHeader: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  sectionArea: {
    borderLeft: '2px solid #f36522',
    color: '#fff',
    overflow: 'hidden',
    display: 'block',
    borderLeft: '2px solid #13be13',
    paddingLeft: '15px',
    borderBottom: '1px solid #182028',
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


function SectionHeading() {
  const styles = useStyles()
  return (
    <div class="container">
      <div className={styles.sectionArea}>
        <h2>Top Rating</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesettins</p>
      </div>
    </div>
  )
} export { SectionHeading }