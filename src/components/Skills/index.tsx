import {
  CarouselContainer,
  CarouselTrack,
  CarouselItem,
  Title,
  SkillsContainer,
  SkillName,
  Skill,
  SkillBar,
  SkillPer,
  SkillTooltip,
  SkillTitle,
  HardSkillContainer,
  ContainerTeste,
  SoftSkillsContainer,
  SkillComportamental,
  SkillComportamentalName
} from './styles'

import logo1 from '../../assets/logo_babel.png'
import logo2 from '../../assets/logo_bootstrap.png'
import logo3 from '../../assets/logo_css3.png'
import logo4 from '../../assets/logo_grunt.png'
import logo5 from '../../assets/logo_gulp.png'
import logo6 from '../../assets/logo_html5.png'
import logo7 from '../../assets/logo_javascript.png'
import logo8 from '../../assets/logo_less.png'
import logo9 from '../../assets/logo_nodejs.png'
import logo10 from '../../assets/logo_react.png'
import logo11 from '../../assets/logo_sass.png'
import logo12 from '../../assets/logo_vuejs.png'
import comunication from '../../assets/comunication.png'

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12
]

export const Skills = () => {
  const clonedLogos = [...logos, ...logos]

  return (
    <SkillsContainer>
      <Title>Habilidades</Title>
      <CarouselContainer>
        <CarouselTrack>
          {clonedLogos.map((logo, index) => (
            <CarouselItem key={index}>
              <img src={logo} alt={`Logo`} />
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselContainer>
      <ContainerTeste>
        <HardSkillContainer>
          <SkillTitle>Tecnicas</SkillTitle>
          <Skill>
            <SkillName>JavaScript</SkillName>
            <SkillBar>
              <SkillPer per="50%">
                <SkillTooltip>50%</SkillTooltip>
              </SkillPer>
            </SkillBar>
          </Skill>
          <Skill>
            <SkillName>CSS</SkillName>
            <SkillBar>
              <SkillPer per="90%">
                <SkillTooltip>90%</SkillTooltip>
              </SkillPer>
            </SkillBar>
          </Skill>
          <Skill>
            <SkillName>HTML</SkillName>
            <SkillBar>
              <SkillPer per="50%">
                <SkillTooltip>50%</SkillTooltip>
              </SkillPer>
            </SkillBar>
          </Skill>
          <Skill>
            <SkillName>REACT</SkillName>
            <SkillBar>
              <SkillPer per="90%">
                <SkillTooltip>90%</SkillTooltip>
              </SkillPer>
            </SkillBar>
          </Skill>
          <Skill>
            <SkillName>NODEJS</SkillName>
            <SkillBar>
              <SkillPer per="90%">
                <SkillTooltip>90%</SkillTooltip>
              </SkillPer>
            </SkillBar>
          </Skill>
          <Skill>
            <SkillName>Bootstrap</SkillName>
            <SkillBar>
              <SkillPer per="90%">
                <SkillTooltip>90%</SkillTooltip>
              </SkillPer>
            </SkillBar>
          </Skill>
          <Skill>
            <SkillName>Babel</SkillName>
            <SkillBar>
              <SkillPer per="90%">
                <SkillTooltip>90%</SkillTooltip>
              </SkillPer>
            </SkillBar>
          </Skill>
          <button>Como adquiri esses conhecimentos?</button>
        </HardSkillContainer>
        <SoftSkillsContainer>
          <h2>Comportamentais</h2>
          <p>
            Durante minha trajetória como autônomo desenvolvi algumas softskills
          </p>
          <SkillComportamental>
            <img src={comunication} alt="" />
            <div>
              <SkillComportamentalName>Comunicação: </SkillComportamentalName>
              <p>
                Como já fui vendedor e tatuador, sempre precisei me comunicar
                bem para deixar claro as qualidades e minhas ideias relacionadas
                aos projetos e também conseguir captar a idéia dos clientes.
              </p>
            </div>
          </SkillComportamental>
        </SoftSkillsContainer>
      </ContainerTeste>
    </SkillsContainer>
  )
}
