import { NavLink } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const PostDetailContainer = styled.div`
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`

export const PostDetailCard = styled.div`
  max-width: 864px;
  width: 100%;
  height: auto;
  background: #f4f8fd;
  padding: 2rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
      background: transparent;
      color: #eb6440;
      transition: border 0.2s;
      border-bottom: 2px solid transparent;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-transform: uppercase;

      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      &:hover {
        border-bottom: 2px solid #eb6440;
      }
    }
  }
  div {
    margin-top: 1.5rem;
  }
  div h1 {
    color: #333333;
  }
  footer {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
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

  @media (max-width: 680px) {
    padding: 0.5rem;
    div {
      h1 {
        text-align: center;
        line-height: 2.5rem;
        margin-bottom: 1rem;
      }
    }
    footer {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`

export const NavButton = styled(NavLink)`
  text-decoration: none;
  background: transparent;
  color: #eb6440;
  transition: border 0.2s;
  border-bottom: 2px solid transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  &:hover {
    border-bottom: 2px solid #eb6440;
  }
`
export const PostDetailContent = styled.main`
  max-width: 864px;
  width: 100%;
  padding: 2.5rem;
  white-space: pre-wrap;
  overflow: hidden;
  div {
    overflow-x: auto;
    width: 100%;
    height: 100%;
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
      height: 8px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme['base-profile']};
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.blue};
    }

    h3 {
      color: #4a4a4a;
    }

    a {
      text-decoration: none;
      background: transparent;
      color: #4a4a4a;

      &:hover {
        transition: border 2s;
        border-bottom: 2px solid EB6440;
      }
    }

    img {
      max-width: 100%;
    }
  }
  @media (max-width: 680px) {
    padding: 1rem 0;
  }
`
