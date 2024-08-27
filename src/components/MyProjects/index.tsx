import blade from '../../assets/mock-blade.png'
import efood from '../../assets/mock-efood.png'
import egames from '../../assets/mock-egames.png'
import fc from '../../assets/mock-fc.png'
import finans from '../../assets/mock-finans.png'
import medias from '../../assets/mockup-calculadoraMedia.png'
import agenda from '../../assets/mockup-agendaContatos.png'
import niver from '../../assets/mock-birthday.png'
import sorteador from '../../assets/mock-sorteador.png'
import tattoo from '../../assets/mock-tattoo.png'
import toDo from '../../assets/mock-toDoList.png'
import reactLogo from '../../assets/logo_react.png'
import nodeLogo from '../../assets/logo_nodejs.png'
import reactCss from '../../assets/logo_css3.png'
import nodeGrunt from '../../assets/logo_grunt.png'
import seeMore from '../../assets/add.png'
import seeLess from '../../assets/remove.png'
import { MoreProjectsDiv, MyProjectsContainer } from './styles'
import { Button } from '../../styles'

import { CarouselProjects } from '../CarouselProjects'
import { useState } from 'react'
import { MoreProjects } from '../MoreProjects'

const projects = [
  {
    title: 'Franck Comunica',
    description:
      'Esse projeto eu fiz para um tatuador Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet officia ullam voluptatum fugit et delectus, ratione assumenda ex similique dolorum officiis ipsa, facere ipsam minus aliquam cum natus. Quibusdam',
    imgSrcTecnology: [reactLogo, reactCss, nodeGrunt],
    imgSrcMockup: fc,
    imgAlt: 'logo grunt'
  },
  {
    title: 'Efood',
    description:
      'Esse porjeto é para um restaurante Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet officia ullam voluptatum fugit et delectus, ratione assumenda ex similique dolorum officiis ipsa, facere ipsam minus aliquam cum natus. Quibusdam.',
    imgSrcTecnology: [reactLogo, nodeLogo],
    imgSrcMockup: efood,
    imgAlt: 'logo grunt'
  },
  {
    title: 'Eplay',
    description:
      'Este projeto é para uma loja de games Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet officia ullam voluptatum fugit et delectus, ratione assumenda ex similique dolorum officiis ipsa, facere ipsam minus aliquam cum natus. Quibusdam.',
    imgSrcTecnology: [reactLogo],
    imgSrcMockup: egames,
    imgAlt: 'logo grunt'
  },
  {
    title: 'Agenda de contatos',
    description:
      'Este projeto é para uma loja de games Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet officia ullam voluptatum fugit et delectus, ratione assumenda ex similique dolorum officiis ipsa, facere ipsam minus aliquam cum natus. Quibusdam.',
    imgSrcTecnology: [reactLogo],
    imgSrcMockup: agenda,
    imgAlt: 'logo grunt'
  },
  {
    title: 'Calculadora de medias',
    description:
      'Este projeto é para uma loja de games Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus amet officia ullam voluptatum fugit et delectus, ratione assumenda ex similique dolorum officiis ipsa, facere ipsam minus aliquam cum natus. Quibusdam.',
    imgSrcTecnology: [reactLogo],
    imgSrcMockup: medias,
    imgAlt: 'logo grunt'
  }
]

const moreProjects = [
  {
    name: 'Blade Runner',
    img: blade,
    imgTecnology: [reactLogo]
  },
  {
    name: 'To do list',
    img: toDo,
    imgTecnology: [reactLogo]
  },
  {
    name: 'Assenato Tattoo',
    img: tattoo,
    imgTecnology: [reactLogo]
  },
  {
    name: 'Sorteador',
    img: sorteador,
    imgTecnology: [reactLogo]
  },
  {
    name: 'Finans',
    img: finans,
    imgTecnology: [reactLogo]
  },
  {
    name: 'Contador Aniversario',
    img: niver,
    imgTecnology: [reactLogo]
  }
]

export const MyProjects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = () => {
    setIsVisible(!isVisible)
    setIsToggled(!isToggled)
  }

  return (
    <MyProjectsContainer>
      <h1>Projetos</h1>
      <CarouselProjects items={projects} />
      <Button type="button" onClick={handleToggle}>
        Ver mais projetos
        <img src={isToggled ? seeLess : seeMore} alt="" />
      </Button>
      <MoreProjectsDiv className={isVisible ? 'isVisibles' : ''}>
        <MoreProjects items={moreProjects} />
      </MoreProjectsDiv>
    </MyProjectsContainer>
  )
}
