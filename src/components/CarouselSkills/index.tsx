import { useEffect, useState } from 'react'
import prev from '../../assets/prev.png'
import back from '../../assets/back.png'

import {
  CarouselContainer,
  CarouselTrack,
  CarouselItem,
  Botoes
} from './styles'

type CarouselProps = {
  items: {
    title: string
    description: string
    imgSrc: string
  }[]
}

export const CarouselSkills: React.FC<CarouselProps> = ({ items }) => {
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
      const interval = setInterval(handleNext, 4000)
      return () => clearInterval(interval)
    }
  }, [currentIndex, isHovered])

  return (
    <CarouselContainer
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CarouselTrack>
        <CarouselItem>
          <img src={items[currentIndex].imgSrc} alt="" />
          <div>
            <h4>{items[currentIndex].title}:</h4>
            <p>{items[currentIndex].description}</p>
          </div>
        </CarouselItem>
      </CarouselTrack>
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
