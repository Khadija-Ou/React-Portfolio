import styled from 'styled-components'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Who from './components/Who'
import Works from './components/Works'

const Container = styled.div`
  height: 100vh;
  background-color: rgb(207, 47, 116);
`
function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  )
}

export default App
