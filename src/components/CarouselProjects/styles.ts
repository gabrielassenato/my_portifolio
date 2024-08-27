import styled from 'styled-components'
import { colors } from '../../styles'

export const CarouselContainer = styled.div`

  button {
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 12px;
`

export const MyProjectsContainer = styled.div`
  background-color: #eee;
  border-radius: 74px 22px 74px 22px;
`

export const MyProjectsProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 16px;

  img {
    height: 360px;
  }
`

export const AboutProject = styled.div`
  padding-top: 36px;

  h2 {
    font-size: 28px;
    text-align: center;
  }

  p {
    margin: 8px 0;
  }
`

export const Tecnology = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  img {
    height: 30px;
    margin-left: 8px;
  }
`

export const VisitTheProject = styled.div`
  margin-top: 8px;
  text-align: center;
  align-items: center;
  justify-content: center;

  h5 {
    margin-bottom: 0px;
  }

  div {
    display: flex;
    justify-content: center;
  }

  button {
    margin: 8px;
    padding: 4px;
    width: 160px;

    img {
      height: 20px;
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
