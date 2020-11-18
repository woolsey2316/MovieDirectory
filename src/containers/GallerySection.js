import React from 'react'
import Styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'

import Gallery from 'react-photo-gallery'

const SectionContent = Styled.div`
  font-family: inherit;
  font-size: 100%;
  line-height: inherit;
  font-weight: inherit;
  font-style: inherit;
  padding: 34px 0;
  border: 0;
  outline: 0;
  background: white;
`

export default function GallerySection({ gallery }) {
  const photos = gallery
    ?.filter(
      (elem, index) => elem.iso_639_1 === 'en' || elem.iso_639_1 === null
    )
    .map((image) => {
      return {
        src: 'https://image.tmdb.org/t/p/w342' + image.file_path,
        width: 2,
        height: Math.round(2 / image.aspect_ratio)
      }
    })

  function handleClick(e, obj) {
    window.location.href =
      'https://image.tmdb.org/t/p/original/' +
      obj.photo.src.split('/').slice(-1)
  }
  return (
    <SectionContent>
      <SectionTitle title="Gallery" />
      {photos && <Gallery onClick={handleClick} photos={photos}></Gallery>}
    </SectionContent>
  )
}
