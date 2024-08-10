import styled from 'styled-components'
import { colors } from '../../styles'
import banner from '../../assets/banner.jpeg'

export const Hero = styled.div`
  position: relative;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  border-radius: 0px 0px 50px 50px;

  &::before {
    border-radius: 0px 0px 50px 50px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(70, 70, 70, 0.5);
    z-index: 1;
`

export const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  display: flex;

  h2 {
    font-weight: normal;
    font-size: 28px;
    padding: 40px;
  }

  span {
    color: ${colors.green};
    font-weight: bold;
  }

  p {
    margin-left: 220px;
    margin-top: 120px;
    font-weight: normal;
    font-size: 26px;
    text-align: right;

    span {
      font-size: 32px;
    }
  }
`
