import React, { Component } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const StyledSearchBar = styled.input`
  position: relative;
  width: 50%;
  min-width: 0;
  margin-bottom: 0;
  height: 2.375rem;
  border: none;
  padding-left: 1.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-top: 0.5rem !important;
  border-radius: 50rem !important;
  padding: 0.70275rem 0.937rem;
  font-size: 0.937rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
`

const StyledSearchBarContainer = styled(Box)`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #192726;
`

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollingLock: false,
      rows: [],
      type: props.type
    }
  }
  render() {
    return (
      <StyledSearchBarContainer
        id="searchHeader"
        position={this.state.scrollingLock ? 'fixed' : 'relative'}
      >
        <img
          className="appLogo"
          src="./ticket.svg"
          alt="ticket"
          href="https://www.flaticon.com/authors/freepik"
        />
        <StyledSearchBar
          placeholder="Search for Shows..."
          onChange={this.props.onChange}
        />
      </StyledSearchBarContainer>
    )
  }
}

export default SearchBar
