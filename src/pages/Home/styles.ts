import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4.5rem;
  padding: 1rem 2rem;

  @media (max-width: 680px) {
    padding: 1rem;
  }
`

export const HomeContent = styled.div`
  max-width: 864px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const SearchSection = styled.section`
  width: 100%;
  div {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: #333333;
    }
    small {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 160%;
      color: #333333;
    }
  }
  input {
    margin-top: 0.75rem;
    background: #f4f8fd;
    border: 1px solid #d6e4e5;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    width: 100%;
    color: white;
    &::placeholder {
      color: #333333;
    }
  }
`

export const ListSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`
