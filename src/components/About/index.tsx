import { Card, Text, Picture } from './styles'
import graduated from '../../assets/graduated.png'
import study from '../../assets/study.png'
import soso from '../../assets/soso.png'
import seeMore from '../../assets/add.png'
import { Button } from '../../styles'

export const About = () => (
  <Card>
    <Text>
      <h2>
        Olá, eu sou Gabriel <img src={soso}></img>
      </h2>
      <ul>
        <li>
          <img src={graduated}></img>
          Análise e desenvolvimento de Sistemas
        </li>
        <li>
          <img src={study}></img>
          EBAC - Full Stack Java
        </li>
      </ul>
      <p>
        Durante minha jornada, adquiri um sólido conhecimento em{' '}
        <span>REACT</span> e <span>JavaScript</span>, além de aprender a
        utilizar <span>SASS</span>, <span>Vue</span>, <span>Grunt</span> e
        outras tecnologias. Estou sempre em busca de aprimorar minhas
        habilidades e me manter atualizado com as tendências do mercado de{' '}
        <span>desenvolvimento</span>.
      </p>
      <Button>
        Saiba mais <img src={seeMore} alt="" />
      </Button>
    </Text>
    <Picture />
  </Card>
)
