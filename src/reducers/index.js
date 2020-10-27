import { combineReducers } from 'redux'
import { movies } from './movie.reducer'
import { movie } from './movieId.reducer'
import { tvShow } from './tvShow.reducer'
import { televisions } from './television.reducer'
import { actors } from './actor.reducer'
import { actor } from './actorId.reducer'
import { recommended } from './recommended.reducer'
import { reviews } from './reviews.reducer'
import { similar } from './similar.reducer'
import { credits } from './credits.reducer'
import { gallery } from './gallery.reducer'

const rootReducer = combineReducers({
  movies,
  televisions,
  actors,
  actor,
  recommended,
  reviews,
  similar,
  credits,
  gallery,
  movie,
  tvShow
})

export default rootReducer
