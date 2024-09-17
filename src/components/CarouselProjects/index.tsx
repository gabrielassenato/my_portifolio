import { useState, useEffect } from 'react'
import { Button } from '../../styles'
import prev from '../../assets/prev.png'
import back from '../../assets/back.png'
import githubLogo from '../../assets/logo_github_white.png'
import vercelLogo from '../../assets/logo_vercel_white.png'

import {
  AboutProject,
  CarouselContainer,
  MyProjectsProjects,
  Tecnology,
  VisitTheProject
} from './styles'
import { Botoes } from '../CarouselSkills/styles'

type CarouselProps = {
  items: {
    title: string
    description: string
    imgSrcMockup: string
    imgSrcTecnology: string[]
    linkToRepo: string
    linkVisit: string
  }[]
}

export const CarouselProjects: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(handleNext, 3000)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isHovered])

  return (
    <CarouselContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <MyProjectsProjects>
        <img src={items[currentIndex].imgSrcMockup} alt="" />
        <AboutProject>
          <h2>{items[currentIndex].title}:</h2>
          <p>{items[currentIndex].description}</p>
          <Tecnology>
            Tecnologias:
            {items[currentIndex].imgSrcTecnology.map((src, index) => (
              <img key={index} src={src} alt={`Tecnologia ${index + 1}`} />
            ))}
          </Tecnology>
          <VisitTheProject>
            <h5>Visite o projeto:</h5>
            <div>
              <a
                href={items[currentIndex].linkToRepo}
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  Repositório <img src={githubLogo} alt="" />
                </Button>
              </a>
              <a
                href={items[currentIndex].linkVisit}
                target="_blank"
                rel="noreferrer"
              >
                <Button>
                  Ver projeto <img src={vercelLogo} alt="" />
                </Button>
              </a>
            </div>
          </VisitTheProject>
        </AboutProject>
      </MyProjectsProjects>
      <Botoes>
        <button onClick={handleNext}>
          <img src={back} alt="" />
        </button>
        <button onClick={handlePrev}>
          <img src={prev} alt="" />
        </button>
      </Botoes>
    </CarouselContainer>
  )
}
