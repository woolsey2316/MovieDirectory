import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

import img from '../../assets/images/profiledefault.png'

const SubText = styled(Typography)`
  color: #737373;
  font-size: 14px;
  font-weight: 500;
  margin: 8px 0;
`
const Heading = styled.h4`
  color: #1a1d24;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
const TextBox = styled.div`
  padding: 1.5em 0em 0.5em;
  text-align: left;
`
const Profile = styled.img`
  height: auto;
  max-width: 100%;
  cursor: pointer;
`
export default function Person({ person }) {
  function handleClick() {
    window.location.href = `../actor/${person.id}`
  }
  return (
    <>
      <Profile
        onClick={handleClick}
        src={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w185${person.profile_path}`
            : img
        }
      />
      <TextBox>
        <Heading onClick={handleClick}>{person.name}</Heading>
        <SubText>{person.character}</SubText>
      </TextBox>
    </>
  )
}
