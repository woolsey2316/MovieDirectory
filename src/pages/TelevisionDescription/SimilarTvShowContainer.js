import React from 'react'
import { Row, Col } from 'antd'
import TelevisionPoster from '../../components/TelevisionPoster'


export default function SimilarTvShowContainer({similar}) {
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
