import React from 'react'
import {
  FacebookFilled,
  YoutubeFilled,
  TwitterOutlined
} from '@ant-design/icons'
import { makeStyles } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'

const useStyles = makeStyles({
  outer: {
    float: 'right',
    fontSize: '32px',
    padding: '8px 0',
    display: 'flex'
  },
  iconWrap: {
    margin: '0 0.3rem'
  }
})

function SocialMediaQuilt() {
  const styles = useStyles()
  return (
    <Box className={styles.outer}>
      <Box classes={{root: styles.iconWrap}} style={{marginTop: '-1px'}} span={8}>
        <FacebookFilled style={{fontSize: '28px'}}/>
      </Box>
      <Box classes={{root: styles.iconWrap}} span={8}>
        <YoutubeFilled />
      </Box>
      <Box classes={{root: styles.iconWrap}} span={8}>
        <TwitterOutlined />
      </Box>
    </Box>
  )
}
export { SocialMediaQuilt }
