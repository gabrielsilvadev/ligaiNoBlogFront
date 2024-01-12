import styled from 'styled-components'

export const PersonInfoContainer = styled.div`
  max-width: 864px;
  width: 100%;
  height: 212px;
  display: flex;
  background: #f4f8fd;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;
  img {
    border-radius: 10px;
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        font-weight: 700;
        font-size: 1.5rem;
        line-height: 130%;
        color: #333333;
      }
      a {
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;
        text-transform: uppercase;
        text-decoration: none;
        display: flex;
        gap: 0.5rem;
        align-items: center;
        color: #333333;
        transition: border 0.2s;
        border-bottom: 2px solid transparent;
        &:hover {
          border-bottom: 2px solid #eb6440;
        }
      }
    }
    main {
      p {
        margin-top: 0.5rem;
        color: #333333;
        word-wrap: break-word;
      }
    }
    footer {
      display: flex;
      height: 100%;
      align-items: flex-end;
      gap: 1.5rem;
      span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #333333;
        i {
          color: ${(props) => props.theme['base-label']};
        }
      }
    }
  }
  @media (max-width: 680px) {
    display: flex;
    flex-direction: column;
    height: auto;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  @media (max-width: 450px) {
    div {
      header {
        flex-direction: column;
        gap: 0.8rem;
      }
      main {
        p {
          text-align: center;
        }
      }
      footer {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`
