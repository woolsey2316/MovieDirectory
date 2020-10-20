import React from 'react'
import styled from 'styled-components'
import ReviewContainer from './ReviewContainer'

const CollectionContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
}
`
export default function ReviewListContainer({reviews}) {
  return (
    reviews.map(review => <ReviewContainer review={review} key={index}/>)
  )
}