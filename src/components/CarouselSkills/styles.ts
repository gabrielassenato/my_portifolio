import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const CarouselContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
  max-height: 100%;
`

export const CarouselTrack = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`

export const CarouselItem = styled.div`
  text-align: center;
  background-color: #ccc;
  border-radius: 18px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 165px;
  padding: 16px;
  margin: 0 16px;

  h4 {
    margin-top: 8px;
  }

  img {
    height: 125px;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    height: 180px;
    display: flex;

    img {
      display: none;
    }
  }
`

export const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 16px;

  button {
    margin: 0 8px;
    transition: transform 0.3s ease;
    cursor: pointer;
    border: none;

    &:hover {
      transform: scale(1.2);
    }
`
