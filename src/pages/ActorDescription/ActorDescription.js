import React from 'react';
import {useLocation} from 'react-router-dom';

import styled from 'styled-components'
import {makeStyles} from '@material-ui/core/styles';

import {ProfileImage} from './ProfileImage';
import Description from './Description';

import MoviesStarredIn from './MoviesStarredIn';
import TvShowsStarredIn from './TvShowsStarredIn';

import MayAlsoLikeSection from '../../components/MayAlsoLikeSection';
import GallerySection from '../../containers/GallerySection';

import {
  useGetActorByIdQuery,
  useGetActorImagesByIdQuery,
  useGetMovieCreditsByIdQuery,
  useGetTelevisionCreditsByIdQuery,
} from '../../features/actor/actor-slice-api';

const Box = styled.div`
  padding: 2em 5%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const useStyles = makeStyles({
  outer: {
    padding: '2em 5%',
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  title: {
    textAlign: 'left',
    color: '#333333',
  },
  subTitle: {
    textAlign: 'left',
  },
  role: {
    textAlign: 'left',
  },
  paragraph: {
    textAlign: 'left',
  },
});
/**
 * displays an actor page listing movies and tv shows they have starred in
 * @return {JSX.Element} actor page
 */
function ActorDescription() {
  const styles = useStyles();

  const location = useLocation();
  const actorId = location.pathname.split('/').slice(-1)[0];
  const {
    data: detailsData,
  } = useGetActorByIdQuery(actorId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const {
    data: imageData,
  } = useGetActorImagesByIdQuery(actorId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const {
    data: movieCreditsData,
  } = useGetMovieCreditsByIdQuery(actorId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });
  const {
    data: tvCreditsData,
  } = useGetTelevisionCreditsByIdQuery(actorId, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });
console.log(imageData)
  return (
    <>
      <Box
        classes={{root: styles.outer}}
      >
        <ProfileImage url={detailsData?.profile_path} />
        <Description details={detailsData} />
      </Box>
      {movieCreditsData?.cast.length &&
      <MayAlsoLikeSection title={`${detailsData?.name} Movies`}>
        <MoviesStarredIn movies={movieCreditsData?.cast} />
      </MayAlsoLikeSection>
      }
      {tvCreditsData?.cast.length &&
      <MayAlsoLikeSection title={`${detailsData?.name} Tv Shows`}>
        <TvShowsStarredIn tvShows={tvCreditsData?.cast} />
      </MayAlsoLikeSection>
      }
      <GallerySection gallery={imageData?.profiles} />
    </>
  );
}
export {ActorDescription};
