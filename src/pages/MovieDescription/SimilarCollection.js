import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import MoviePoster from '../../components/MoviePoster'

export default function SimilarCollection({mayAlsoLike}) {
  return (
    <>
      <style type="text/css">
        {`
        .col {
          padding: 0;
          margin: 1em 0;
        }
        `}
      </style>
      <Container fluid={true}>
        <Row>
        {
          mayAlsoLike?.filter((e, i) => i < mayAlsoLike.length ).map((show, index) => 
            <Col key={index}><MoviePoster show={show}/></Col>
          )
        }
        </Row>
      </Container>
    </>
  )
}