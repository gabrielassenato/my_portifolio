import {
  CarouselContainer,
  CarouselTrack,
  CarouselItem,
  Title,
  SkillsContainer,
  SkillName,
  SkillTitle,
  HardSkillContainer,
  SoftSkillsContainer,
  ContainerGrid,
  SkillItem,
  OpenDiv,
  ContainerGridHard
} from './styles'

import { CarouselSkills } from '../CarouselSkills'

import logo1 from '../../assets/logo_babel.png'
import logo2 from '../../assets/logo_bootstrap.png'
import logo3 from '../../assets/logo_css3.png'
import logo4 from '../../assets/logo_grunt.png'
import logo5 from '../../assets/logo_gulp.png'
import logo6 from '../../assets/logo_html5.png'
import logo7 from '../../assets/logo_javascript.png'
import logo8 from '../../assets/logo_ts.png'
import logo9 from '../../assets/logo_nodejs.png'
import logo10 from '../../assets/logo_react.png'
import logo11 from '../../assets/logo_sass.png'
import logo12 from '../../assets/logo_vuejs.png'
import comunication from '../../assets/gpt2-comunication.png'
import learner from '../../assets/gpt2-learning.png'
import analitic from '../../assets/gpt2-analytic.png'
import adaptability from '../../assets/gpt2-adaptability.png'
import { Button } from '../../styles'
import { useState } from 'react'
import starFull from '../../assets/full.png'
import starHalf from '../../assets/half.png'
import starEmpty from '../../assets/empty.png'

type SkillsRating = {
  name: string
  rating: number
}

export type StarProps = {
  filled: boolean
  halfFilled?: boolean
}

export const Star = ({ filled, halfFilled }: StarProps) => {
  let starSrc = starEmpty

  if (filled) {
    starSrc = starFull
  } else if (halfFilled) {
    starSrc = starHalf
  }

  return <img src={starSrc} alt="Star" />
}

const skillsComportamentais = [
  {
    title: 'Comunicação',
    description:
      'Como já fui vendedor e tatuador, obtive grande experiência em tratar com o cliente e entender o briefing buscando criar algo que lhe comovesse.',
    imgSrc: comunication
  },
  {
    title: 'Adaptabilidade',
    description:
      'Eu trabalho como autônomo e executo diversos serviços, desde entregas, manutenções prediais, tatuagens e afins. Sempre me adaptei em prol da "sobrevivencia".',
    imgSrc: adaptability
  },
  {
    title: 'Autodidata',
    description:
      'Sempre gostei de aprender. Desde maunutenções residenciais até veiculares e de aparelhos eletrônicos, sempre optei por pesquisar e tentar solucionar os meus problemas por conta própria.',
    imgSrc: learner
  },
  {
    title: 'Analítico',
    description:
      'Como autônomo sempre tive bons olhos para observar, procurar possíveis soluções para algo que não parece bem, buscar alternativas para melhorias e ideias novas.',
    imgSrc: analitic
  }
]

const skillsRating: SkillsRating[] = [
  {
    name: 'JavaScript',
    rating: 3.5
  },
  {
    name: 'CSS',
    rating: 4
  },
  {
    name: 'HTML',
    rating: 4
  },
  {
    name: 'Bootstrap',
    rating: 4
  },
  {
    name: 'React',
    rating: 3.5
  },
  {
    name: 'VueJs',
    rating: 2.5
  },
  {
    name: 'Java',
    rating: 3.5
  },
  {
    name: 'Inglês',
    rating: 2.5
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

const getStarRating = (rating: number) => {
  const totalStars = 5
  const filledStars = Math.floor(rating)
  const halfFilledStars = rating % 1 !== 0 ? 1 : 0
  const emptyStars = totalStars - filledStars - halfFilledStars

  return [
    ...Array(filledStars).fill('filled'),
    ...Array(halfFilledStars).fill('halfFilled'),
    ...Array(emptyStars).fill('empty')
  ]
}

export const Skills = () => {
  const clonedLogos = [...logos, ...logos]

  const [isVisible, setIsVisible] = useState(false)
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = () => {
    setIsVisible(!isVisible)
    setIsToggled(!isToggled)
  }

  return (
    <SkillsContainer id="skills">
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
          <SkillTitle>Técnicas</SkillTitle>
          <div>
            <SkillItem>
              {skillsRating.map((skill, index) => {
                const stars = getStarRating(skill.rating)
                return (
                  <ContainerGridHard key={index}>
                    <SkillName>{skill.name}</SkillName>
                    <div className="stars">
                      {stars.map((starType, i) => (
                        <Star
                          key={i}
                          filled={starType === 'filled'}
                          halfFilled={starType === 'halfFilled'}
                        />
                      ))}
                    </div>
                  </ContainerGridHard>
                )
              })}
            </SkillItem>
          </div>
          <Button type="button" onClick={handleToggle}>
            Como adquiri esses conhecimentos?
          </Button>
        </HardSkillContainer>
        <SoftSkillsContainer>
          <SkillTitle>Comportamentais</SkillTitle>
          <p>
            Durante minha trajetória como autônomo desenvolvi algumas softskills
          </p>
          <CarouselSkills items={skillsComportamentais} />
        </SoftSkillsContainer>
      </ContainerGrid>
      <OpenDiv className={isVisible ? 'isVisibles' : ''}>
        <p>
          Ao longo da minha jornada, além da formação acadêmica que me
          proporcionou uma boa base de conhecimentos, acumulei mais de
          <span> 300 horas</span> de cursos. Durante esse tempo, tive a
          oportunidade de <span>aprender</span>, <span>aplicar</span> e{' '}
          <span>aprimorar</span> minhas habilidades na prática. Esses
          aprendizados foram essenciais para{' '}
          <span>desenvolver minhas competências</span> e aprofundar meu domínio
          nas tecnologias que utilizo.
        </p>
      </OpenDiv>
    </SkillsContainer>
  )
}
