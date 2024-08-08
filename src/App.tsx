import { About } from './components/About'
import { Banner } from './components/Banner'
import Header from './components/Header'
import { Skills } from './components/Skills'
import { GlobalCss, Container } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <Header />
        <Banner />
        <About />
        <Skills />
      </Container>
    </>
  )
}

export default App
