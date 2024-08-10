import styled from 'styled-components'

export const CarouselContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 100%;
  max-height: 100%;

  button {
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      img {
        width: 36px;
      }
    }
  }
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
  padding: 16px;
  margin: 0 16px;

  h4 {
    margin-top: 8px;
  }
`

export const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
