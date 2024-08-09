import { About } from './components/About'
import { Banner } from './components/Banner'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import Header from './components/Header'
import { MyProjects } from './components/MyProjects'
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
        <MyProjects />
        <Contact />
      </Container>
      <Footer />
    </>
  )
}

export default App
