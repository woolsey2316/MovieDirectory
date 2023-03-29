import React from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Person from '../pages/MovieDescription/Person'

const useStyles = makeStyles({
  outer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  personWrap: {
    margin: '1rem'
  }
})
export default function ListCollection({ list, limit }) {
  const styles = useStyles()
  const person = list?.filter((e, i) => i < limit)
 
  return (
    <>
      <Box classes={{root: styles.outer}}>
        {person?.map(
          (person, index) =>(
              <Box classes={{root: styles.personWrap}} key={index}>
                <Person person={person} />
              </Box>
            )
        )}
      </Box>
    </>
  )
}
