import React from 'react'
import { Row, Col } from 'antd'
import TelevisionPoster from '../../components/TelevisionPoster'

export default function TvShowsStarredIn({ tvShows }) {
  return (
    <Row>
      {tvShows
        ?.filter((e, i) => i < 15)
        .map((show, index) => (
          <Col key={index}>
            <TelevisionPoster show={show} />
          </Col>
        ))}
    </Row>
  )
}