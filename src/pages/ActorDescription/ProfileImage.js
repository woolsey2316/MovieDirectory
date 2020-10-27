import React from 'react'
import img from '../../assets/images/profiledefault.png'
import { useSelector } from 'react-redux'
import { SocialMediaQuilt } from '../../components/SocialMediaQuilt'

function ProfileImage() {
  const url = useSelector((state) => state.actor.actor?.profile_path)
  return (
    <div>
      <img
        style={{ minWidth: '342px', borderRadius: '4px' }}
        src={url ? `https://image.tmdb.org/t/p/w342${url}` : img}
      />
      <SocialMediaQuilt />
    </div>
  )
}
export { ProfileImage }
