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
  SkillItem
} from './styles'

import { CarouselSkills } from '../CarouselSkills'

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
import comunication from '../../assets/gpt2-comunication.png'
import learner from '../../assets/gpt2-learning.png'
import analitic from '../../assets/gpt2-analytic.png'
import adaptability from '../../assets/gpt2-adaptability.png'
import { Button } from '../../styles'
import { Star } from '../Star'

type SkillsRating = {
  name: string
  rating: number
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
    rating: 4
  },
  {
    name: 'CSS',
    rating: 4
  },
  {
    name: 'HTML',
    rating: 4.5
  },
  {
    name: 'Bootstrap',
    rating: 5
  },
  {
    name: 'React',
    rating: 4.5
  },
  {
    name: 'VueJs',
    rating: 2.5
  },
  {
    name: 'Inglês',
    rating: 3
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
          <SkillTitle>Técnicas</SkillTitle>
          <SkillItem>
            {skillsRating.map((skill, index) => {
              const stars = getStarRating(skill.rating)

              return (
                <ContainerGrid key={index}>
                  <SkillName>{skill.name}</SkillName>
                  <div>
                    {stars.map((starType, i) => (
                      <Star
                        key={i}
                        filled={starType === 'filled'}
                        halfFilled={starType === 'halfFilled'}
                      />
                    ))}
                  </div>
                </ContainerGrid>
              )
            })}
          </SkillItem>
          <Button>Como adquiri esses conhecimentos?</Button>
        </HardSkillContainer>
        <SoftSkillsContainer>
          <SkillTitle>Comportamentais</SkillTitle>
          <p>
            Durante minha trajetória como autônomo desenvolvi algumas softskills
          </p>
          <CarouselSkills items={skillsComportamentais} />
        </SoftSkillsContainer>
      </ContainerGrid>
    </SkillsContainer>
  )
}
