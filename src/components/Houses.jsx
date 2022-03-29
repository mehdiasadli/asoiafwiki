import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'    
import Pagination from '@mui/material/Pagination';
import { useWindowDimensions } from './Characters'
import HouseCard from './HouseCard'

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

const Characters = () => {
  const [ houses, setHouses ] = useState([])
  const [ params, setParams ] = useSearchParams()
  const [ pageNumber, setPageNumber ] = useState(1)
  const [ showPag, setShowPag ] = useState(true)
  const { height, width } = useWindowDimensions();


  useEffect(() => {
    const getAllHouses = async () => {
      try {
        const res = await axios.get('https://api.got.show/api/book/houses')
        setPageNumber(Math.round(res.data.length / PAGE_LIMIT))
        setHouses(res.data.splice(params.get('page') ? params.get('page') * PAGE_LIMIT : 0, PAGE_LIMIT))
      } catch (error) {
        console.log(error)
      }
    }
    getAllHouses()
  }, [ params.get('page') ])
  
  const handlePag = e => {
    console.log(e)
    setParams({ page: e.target.textContent })
  }

  return (
    <Container>
      <Wrapper>
        { houses.length > 1 ? houses.map(h => (
          <HouseCard key={h._id} house={h} />
          )) : houses ? <div>No house was found</div> : <div>Loading</div> }
      </Wrapper>
      <Pagination
        style={{ display: showPag ? 'flex' : 'none'}} 
        hidePrevButton hideNextButton 
        boundaryCount={ width > 600 ? 5 : 3 } siblingCount={ width > 600 ? 2 : 1 } 
        className='characters-pagination' 
        size={ width > 830 ? 'large' : width > 400 ? 'medium' : 'small' } shape='rounded' 
        count={pageNumber} value={params.get('page')} onChange={(e) => handlePag(e)} 
      />
    </Container>
  )
}

export default Characters