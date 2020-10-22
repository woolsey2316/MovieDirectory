import React from 'react'
import { Row, Col } from 'antd'
import TelevisionPoster from '../../components/TelevisionPoster'

import { useSelector } from 'react-redux'

export default function SimilarTvShowContainer() {
  const similar = useSelector((state) => state.similar.similar)
  return (
    <Row justify="space-between">
      {similar
        ?.filter((e, i) => i < similar.length)
        .map((show, index) => (
          <Col key={index}>
            <TelevisionPoster key={index} show={show} />
          </Col>
        ))}
    </Row>
  )
}
