import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'
import SimilarTvShowContainer from './SimilarTvShowContainer'

const MayAlsoLikeSection = styled(Box)`
  background-color: #060f19;
  color: white;
  font-weight: 200;
  padding-top: 34px;
  position: relative;
  padding: 34px 2%;
`
const MayAlsoLikeTitle = styled.h2`
  font-size: 2.313rem;
  letter-spacing: -0.3px;
  color: white;
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
export default function MayAlsoLike({mayAlsoLike}) {
  return (
    <>
      <MayAlsoLikeSection>
        <StyledBorder/>
        <MayAlsoLikeTitle>Similar TV Shows</MayAlsoLikeTitle>
        <SimilarTvShowContainer mayAlsoLike={mayAlsoLike}/>
      </MayAlsoLikeSection>
    </>
  )
}