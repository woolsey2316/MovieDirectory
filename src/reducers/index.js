import { combineReducers } from 'redux'
import { movies } from './movie.reducer'
import { televisions } from './television.reducer'
import { actors } from './actor.reducer'
import { recommended } from './recommended.reducer'
import { reviews } from './reviews.reducer'
import { similar } from './similar.reducer'
import { cast } from './cast.reducer'

const rootReducer = combineReducers({
  movies,
  televisions,
  actors,
  recommended,
  reviews,
  similar,
  cast
})

export default rootReducer
