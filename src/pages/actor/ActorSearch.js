import React, { useState } from 'react'
import ActorCard from '../../components/ActorCard'
import SearchBar from '../../components/SearchBar.js'
import Navigation from '../../components/Navigation'
import Styled from 'styled-components'
import SectionTitle from '../../components/SectionTitle'
import { useGetActorByNameQuery } from '../../features/actor/actor-slice-api'

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

function ActorSearch() {
  const [searchTerm, setSerachTerm] = useState("Denzel Washington")
  const {
    data
  } = useGetActorByNameQuery(searchTerm, {
    refetchOnMountOrArgChange: true,
    skip: false,
  })

  function searchChangeHandler(event) {
    const searchTerm = event.target.value
    setSerachTerm(searchTerm)
  }

  return (
    <div>
      <Navigation
        bg="dark"
        theme="dark"
        searchBar={
          <SearchBar type="actors" onChange={searchChangeHandler} />
        }
      />
      <SectionContent>
        <SectionTitle title="Actor" />
        {data &&
          data.results.map((profile, i) => {
            return <ActorCard key={i} index={i + 1} profile={profile} />
          })}
      </SectionContent>
    </div>
  )
}

export default ActorSearch
