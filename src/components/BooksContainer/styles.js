import styled from 'styled-components'

export const Container = styled.div`
  background-color: #d6a3fb;
  padding: 160px 40px;
  overflow: ${({$isPanelOpen}) => ($isPanelOpen ? 'hidden' : 'hidden')};
  position: ${({$isPanelOpen}) => ($isPanelOpen ? 'fixed' : 'unset')};
  top: ${({$isPanelOpen, $top}) => ($isPanelOpen ? `-${$top}px` : 0)};

  @media (max-width: 800) {
    padding: 114px 20px;
  }
`

export const H2 = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;

  @media (max-width: 800) {
    font-size: 32px;
  }
`

export const BookList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 20px;
  }
`
