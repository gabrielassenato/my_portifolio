import styled from 'styled-components'
import { colors } from '../../styles'

export const MyProjectsContainer = styled.div`
  background-color: #eee;
  margin-top: 24px;
  border-radius: 74px 22px 74px 22px;
  padding: 34px;
`

export const MyProjectsProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 44px;

  img {
    height: 400px;
  }
`

export const AboutProject = styled.div`
  padding-top: 84px;

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
