import React from 'react'
import { Box } from '@material-ui/core'
import styled from 'styled-components'
import CastListCollection from '../../components/CastListCollection'
import SectionTitle from '../../components/SectionTitle'

const CastListSection = styled(Box)`
  background-color: #f2f2f2;
  padding-top: 34px;
  position: relative;
  padding: 34px 10%;
`
const StyledBorder = styled.div`
  background-color: #e0041d;
  content: '';
  display: block;
  height: 1px;
  width: 48px;
`
export default function CastList({ castList }) {
  return (
    <>
      <CastListSection>
        <SectionTitle title="Cast List" />
        <CastListCollection castList={castList} />
      </CastListSection>
    </>
  )
}
