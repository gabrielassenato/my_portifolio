import { keyframes, styled } from 'styled-components'
import { colors } from '../../styles'

interface SkillPerProps {
  per: string
}

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`

export const SkillsContainer = styled.div`
  margin-top: 50px;
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
  margin-bottom: 24px; xc
`

export const CarouselTrack = styled.div`
  display: inline-block;
  width: 100%;
  animation: ${scroll} 10s linear infinite;
  will-change: transform;
`

export const CarouselItem = styled.div`
  display: inline-block;
  padding: 0 20px;

  img {
    width: 52px;
  }
`

export const ContainerTeste = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`

export const HardSkillContainer = styled.div`
  display: block;
  align-items: center;
  margin-bottom: 10px;
  padding: 16px;
`

export const Skill = styled.div`
  width: 100%;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

export const SkillTitle = styled.h4`
  text-align: center;
  margin-bottom: 8px;
`

export const SkillName = styled.h2`
  font-size: 14px;
  text-align: left;
  margin-right: 8px;
`

export const SkillBar = styled.div`
  width: 100%;
  margin-bottom: 8px;
  height: 14px;
  background-color: ${colors.lightGray};
  border-radius: 5px;
  flex-grow: 1;
`

export const SkillPer = styled.div.attrs<SkillPerProps>((props) => ({
  style: {
    maxWidth: props.per
  }
}))<SkillPerProps>`
  height: 100%;
  display: block;
  border-radius: 5px;
  position: relative;
  background-color: ${colors.green};
  overflow: hidden;
`

export const SkillTooltip = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const SoftSkillsContainer = styled.div`
  background-color: #eee;
  border-radius: 25px;
  padding: 16px;

  h2 {
    text-align: center;
    font-size: 16px;
  }

  p {
    text-align: center;
    font-size: 14px;
  }
`

export const SkillComportamental = styled.div`
  background-color: #ccc;
  border-radius: 18px;
  padding: 8px;
  display: grid;
  grid-template-columns: 1fr 2fr;

  img {
    height: 160px;
  }

  div {
    display: block;
  }
`

export const SkillComportamentalName = styled.div`
  color: #000;
  text-align: center;
`
