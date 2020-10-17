import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'
import CastListCollection from './CastListCollection'

const CastListSection = styled(Box)`
  background-color: #f2f2f2;
  padding-top: 34px;
  position: relative;
  padding: 34px 10%;
`

const CastListTitle = styled.h2`
  font-size: 2.313rem;
  letter-spacing: -0.3px;
  color: #1a1d24;
  line-height: 1.2em;
  font-weight: 700;
  font-style: normal;
  line-height: 1.05em;
  text-decoration: none;
  text-transform: uppercase;
  margin: 34px 0;
`

const StyledBorder = styled.div`
  background-color: #e0041d;
  content: '';
  display: block;
  height: 1px;
  width: 48px;
`

export default function CastList({castList}) {
  return (
    <>
      <CastListSection>
        <StyledBorder/>
        <CastListTitle>Cast List</CastListTitle>
        <CastListCollection castList={castList}/>
      </CastListSection>
    </>
  )
}