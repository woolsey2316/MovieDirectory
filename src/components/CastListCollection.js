import React from 'react'
import { Row, Col } from 'antd'
import CastMember from '../pages/MovieDescription/CastMember'

export default function CastListCollection({ castList }) {
  return (
    <>
      {castList
        ?.filter((e, i) => i < 10)
        .map(
          (person, rowIndex) =>
            rowIndex % 5 === 0 && (
              <Row justify="space-between" key={rowIndex}>
                {castList.map(
                  (person, index) =>
                    index >= rowIndex &&
                    index < rowIndex + 5 && (
                      <Col span={4} key={index + rowIndex * index}>
                        <CastMember person={person} />
                      </Col>
                    )
                )}
              </Row>
            )
        )}
    </>
  )
}
