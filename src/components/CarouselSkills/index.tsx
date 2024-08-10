import { useState } from 'react'
import { Button } from '../../styles'
import prev from '../../assets/prev.png'
import back from '../../assets/back.png'

import {
  CarouselContainer,
  CarouselTrack,
  CarouselItem,
  Botoes
} from './styles'

interface CarouselProps {
  items: {
    title: string
    description: string
    imgSrc: string
  }[]
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

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

  return (
    <CarouselContainer>
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
