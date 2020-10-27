import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { actorActions } from '../../actions'

import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ProfileImage } from './ProfileImage'
import Description from './Description'

import MoviesStarredIn from './MoviesStarredIn'
import TvShowsStarredIn from './TvShowsStarredIn'

import MayAlsoLikeSection from '../../components/MayAlsoLikeSection'
import GallerySection from '../../containers/GallerySection'

const useStyles = makeStyles({
  outer: {
    padding: '2em 5%'
  },
  title: {
    textAlign: 'left',
    color: '#333333'
  },
  subTitle: {
    textAlign: 'left'
  },
  role: {
    textAlign: 'left'
  },
  paragraph: {
    textAlign: 'left'
  }
})

function ActorDescription() {
  const styles = useStyles()

  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(
    (movie) => {
      if (location.pathname.includes('/actor/')) {
        const actorId = location.pathname.split('/').slice(-1)
        dispatch(actorActions.getDetails(actorId))
        dispatch(actorActions.getImages(actorId))
        dispatch(actorActions.getMovieCredits(actorId))
        dispatch(actorActions.getTelevisionCredits(actorId))
      }
    },
    [location]
  )

  const actor = useSelector((state) => state.actor.actor)

  return (
    <>
      <Box
        classes={{ root: styles.outer }}
        display="flex"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <ProfileImage url={actor?.profile_src} />
        <Description />
      </Box>
      {actor?.movies?.cast.length &&
      <MayAlsoLikeSection title={`${actor?.name} Movies`}>
        <MoviesStarredIn movies={actor?.movies?.cast} />
      </MayAlsoLikeSection>
      }
      {actor?.tvShows?.cast.length &&
      <MayAlsoLikeSection title={`${actor?.name} TvShows`}>
        <TvShowsStarredIn tvShows={actor?.tvShows?.cast} />
      </MayAlsoLikeSection>
      }
      <GallerySection gallery={actor?.images?.profiles} />
    </>
  )
}
export { ActorDescription }
