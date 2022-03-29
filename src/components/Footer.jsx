import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { GrFacebook } from 'react-icons/gr'
import { BsReddit, BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

const Container = styled.div`
  height: 6rem;
  width: 100%;
  background-color: #1C5054;
  color: white;
  box-shadow: 1px 1px 10px -5px #212121;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  margin-top: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    height: 8rem;
    justify-content: center;
  }
`
const Title = styled.h2`
  @media (max-width: 600px) {
    display: none;
  }
`
const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`
const NavLink = styled.span`
    width: 5rem;
    height: 3.5rem;
    color: white;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        text-decoration: underline;
    }
`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`
const Email = styled.span``
const Footer = () => {
  return (
      <Container>
        <Links>
            <Title>WOSIF</Title>
            <NavLinks>
              <Link to='/' ><NavLink>Home</NavLink></Link>
              <Link to='/characters' ><NavLink>Characters</NavLink></Link>
              <Link to='/houses' ><NavLink>Houses</NavLink></Link>
            </NavLinks>
        </Links>
        <Contact>
            <Email>asadlimehdi25@gmail.com</Email>
            <Icons>
                <a href="https://www.facebook.com/asadov.mehdi" target='_blank'><GrFacebook size='18px' /></a>
                <a href="https://www.instagram.com/mehdiasadov/" target='_blank'><AiFillInstagram size='22px' /></a>
                <a href="https://github.com/mehdiasadli/" target='_blank'><BsGithub size='20px' /></a>
                <a href="https://www.reddit.com/user/mika-asadli" target='_blank'><BsReddit size='20px' /></a>
            </Icons>
        </Contact>
      </Container>
  )
}

export default Footer