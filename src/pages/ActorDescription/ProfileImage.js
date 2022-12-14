import React from 'react'
import img from '../../assets/images/profiledefault.png'
import { SocialMediaQuilt } from '../../components/SocialMediaQuilt'

function ProfileImage({url}) {
  return (
    <div>
      <img
        style={{ minWidth: '342px', borderRadius: '4px' }}
        src={url ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2${url}` : img}
        alt="actor profile"
      />
      <SocialMediaQuilt />
    </div>
  )
}
export { ProfileImage }
