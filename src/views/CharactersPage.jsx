import styled from 'styled-components'
import Characters from '../components/Characters'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
  height: 100%;
  width: 100%;
`
const CharactersPage = () => {
  return (
    <Container>
        <Navbar />
        <Characters />
        <Footer />
    </Container>
  )
}

export default CharactersPage