import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const PostCardContainer = styled(NavLink)`
  width: 100%;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 2rem;

  background: #f4f8fd;
  border-radius: 10px;
  border: 2px solid transparent;
  box-shadow: 0px 1px 20px rgba(0, 0, 0, 0.09);
  height: 260px;
  overflow: hidden;

  transition: border 0.2s;

  cursor: pointer;
  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    h1 {
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;
      color: #333333;
      text-align: justify;
    }

    span {
      font-size: 0.875rem;
      line-height: 160%;
      color: #333333;
    }
  }

  main {
    height: 112px;
    overflow: hidden;
    p {
      height: 100%;
      text-align: justify;
      color: #333333;
    }
  }

  &:hover {
    border: 2px solid #eb6440;
  }
`
