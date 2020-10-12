import { combineReducers } from 'redux'
import { movies } from './movie.reducer'
import { televisions } from './television.reducer'
import { actors } from './actor.reducer'

const rootReducer = combineReducers({
  movies,
  televisions,
  actors
})

export default rootReducer
