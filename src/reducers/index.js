import { combineReducers } from 'redux'
import { movies } from './movie.reducer'
import { televisions } from './television.reducer'

const rootReducer = combineReducers({
  movies,
  televisions
})

export default rootReducer