import React from 'react'

import { connect } from 'react-redux'

import { searchActions } from '../../actions'

import ActorSearch from './ActorSearch'

const mapStateToProps = (state) => ({ actors: state.actors })

const mapDispatchToProps = (dispatch) => ({
  searchActor: (search) => dispatch(searchActions.getActor(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActorSearch)
