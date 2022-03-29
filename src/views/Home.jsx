import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Search from '../components/Search'

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  
`

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 1px 1px 10px -5px #212121;
  padding: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  min-height: 50rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`
const Info = styled.div``
const Title = styled.h1`
  margin-bottom: 1rem;
`
const ImgContainer = styled.div`
  height: 100%;
`
const Img = styled.img`
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const Home = () => {
  return (
    <Container>
        <Navbar />
        <Wrapper>
          <Info>
            <Title>World Of "a Song of Ice and Fire"</Title>
            <p>A Song of Ice and Fire (commonly abbreviated as ASoIaF) is an ongoing series of epic fantasy novels by American novelist and screenwriter George R. R. Martin. Martin began writing the series in 1991 and the first volume was published in 1996. Originally planned as a trilogy, the series now consists of five published volumes; a further two are planned. In addition there are three prequel novellas currently available, with several more being planned, and a series of novella-length excerpts from the main Ice and Fire novels.
The story of A Song of Ice and Fire takes place in a fictional world, primarily on a continent called Westeros but also on a large landmass to the east, known as Essos. Most of the characters are human but as the series progresses others are introduced, such as the cold and menacing supernatural Others from the far North and fire-breathing dragons from the East, both thought to be extinct by the humans of the story. There are three principal story lines in the series: the chronicling of a dynastic civil war for control of Westeros among several competing families; the rising threat of the Others, who dwell beyond an immense wall of ice that forms Westeros' northern border; and the ambition of Daenerys Targaryen, the exiled daughter of a king who was murdered in another civil war fifteen years before, to return to Westeros and claim her rightful throne. As the series progresses, the three story lines become increasingly interwoven and dependent upon each other.
The series is told in the third-person through the eyes of a number of point of view characters. By the end of the fourth volume, there have been seventeen such characters with multiple chapters and eight who only have one chapter apiece. Several new viewpoint characters are introduced by the conclusion of the fifth volume, setting the stage for the major events of the sixth novel.</p>
          <p>The books are known for complex characters, sudden and often violent plot twists, and political intrigue. In a genre where magic usually takes center stage, this series has a reputation for its limited and subtle use of magic, employing it as an ambiguous and often sinister background force.Finally, the novels do not (presently) center around a climactic clash between "Good" and "Evil"; plot lines have revolved primarily around political infighting and civil war, with only one or two storyline arcs even suggesting the possibility of an external threat.</p>
          </Info>
          <ImgContainer>
            <Img src='https://aidanmoher.com/blog/wp-content/uploads/2009/12/the-wall-by-marc-simonetti.jpg' />
          </ImgContainer>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Home