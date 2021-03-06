import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
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
  padding: 0 5%;
`
const StyledBorder = styled.div`
  background-color: #e0041d;
  content: '';
  display: block;
  height: 1px;
  width: 48px;
  margin-left: 5%;
`
export default function SectionTitle({ title }) {
  return (
    <>
      <StyledBorder />
      <Title>{title}</Title>
    </>
  )
}
