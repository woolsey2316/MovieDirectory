import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  sliderContent: {
    fontSize: '20px',
    marginBottom: '6px',
    position: 'absolute',
    top: '40vh',
    textAlign: 'center'
  },
  delay3: {
    color: 'white',
    fontSize: '20px',
    marginBottom: '6px',
    textAlign: 'center'
  },
  delay4: {
    color: 'white',
    fontSize: '60px',
    letterSpacing: '-3px',
    wordSpacing: '-2px',
    textTransform: 'uppercase',
    margin: '9px',
  },
  oreng: {
    marginLeft: '5px',
    color: "#f36522",
  },
  delay6: {
    color: 'white',
    fontSize: '18px',
    padding: '1px 70px',
    lineHeight: '27px',
    marginBottom: '10px',
  },
  btn: {
    fontSize: '60px',
    letterSpacing: '-3px',
    wordSpacing: '-2px',
    textTransform: 'uppercase',
    margin: '9px',
    backgroundColor: '#f36522'
  }
}))

export default function LandingPageTitle() {
  const styles = useStyles()
  return (
    <div className={styles.sliderContent}>
      <h3 className={styles.delay3} >
        Welcome to Our movie site
      </h3>
      <h2 className={styles.delay4} >
        Our special<span className={styles.oreng}> Movies</span>
      </h2>
      <h3 className={styles.delay6} >
        Millions of movies, TV shows and people to discover. Explore now.
      </h3>
    </div>
  )
}
