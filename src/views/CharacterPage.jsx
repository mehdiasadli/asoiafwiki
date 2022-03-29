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

const CharacterPage = () => {
  const { id: slug } = useParams()
  const [ character, setCharacter ] = useState()

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const res = await axios.get(`https://api.got.show/api/book/characters/bySlug/${slug}`)
        setCharacter(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    
    getCharacter()
  }, [ ])
  console.log(character?.titles)
  return (
    <Container>
      <Navbar />
        { character ? (
          <Wrapper>
            { character.image && <Img src={character.image} /> }
            <Info>
            <h1>{character.name}</h1>
            { character.titles[0] && <p>Titles: {character.titles.map(title => { return `[${title}] ` })}</p> }
            { character.spouse[0] && <p>Spouse: {character.spouse.map(spouse => { return `[${spouse}] ` })}</p> }
            { character.children[0] && <p>Children: {character.children.map(child => { return `[${child}] ` })}</p> }
            { character.allegiance[0] && <p>Allegiance: {character.allegiance.map(al => { return `[${al}] ` })}</p> }
            { character.culture && <p>Culture: {character.culture}</p> }
            { character.house && <p>House: {character.house}</p> }
            { character.gender && <p>Gender: {character.gender}</p> }
            { character.placeOfBirth && <p>Place of Birth: {character.placeOfBirth}</p> }
            { character.birth && <p>Birth Year: {character.birth}</p> }
            { character.alive ? <p>Life Status: Alive</p> : <p>Life Status: Dead</p> }
            </Info>
          </Wrapper>
        ) : <div>Loading...</div> }
      <Footer />
    </Container>
  )
}

export default CharacterPage