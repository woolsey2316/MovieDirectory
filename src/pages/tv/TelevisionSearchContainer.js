import React from 'react'

import { connect } from 'react-redux'

import { searchActions } from '../../actions'

import TelevisionSearch from './TelevisionSearch'

const mapStateToProps = (state) => ({ televisions: state.televisions })

const mapDispatchToProps = (dispatch) => ({
  searchTelevision: (search) => dispatch(searchActions.getTelevision(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(TelevisionSearch)
