import React from 'react'
import styled from 'styled-components'

const ReviewText = styled.p`
  display: block;
  margin: 0;
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 26px;
  background-color: #1a191f;
  padding: 20px;
  letter-spacing: 0.4px;
  border: 1px solid rgba(210, 201, 255, 0.1);
  -webkit-border-radius: 6px;
  border-radius: 6px;
`

export default function ReviewText({ text }) {
  return <ReviewText>{text}</ReviewText>
}
