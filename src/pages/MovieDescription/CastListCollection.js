import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CastMember from './CastMember'

export default function CastListCollection({castList}) {
  console.log(castList)
  return (
    <Container>
      {
        castList?.filter((e,i) => i < 10).map((person, rowIndex) => rowIndex % 5 === 0 &&
        <Row>
        {
          castList.map((person, index) => 
            (index >= rowIndex && index < rowIndex + 5) &&
            <Col><CastMember person={person}/></Col>
          )
        }
        </Row>
        )
      } 
    </Container>
  )
}