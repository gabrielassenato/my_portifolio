import {
  Avatar,
  Burguer,
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  NavMobile
} from './styles'
import avatar from '../../assets/avatar.png'
import { useState } from 'react'
useState

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Avatar>
            <img src={avatar} alt="Avatar Gabriel" />
            <h1>Gabriel Assenato</h1>
          </Avatar>
          <Burguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </Burguer>
          <nav>
            <Links>
              <LinkItem>
                <a href="#about">Sobre</a>
              </LinkItem>
              <LinkItem>
                <a href="#skills">Habilidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#projects">Projetos</a>
              </LinkItem>
              <LinkItem>
                <a href="#contact">Contatos</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <a href="#about">Sobre</a>
          </LinkItem>
          <LinkItem>
            <a href="#skills">Habilidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#projects">Projetos</a>
          </LinkItem>
          <LinkItem>
            <a href="#contact">Contatos</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
