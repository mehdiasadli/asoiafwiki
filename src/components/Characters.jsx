import { useEffect, useState, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'    
import Pagination from '@mui/material/Pagination';

import CharacterCard from './CharacterCard'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 0.5rem;
    @media (max-width: 950px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
`
const Search = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`
const SearchForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
`
const Input = styled.input`
  width: 40%;
  height: 2rem;
  border: none;
  padding: 0 1rem;
  @media (max-width: 900px) {
    width: 70%;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`
const FormBtn = styled.button`
  height: 2rem;
  width: 8rem;
  background-color: #1C5054;
  color: white;
  &:hover {
    background-color: #dedede;
    color: #1C5054;
  }
`

const PAGE_LIMIT = 20

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Characters = () => {
  const [ characters, setCharacters ] = useState([])
  const [ allCharacters, setAllCharacters ] = useState([])
  const [ params, setParams ] = useSearchParams()
  const [ pageNumber, setPageNumber ] = useState(1)
  const [ showPag, setShowPag ] = useState(true)
  const { height, width } = useWindowDimensions();
  const inputValue = useRef()

  useEffect(() => {
    const getAllCharacters = async () => {
      try {
        const res = await axios.get('https://api.got.show/api/book/characters')
        setPageNumber(Math.round(res.data.length / PAGE_LIMIT))
        setCharacters(res.data.splice(params.get('page') ? params.get('page') * PAGE_LIMIT : 0, PAGE_LIMIT))
        setAllCharacters(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    
    getAllCharacters()
  }, [ params.get('page') ])
  
  const handleSubmit = e => {
    e.preventDefault()
    setParams({ name: inputValue.current.value })
    let showArr = allCharacters.filter(character => character.name.toLowerCase().includes(inputValue.current.value.toLowerCase()))
    setShowPag(false)
    setCharacters(showArr)
  }
  const handlePag = e => {
    console.log(e)
    setParams({ page: e.target.textContent })
  }

  return (
    <Container>
      <Search>
        <SearchForm onSubmit={e => inputValue.current.value && handleSubmit(e)} >
          <Input placeholder="Search Characters with Name" ref={inputValue} />
          <FormBtn type="submit">Search</FormBtn>
        </SearchForm>
      </Search>
      <Wrapper>
        { characters.length > 1 ? characters.map(c => (
          <CharacterCard key={c.id} character={c} />
          )) : characters ? <div>No character was found</div> : <div>Loading</div> }
      </Wrapper>
      <Pagination
        style={{ display: showPag ? 'flex' : 'none'}} 
        hidePrevButton hideNextButton 
        boundaryCount={ width > 600 ? 5 : 3 } siblingCount={ width > 600 ? 2 : 1 } 
        className='characters-pagination' 
        size={ width > 830 ? 'large' : width > 400 ? 'medium' : 'small'  } shape='rounded' 
        count={pageNumber} value={params.get('page')} onChange={(e) => handlePag(e)} 
      />
    </Container>
  )
}

export default Characters