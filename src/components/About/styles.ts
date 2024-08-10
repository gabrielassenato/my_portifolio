import styled from 'styled-components'

import Gabriel from '../../assets/eu_5.jpeg'
import { colors } from '../../styles'

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  background-color: ${colors.lightGray};
  height: 280px;
  border-radius: 50px 0px 0px 0px;
  margin-top: 30px;
`

export const Text = styled.div`
  display: flex;
  padding: 20px 30px;
  flex-direction: column;

  h2 {
    display: flex;
    align-items: center;
    text-align: center;

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
`

export const Picture = styled.div`
  background-image: url(${Gabriel});
  background-size: cover;
  background-position: center;
`
