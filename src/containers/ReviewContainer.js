import React from 'react'
import styled from 'styled-components'
import ReviewAuthor from '../components/ReviewAuthor'
import ReviewText from '../components/ReviewText'

const Container = styled.li`
  margin-bottom: 30px;
  display: block;
`

export default function ReviewContainer({review}) {
  return (
    <Container>
      <ReviewAuthor review={review}/>
      <ReviewText text={review.text}/>
    </Container>
  )
}