import React from 'react'
import { Row, Col } from 'antd'
import Person from '../pages/MovieDescription/Person'

export default function ListCollection({ list, limit }) {
  const person = list?.filter((e, i) => i < limit)
 
  return (
    <>
      <Row justify="space-around">
        {person?.map(
          (person, index) =>(
              <Col span={4} key={index}>
                <Person person={person} />
              </Col>
            )
        )}
      </Row>
    </>
  )
}
