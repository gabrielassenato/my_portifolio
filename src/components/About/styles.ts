import styled from 'styled-components'

import Gabriel from '../../assets/eu_5.jpeg'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  scroll-margin-top: 30px;
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  background-color: ${colors.lightGray};
  height: 280px;
  border-radius: 50px 0px 0px 0px;
  margin-top: 30px;
  position: relative;

  @media (max-width: ${breakpoints.cellphone}) {
    display: block;
    height: 400px;
  }
`

export const Text = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;

  h2 {
    display: flex;
    align-items: center;

    img {
      height: 42px;
      margin-left: 12px;
    }
  }

  ul {
    display: flex;
    li {
      display: flex;
      align-items: center;
      font-weight: bold;
      font-size: 14px;
      text-align: center;
      margin-right: 16px;

      img {
        height: 24px;
        margin-right: 4px;
      }
    }
  }

  p {
    margin-top: 8px;
    margin-bottom: 24px;

    span {
      font-weight: bold;
    }
  }

  @media (max-width: ${breakpoints.cellphone}) {
    display: block;

    h2 {
      justify-content: center;
    }

    ul {
      display: block;
      li {
        margin-bottom: 8px;
      }
    }

    p {
      justify-content: center;
      text-align: center;
    }
  }
`

export const Picture = styled.div`
  background-image: url(${Gabriel});
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;

  &:hover div {
    opacity: 1;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    display: none;
  }
`

export const Overlay = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.8s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
  }
`
