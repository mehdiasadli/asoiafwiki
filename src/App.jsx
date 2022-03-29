import React from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import CharacterPage from './views/CharacterPage'
import CharactersPage from './views/CharactersPage'
import HousesPage from './views/HousesPage'
import HousePage from './views/HousePage'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #dedede;
  padding: 1rem;
  overflow-x: hidden;
`

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/characters' element={<CharactersPage />} />
        <Route path='/houses' element={<HousesPage />} />
        <Route path='/character/:id' element={<CharacterPage />} />
        <Route path='/house/:id' element={<HousePage />} />
      </Routes>
    </Container>
  )
}

export default App