import styled from 'styled-components'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import axios from 'axios'

// import Characters from '../components/Characters'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`
  height: 100%;
  width: 100%;
`
const Wrapper = styled.div`
  width: 100%;
  background-color: aliceblue;
  padding: 1rem;
  display: flex;
  gap: 1rem;
  box-shadow: 1px 1px 10px -5px #212121;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
const Img = styled.img`
box-shadow: 1px 1px 10px -5px #212121;
object-fit: cover;
`

const HousePage = () => {
  const { id } = useParams()
  const [ house, setHouse ] = useState()

  useEffect(() => {
    const getHouse = async () => {
      try {
        const res = await axios.get(`https://api.got.show/api/book/houses`)
        const theHouse = res.data.filter(h => h._id === id)
        setHouse(theHouse[0])
      } catch (error) {
        console.log(error)
      }
    }
    
    getHouse()
  }, [ ])
  console.log(house)
  return (
    <Container>
      <Navbar />
        { house ? (
          <Wrapper>
            { house.image && <Img src={house.image} /> }
            <Info>
            <h1>{house.name}</h1>
            { house.currentLord && <p>Current Lord: {house.currentLord}</p> }
            { house.heir && <p>Heir: {house.heir}</p> }
            { house.region && <p>Region: {house.region}</p> }
            { house.seat && <p>Seat: {house.seat}</p> }
            { house.words && <p>Words: {house.words}</p> }
            { house.coatOfArms && <p>Coat of Arms: {house.coatOfArms}</p> }
            </Info>
          </Wrapper>
        ) : <div>Loading...</div> }
      <Footer />
    </Container>
  )
}

export default HousePage