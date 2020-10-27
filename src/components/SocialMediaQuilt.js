import React from 'react'
import {
  FacebookFilled,
  YoutubeFilled,
  TwitterOutlined
} from '@ant-design/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Row, Col } from 'antd'

const useStyles = makeStyles({
  outer: {
    float: 'right',
    fontSize: '32px',
    padding: '8px 0'
  }
})

function SocialMediaQuilt() {
  const style = useStyles()
  return (
    <Row className={style.outer} gutter={16}>
      <Col style={{marginTop: '-1px'}} span={8}>
        <FacebookFilled style={{fontSize: '28px'}}/>
      </Col>
      <Col span={8}>
        <YoutubeFilled />
      </Col>
      <Col span={8}>
        <TwitterOutlined />
      </Col>
    </Row>
  )
}
export { SocialMediaQuilt }
