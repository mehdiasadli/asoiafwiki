import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 10rem;
    padding: 1rem;
    background-color: white;
    box-shadow: 1px 1px 10px -5px #212121;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1)
    }
`
const Img = styled.img`
  height: 100%;
  width: 40%;
  object-fit: cover;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
const Btn = styled.button`
  width: 100%;
  height: 2.5rem;
  background-color: #1C5054;
  color: white;
  &:hover {
    background-color: #dedede;
    color: #1C5054;
  }
`
const CharacterCard = ({ character }) => {
  return (
    <Container>
      <Img src={character.image || 'https://wallpaperaccess.com/full/1285952.jpg'} />
      <Info>
        <p>{character.name}</p>
        <Link to={`/character/${character.slug}`} ><Btn>View more</Btn></Link>
      </Info>
    </Container>
  )
}

export default CharacterCard