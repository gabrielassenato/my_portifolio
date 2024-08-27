import styled from 'styled-components'

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

    img {
      height: 200px;
      width: 100%;
    }

    div {
      justify-content: center;
      text-align: center;
      display: flex;

    button {
      margin: 4px;
      padding: 4px;
      width: 40%;
    }
  }
`
