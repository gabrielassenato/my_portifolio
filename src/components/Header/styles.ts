import styled from 'styled-components'
import { colors } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${colors.lightGray};
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 72px;
  }
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 16px;
    font-size: 32px;
  }
`

export const Links = styled.ul`
  display: flex;
  text-decoration: none;
`

export const LinkItem = styled.li`
  margin-right: 14px;

  a {
    color: ${colors.black};
    font-size: 24px;
    text-align: center;
    display: inline-block;
    width: 130px;
    transition: font-weight 0.2s ease, color 0.2s ease;
  }

  &:hover a {
    font-weight: bold;
    text-decoration: underline;
  }

  &:last-child {
    margin-right: 0;
  }
`
