import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
})

export default function MovieCard({ show }) {
  const classes = useStyles()
  console.log('show prop for MovieCard: ')
  console.log({show})
  console.log('https://image.tmdb.org/t/p/w185/' + show.poster_path)
  return (
    <Card display="flex" className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Movie Poster"
          height="400"
          image={'https://image.tmdb.org/t/p/w185/' + show.poster_path}
          title="Movie Poster"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {show.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {show.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
