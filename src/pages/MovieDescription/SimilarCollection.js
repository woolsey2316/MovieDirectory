import React from 'react'
import { Row, Col } from 'antd'
import MoviePoster from '../../components/MoviePoster'

import { useSelector } from 'react-redux'

export default function SimilarCollection() {
  const similar = useSelector((state) => state.similar.similar)
  return (
    <Row justify="space-between">
      {similar
        ?.filter((e, i) => i < similar.length)
        .map((show, index) => (
          <Col key={index}>
            <MoviePoster show={show} />
          </Col>
        ))}
    </Row>
  )
}
