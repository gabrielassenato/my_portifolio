import { keyframes, styled } from 'styled-components'
import { breakpoints, colors } from '../../styles'

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`

export const SkillsContainer = styled.div`
  scroll-margin-top: 40px;
  margin-top: 40px;
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const CarouselContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: ${colors.lightGray};
  margin-bottom: 24px;
`

export const CarouselTrack = styled.div`
  display: inline-block;
  width: 100%;
  animation: ${scroll} 20s linear infinite;
  will-change: transform;
`

export const CarouselItem = styled.div`
  display: inline-block;
  padding: 0 20px;

  img {
    width: 52px;
  }
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: ${breakpoints.cellphone}) {
    display: block;
      .stars {
        margin-bottom: 12px;
        margin-left: 12px;
      }
`

export const HardSkillContainer = styled.div`
  display: block;
  align-items: center;
  padding-right: 16px;
  height: 100%;

  div {
    max-height: 220px;
    overflow-y: auto;
  }

  Button {
    width: 100%;
    font-size: 16px;
    border-radius: 0px;
    margin-top: 8px;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    display: block;
    padding: 16px;
  }
`

export const ContainerGridHard = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`

export const SkillItem = styled.div`
  justify-content: center;

  @media (max-width: ${breakpoints.cellphone}) {
    display: block;

    div {
      display: flex;
      align-items: center;
      text-align: center;
    }
  }
`

export const SkillTitle = styled.h2`
  text-align: center;
  margin-bottom: 8px;
`

export const SkillName = styled.h4`
  font-size: 18px;
  margin-bottom: 12px;
`

export const SoftSkillsContainer = styled.div`
  background-color: #eee;
  border-radius: 25px;
  margin-bottom: 23px;

  p {
    text-align: center;
    font-size: 16px;
    margin: 8px;
  }
`

export const OpenDiv = styled.div`
  background-color: ${colors.lightGray};
  padding: 16px;
  max-height: 0;
  opacity: 0;
  transition: max-height 1s ease, opacity 1s ease, visibility 1s ease;

  &.isVisibles {
    max-height: 500px;
    opacity: 1;
    visibility: visible;
  }

  span {
    font-weight: bold;
  }
`
