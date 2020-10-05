import React, { Component } from 'react'
import Tile from './Tile'
import { Typography, Box } from '@material-ui/core'

class TelevisionCollage extends Component {
  constructor(props) {
    super(props)

    this.state = { showList: this.props.showList, collage: [] }
    let show = this.state.showList[0]
    // The first television show is the main tile and occupies larger space
    this.state.collage.push(
      <Tile show={show} key={show.id} type="main" showType="tv" />
    )
    /*
        The second and third television show backdrop is the minor tile and takes up less space
        */

    for (let i = 1; i < 3; i++) {
      let show = this.state.showList[i]
      this.state.collage.push(
        <Tile show={show} key={show.id} type="secondary" showType="tv" />
      )
    }
  }
  render() {
    return (
      <Box width="500px" display="flex" flexWrap="wrap">
        <Typography variant="h2">On TV</Typography>
        {this.state.collage}
      </Box>
    )
  }
}

export default TelevisionCollage
