import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import CastMember from './CastMember'

export default function CastListCollection({castList}) {
  return (
    <Container>
      {
        castList?.map((person, rowIndex) => rowIndex % 5 === 0 &&
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