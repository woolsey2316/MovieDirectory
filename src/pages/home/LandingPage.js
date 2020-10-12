import React from 'react'
import Style from './Home.module.css'
import Navigation from '../../components/Navigation.js'

export default function LandingPage() {
  return (
    <div
      className={Style.landingPage}
      style={{
        background: 'linear-gradient(to top, rgba(242, 101, 34, 0.51) -18%, rgba(10, 21, 33, 0.9) 75%), url("home.jpg")',
        height: '90vh',
        backgroundSize: 'cover',
        textAlign: 'center'
      }}
    >
      <Navigation />
      <h3 className={Style.mainTitle}>Television & <br/> Movie db</h3>
      <p className={Style.subText}>
        a search engine for tv shows and films
      </p>
    </div>
  )
}
