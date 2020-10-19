import React from 'react'
import styled from 'styled-components'
import { Box, Typography } from '@material-ui/core'

const SubText = styled(Typography)`
  color: #737373;
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
  text-align: center;
`
const Heading = styled.h4`
  color: #1a1d24;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    color: #e0041d;
    cursor: pointer;
  }
`
const TextBox = styled.div`
  padding: 1.5em 1em 0.5em;
  text-align: center;
`
const Profile = styled.img`
  height: auto;
  max-width: 100%;
`
export default function CastMember({person}) {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Profile src={`https://image.tmdb.org/t/p/w185${person.profile_path}`}></Profile>
      <TextBox>
        <Heading>{person.name}</Heading>
        <SubText>{person.character}</SubText>
      </TextBox>
    </Box>
  )
}