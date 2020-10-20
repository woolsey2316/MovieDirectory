import React from 'react'
import Styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'

import { useSelector } from 'react-redux'

import Gallery from 'react-photo-gallery'

const SectionContent = Styled.div`
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  font-weight: inherit;
  font-style: inherit;
  padding: 34px 5%;
  border: 0;
  outline: 0;
  background: white;
`

export default function GallerySection() {
  const gallery = useSelector((state) => state.gallery.gallery)

  const photos = gallery?.filter((elem, index) => elem.iso_639_1 === "en")
    .map(image => { return {
      src: "https://image.tmdb.org/t/p/w342" + image.file_path,
      width: 2,
      height: Math.round(2 / image.aspect_ratio )
    }})  
    
    console.log({photos})
  return(
    <SectionContent>
      <SectionTitle title="Gallery"/>
      {photos && <Gallery photos={photos}></Gallery>}
    </SectionContent>
  )
}