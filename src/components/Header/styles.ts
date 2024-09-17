import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  text-decoration: none;

  @media (max-width: ${breakpoints.cellphone}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.lightGray};
  padding: 8px;

  img {
    height: 72px;
  }
`

export const HeaderRow = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.cellphone}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 16px;
    font-size: 32px;
  }

  @media (max-width: ${breakpoints.cellphone}) {
    h1 {
      display: none;
    }
  }
`

export const Burguer = styled.div`
  width: 32px;

  span {
    height: 4px;
    display: block;
    width: 100%;
    background-color: #000;
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.cellphone}) {
    display: none;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
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

  @media (max-width: ${breakpoints.cellphone}) {
    margin-right: 0;

    a {
      display: block;
      padding: 8px 0;
      text-align: center;
      margin: 0 auto;
    }
  }
`
