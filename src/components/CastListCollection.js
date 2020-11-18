import React from 'react'
import { Row, Col } from 'antd'
import CastMember from '../pages/MovieDescription/CastMember'

export default function CastListCollection({ castList }) {
  const actor = castList?.filter((e, i) => i < 10)
 
  return (
    <>
      <Row justify="space-around">
        {actor?.map(
          (person, index) =>
            index >= 0 &&
            index < actor.length/2 && (
              <Col span={4} key={index}>
                <CastMember person={person} />
              </Col>
            )
        )}
      </Row>
      <Row justify="space-around">
        {actor?.map(
          (person, index) =>
            index >= actor.length/2 &&
            index <= 10 && (
              <Col span={4} key={index}>
                <CastMember person={person} />
              </Col>
            )
        )}
      </Row>
    </>
  )
}
