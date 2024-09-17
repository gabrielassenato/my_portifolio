import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const MoreProjectsContainer = styled.div`
  h1 {
    text-align: center;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
  }

  li {
    margin-bottom: 16px;

    h2 {
      text-align: center;
    }

    .image-container {
      position: relative;
      overflow: hidden;
    }

    img {
      height: 200px;
      width: 100%;
      display: block;
      transition: opacity 0.8s ease;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.8s ease;
      text-align: center;
      padding: 10px;
    }

    .image-container:hover .overlay {
      opacity: 1;
    }

    .overlay a {
      margin: 6px 0;
      width: 80%;
    }
  }

  div {
    justify-content: center;
    text-align: center;
    display: flex;

    a {
      justify-content: center;
      display: flex;
      width: 100%;

      button {
        margin: 6px 0px;
        padding: 4px;
        width: 80%;
      }
    }
  }

  @media (max-width: ${breakpoints.cellphone}) {
    ul {
      display: block;
    }
  }
`
