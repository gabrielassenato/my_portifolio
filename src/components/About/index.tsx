import { Card, Text, Picture, Overlay } from './styles'
import graduated from '../../assets/graduated.png'
import study from '../../assets/study.png'
import soso from '../../assets/soso.png'
import seeMore from '../../assets/add.png'
import play from '../../assets/play.png'
import { Button } from '../../styles'

export const About = () => (
  <Card id="about">
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
        Sou um desenvolvedor com experiência em <span>HTML</span>,{' '}
        <span>CSS</span>, <span>Bootstrap</span> e <span>JavaScript</span>.
        Utilizo <span>React</span> e <span>JQuery</span>, com conhecimento em{' '}
        <span>Vue</span>, <span>TypeScript</span>, <span>C</span> e
        pré-processadores como <span>SASS</span>. Uso ferramentas como{' '}
        <span>Grunt</span>, <span>Gulp</span>, <span>Babel</span>, além de{' '}
        <span>Node</span> e <span>Git</span> para gerenciar projetos. Estou
        sempre buscando <span>aprimorar minhas habilidades</span> e me manter{' '}
        <span>atualizado</span> com as tendências do mercado.{' '}
      </p>
      <Button>
        Saiba mais <img src={seeMore} alt="" />
      </Button>
    </Text>
    <Picture>
      <Overlay>
        <img src={play} alt="" />
      </Overlay>
    </Picture>
  </Card>
)
