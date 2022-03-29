import styled from 'styled-components'
import Houses from '../components/Houses'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
  height: 100%;
  width: 100%;
`
const HousesPage = () => {
  return (
    <Container>
        <Navbar />
        <Houses />
        <Footer />
    </Container>
  )
}

export default HousesPage