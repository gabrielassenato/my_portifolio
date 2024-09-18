import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const CarouselContainer = styled.div``

export const MyProjectsProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 16px;

  img {
    height: 360px;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    display: block;

    img {
      height: 200px;
    }
  }
`

export const AboutProject = styled.div`
  padding-top: 36px;

  h2 {
    font-size: 28px;
    text-align: center;

    @media (max-width: ${breakpoints.cellphone}) {
      font-size: 22px;
    }
  }

  p {
    margin: 8px 0;
    text-align: center;
  }
`

export const Tecnology = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  img {
    height: 30px;
    margin-left: 8px;
  }
`

export const VisitTheProject = styled.div`
  margin-top: 8px;
  text-align: center;

  div {
    display: flex;

    @media (max-width: ${breakpoints.cellphone}) {
      display: block;
      margin: 0 auto;
      text-align: center;
      margin-top: 16px;
    }
  }

  button {
    margin: 8px;
    padding: 4px;
    width: 160px;

    img {
      height: 20px;
    }

    @media (max-width: ${breakpoints.cellphone}) {
      display: block;
      margin: 8px auto;
    }
  }
`
