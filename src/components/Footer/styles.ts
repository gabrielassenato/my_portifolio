import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const FooterBar = styled.div`
  background-color: #ddd;
  margin-top: 42px;
  text-align: center;
  padding: 18px;

  @media (max-width: ${breakpoints.cellphone}) {
    font-size: 14px;
  }
`
