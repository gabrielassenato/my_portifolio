import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  black: '#000',
  green: '#60B98C',
  lightGray: '#D9D9D9',
  gray: '#CCCACA'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Bai Jamjuree, sans-serif;
    list-style: none;
    text-decoration: none;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`

export const Button = styled.button`
  background-color: ${colors.green};
  color: ${colors.white};
  font-size: 18px;
  padding: 8px;
  width: 200px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 24px;
    margin-left: 6px;
  }
`
