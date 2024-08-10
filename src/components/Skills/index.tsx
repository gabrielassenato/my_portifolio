import {
  CarouselContainer,
  CarouselTrack,
  CarouselItem,
  Title,
  SkillsContainer,
  SkillName,
  SkillBar,
  SkillPer,
  SkillTooltip,
  SkillTitle,
  HardSkillContainer,
  SoftSkillsContainer,
  ContainerGrid,
  SkillItem
} from './styles'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Carousel } from '../CarouselSkills'

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
import { Button } from '../../styles'

const skillsComportamentais = [
  {
    title: 'Comunicação',
    description:
      'Como já fui vendedor e tatuador, sempre precisei me comunicar bem para deixar claro as qualidades e minhas ideias relacionadas aos projetos e também conseguir captar a idéia dos clientes.',
    imgSrc: comunication
  },
  {
    title: 'Visão',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet officia ullam voluptatum fugit et delectus, ratione assumenda ex similique dolorum officiis ipsa, facere ipsam minus aliquam cum natus. Quibusdam.',
    imgSrc: comunication
  },
  {
    title: 'Ética',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet officia ullam voluptatum fugit et delectus, ratione assumenda ex similique dolorum officiis ipsa, facere ipsam minus aliquam cum natus. Quibusdam.',
    imgSrc: comunication
  }
]

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
      <ContainerGrid>
        <HardSkillContainer>
          <SkillTitle>Tecnicas</SkillTitle>
          <SkillItem>
            <ContainerGrid>
              <SkillName>JavaScript</SkillName>
              <SkillBar>
                <SkillPer per="50%">
                  <SkillTooltip>50%</SkillTooltip>
                </SkillPer>
              </SkillBar>
            </ContainerGrid>
            <ContainerGrid>
              <SkillName>CSS</SkillName>
              <SkillBar>
                <SkillPer per="90%">
                  <SkillTooltip>90%</SkillTooltip>
                </SkillPer>
              </SkillBar>
            </ContainerGrid>
            <ContainerGrid>
              <SkillName>HTML</SkillName>
              <SkillBar>
                <SkillPer per="50%">
                  <SkillTooltip>50%</SkillTooltip>
                </SkillPer>
              </SkillBar>
            </ContainerGrid>
            <ContainerGrid>
              <SkillName>REACT</SkillName>
              <SkillBar>
                <SkillPer per="90%">
                  <SkillTooltip>90%</SkillTooltip>
                </SkillPer>
              </SkillBar>
            </ContainerGrid>
            <ContainerGrid>
              <SkillName>NODEJS</SkillName>
              <SkillBar>
                <SkillPer per="90%">
                  <SkillTooltip>90%</SkillTooltip>
                </SkillPer>
              </SkillBar>
            </ContainerGrid>
            <ContainerGrid>
              <SkillName>Bootstrap</SkillName>
              <SkillBar>
                <SkillPer per="90%">
                  <SkillTooltip>90%</SkillTooltip>
                </SkillPer>
              </SkillBar>
            </ContainerGrid>
            <ContainerGrid>
              <SkillName>Babel</SkillName>
              <SkillBar>
                <SkillPer per="90%">
                  <SkillTooltip>90%</SkillTooltip>
                </SkillPer>
              </SkillBar>
            </ContainerGrid>
          </SkillItem>
          <Button>Como adquiri esses conhecimentos?</Button>
        </HardSkillContainer>
        <SoftSkillsContainer>
          <SkillTitle>Comportamentais</SkillTitle>
          <p>
            Durante minha trajetória como autônomo desenvolvi algumas softskills
          </p>
          <Carousel items={skillsComportamentais} />
        </SoftSkillsContainer>
      </ContainerGrid>
    </SkillsContainer>
  )
}
