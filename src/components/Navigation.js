import React from 'react'
import { Menu } from 'antd'
import { Box } from '@material-ui/core'

const Navigation = ({ theme, transparent, searchBar }) => {
  function handleClick(e) {
    window.location = '/' + e.key
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      bgcolor={transparent ? 'transparent' : '#001529'}
    >
      {searchBar}
      <Menu
        mode="horizontal"
        onClick={handleClick}
        theme={theme}
        style={{ background: transparent && 'transparent', width: '100%' }}
      >
        <Menu.Item style={{ float: 'right' }} key="actor">
          Actor
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }} key="television">
          Television
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }} key="movie">
          Movie
        </Menu.Item>
        <Menu.Item style={{ float: 'right' }} key="home">
          Home
        </Menu.Item>
      </Menu>
    </Box>
  )
}

export default Navigation
