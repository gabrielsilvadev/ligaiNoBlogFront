import { HeaderContainer } from './styles'

import techBg from '../../assets/tech-bg.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={techBg} alt="LIGAI NO BLOG"></img>
    </HeaderContainer>
  )
}
