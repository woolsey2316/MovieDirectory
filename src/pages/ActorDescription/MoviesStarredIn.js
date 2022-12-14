import React from 'react'
import { Row, Col } from 'antd'
import MoviePoster from '../../components/MoviePoster'

export default function MoviesStarredIn({ movies }) {
  return (
    <Row>
      {movies
        ?.filter((e, i) => i < 15)
        .map((show, index) => (
          <Col key={index}>
            <MoviePoster show={show} />
          </Col>
        ))}
    </Row>
  )
}
