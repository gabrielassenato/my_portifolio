import styled from 'styled-components'

export const ContactContainer = styled.div`
  text-align: center;
  margin-top: 28px;

  span {
    img {
      height: 24px;
    }
  }
`

export const LinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 42px;
`

export const LinksItem = styled.li`
  height: 100px;
  margin: 0 12px;
  transition: transform 0.2s ease;
  img {
    height: 90px;
  }

  &:hover {
    transform: scale(1.1);
  }
`
