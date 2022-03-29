import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 3.5rem;
  width: 100%;
  background-color: white;
  box-shadow: 1px 1px 10px -5px #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    justify-content: center;
  }
`
const Title = styled.h2`
    color: #1C5054;
    @media (max-width: 600px) {
      display: none;
    }
`
const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`
const NavLink = styled.span`
    width: 8rem;
    height: 3.5rem;
    color: #1C5054;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: #1C5054;
        color: white;
    }
    @media (max-width: 600px) {
      width: 7rem;
    }
    @media (max-width: 550px) {
      width: 6rem;
      font-size: 0.9rem;
    }
    @media (max-width: 330px) {
      width: 5rem;
      font-size: 0.8rem;
    }
`
const Navbar = () => {
  return (
      <Container>
          <Link to='/' ><Title>WOSIF</Title></Link>
          <NavLinks>
              <Link to='/' ><NavLink>Home</NavLink></Link>
              <Link to='/characters' ><NavLink>Characters</NavLink></Link>
              <Link to='/houses' ><NavLink>Houses</NavLink></Link>
          </NavLinks>
      </Container>
  )
}

export default Navbar