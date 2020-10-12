import React from 'react'

import { connect } from 'react-redux'

import { searchActions } from '../../actions'

import MovieSearch from './MovieSearch'

const mapStateToProps = (state) => ({ movies: state.movies })

const mapDispatchToProps = (dispatch) => ({
  searchMovie: (search) => dispatch(searchActions.getMovie(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieSearch)
