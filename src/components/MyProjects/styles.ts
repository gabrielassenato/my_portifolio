import styled from 'styled-components'

export const MyProjectsContainer = styled.div`
  background-color: #eee;
  margin-top: 24px;
  border-radius: 74px 22px 74px 22px;
  padding: 34px;

  h1 {
    margin-bottom: 16px;
  }
`

export const MoreProjectsDiv = styled.div`
  margin-top: 32px;
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  visibility: hidden;
  transition: max-height 1s ease, opacity 1s ease, visibility 1s ease;

  &.isVisibles {
    max-height: 1000px;
    opacity: 1;
    visibility: visible;
  }
`
