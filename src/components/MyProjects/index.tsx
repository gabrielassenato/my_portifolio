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
import cssLogo from '../../assets/logo_css3.png'
import htmlLogo from '../../assets/logo_html5.png'
import jsLogo from '../../assets/logo_javascript.png'
import gulpLogo from '../../assets/logo_gulp.png'
import sassLogo from '../../assets/logo_sass.png'
import bootstrapLogo from '../../assets/logo_bootstrap.png'
import tsLogo from '../../assets/logo_ts.png'
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
      'Projeto de landing page em construção desenvolvido para um cliente especializado em comunicação visual. Utilizei React, CSS, e Node com Grunt para implementar funcionalidades e estilizações.',
    imgSrcTecnology: [jsLogo, bootstrapLogo, gulpLogo, sassLogo],
    imgSrcMockup: fc,
    imgAlt: 'logo grunt',
    linkToRepo: 'https://github.com/gabrielassenato/franck_comunica',
    linkVisit: 'https://franck-comunica.vercel.app/'
  },
  {
    title: 'Eplay',
    description:
      'Projeto de uma loja de games fictícia onde é possível adicionar os jogos no carrinho e simular a compra. Utilizei bibliotecas como yup, formik, loaders entre outras, assim como máscaras, condicionais e eventos. ',
    imgSrcTecnology: [reactLogo, tsLogo],
    imgSrcMockup: egames,
    imgAlt: 'logo grunt',
    linkToRepo: 'https://github.com/gabrielassenato/eplay',
    linkVisit: 'https://eplay-one.vercel.app/'
  },
  {
    title: 'Agenda de contatos',
    description:
      'Este projeto é uma agenda de contatos, onde é possível adicionar e deletar contatos com algumas condicionais que verificam se o contato já existe ou se o número de telefona já está vinculado a outra pessoa.',
    imgSrcTecnology: [htmlLogo, cssLogo, jsLogo],
    imgSrcMockup: agenda,
    imgAlt: 'logo grunt',
    linkToRepo: 'https://github.com/gabrielassenato/projeto-agenda-contatos',
    linkVisit: 'https://projeto-agenda-contatos-flax.vercel.app/'
  },
  {
    title: 'Efood',
    description:
      'Loja fictícia de alimentos que agrega diversos restaurantes utilizando uma API externa para gerar o catálogo. Implementada com diversas bibliotecas, loaders, suporte a máscaras, condicionais e eventos.',
    imgSrcTecnology: [reactLogo, tsLogo],
    imgSrcMockup: efood,
    imgAlt: 'logo grunt',
    linkToRepo: 'https://github.com/gabrielassenato/efood',
    linkVisit: 'https://efood-rosy-ten.vercel.app/'
  },
  {
    title: 'Calculadora de medias',
    description:
      'Este projeto é uma calculadora de médias de um aluno fictício, onde é possível definir a nota de corte e descobrir se o aluno foi aprovado ou reprovado com base nas suas notas. Ela foi feita utilizando HTML, CSS e JavaScript.',
    imgSrcTecnology: [htmlLogo, cssLogo, jsLogo],
    imgSrcMockup: medias,
    imgAlt: 'logo grunt',
    linkToRepo: 'https://github.com/gabrielassenato/projeto-calculadora-medias',
    linkVisit: 'https://gabriel-projeto-calculadora-medias-jade.vercel.app/'
  }
]

const moreProjects = [
  {
    name: 'Blade Runner',
    img: blade,
    linkToRepo: 'https://github.com/gabrielassenato/blade-runner',
    linkVisit: 'https://blade-runner.vercel.app/',
    description:
      'Esta é uma landing page do filme Blade Runner 2049 feita com HTML, CSS e um pouco de JS.'
  },
  {
    name: 'To do list',
    img: toDo,
    linkToRepo: 'https://github.com/gabrielassenato/to-do-list-vue',
    linkVisit: 'https://to-do-list-vue-omega.vercel.app/',
    description:
      'Esta é uma lista de tarefas que fiz utilizando Vue.js, HTML e Bootstrap.'
  },
  {
    name: 'Assenato Tattoo',
    img: tattoo,
    linkToRepo: 'https://github.com/gabrielassenato/assenato-tattoo-atualizado',
    linkVisit: 'https://assenato-tattoo-atualizado.vercel.app/',
    description:
      'Esta é uma página sobre serviços de tatuagens. Nesse projeto foi utilizado HTML, CSS e Bootstrap.'
  },
  {
    name: 'Sorteador',
    img: sorteador,
    linkToRepo: 'https://github.com/gabrielassenato/sorteador_grunt',
    linkVisit: 'https://sorteador-grunt-blue.vercel.app/',
    description:
      'Este projeto é um sorteador de números aleatórios e foi feito utilizando HTML, CSS, algumas funções de JS, GRUNT e o pré-processador LESS.'
  },
  {
    name: 'Finans',
    img: finans,
    linkToRepo: 'https://github.com/gabrielassenato/projeto-site-finans',
    linkVisit: 'https://gabrielassenato.github.io/projeto-site-finans/',
    description:
      'Esta é uma página de uma empresa de financas fictícia feita utilizando Bootstrap.'
  },
  {
    name: 'Contador Aniversario',
    img: niver,
    linkToRepo: 'https://github.com/gabrielassenato/meu-aniversario',
    linkVisit: 'https://meu-aniversario-rho.vercel.app/',
    description:
      'Landing Page de um evento com um contador utilizando HTML, CSS e JS.'
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
    <MyProjectsContainer id="projects">
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
