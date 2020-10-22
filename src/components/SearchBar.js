import React, { Component } from 'react'
import styled from 'styled-components'
import { Box } from '@material-ui/core'

const StyledSearchBar = styled.input`
  position: relative;
  margin-bottom: 0;
  width: 100%;
  height: 2.375rem;
  padding-left: 1.5rem !important;
  padding-bottom: 0.5rem !important;
  padding-top: 0.5rem !important;
  border-radius: 50rem !important;
  padding: 0.70275rem 0.937rem;
  font-size: 0.937rem;
  font-weight: 400;
  line-height: 1.5;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background-color: transparent;
  color: #fff;
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
  min-width: 35%;
  margin-right: 5%;
  margin-left: auto;
  color: rgba(255, 255, 255, 0.5);
  width: 70%;
  padding: 10px;
`

export class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollingLock: false,
      rows: []
    }
  }

  render() {
    return (
      <>
        <style type="text/css">
          {`
          ::placeholder  {
            color: rgba(255,255,255,.5)
          }
          `}
        </style>
        <StyledSearchBarContainer
          id="searchHeader"
          position={this.state.scrollingLock ? 'fixed' : 'relative'}
        >
          <StyledSearchBar
            placeholder={`Search for ${this.props.type}...`}
            onChange={this.props.onChange}
          />
        </StyledSearchBarContainer>
      </>
    )
  }
}

export default SearchBar
