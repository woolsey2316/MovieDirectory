import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import img from '../assets/images/default_poster.jpg'

const useStyles = makeStyles({
  card: {
    maxWidth: '40vw',
    margin: '2em 1em'
  },
  cardActionArea: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  CardMedia: {
    height: '240px',
    width: '185px',
    padding: '10px',
    flex: '0 100px'
  },
  cardContent: {
    padding: '0'
  }
})

export default function ActorCard({ profile, index }) {
  const classes = useStyles()
  return (
    <Card elevation={4} display="flex" classes={{ root: classes.card }}>
      <CardActionArea classes={{ root: classes.cardActionArea }}>
        <CardMedia
          component="img"
          alt="Movie Poster"
          classes={{ root: classes.CardMedia }}
          image={
            profile.profile_path
              ? 'https://image.tmdb.org/t/p/w185/' + profile.profile_path
              : img
          }
          title="Movie Poster"
        />
        <CardContent classes={{ root: classes.cardContent }}>
          <div>
            <Typography variant="h5">
              <a href={`/actor/${profile.id}`}>
                {' '}
                {index}. {profile.name}
              </a>
            </Typography>
            <Typography paragraph variant="body1">
              Starred in :
            </Typography>
            {profile.known_for.map((elem, index) => (
              <Typography key={index}>
                <a href={`/${elem.media_type}/${elem.id}`}>
                  {' '}
                  {elem.title || elem.name}
                </a>
              </Typography>
            ))}
            <Typography paragraph variant="body1">
              Popularity: {profile.popularity}m visits
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
