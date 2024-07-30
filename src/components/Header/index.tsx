import { Avatar, HeaderBar, LinkItem, Links } from './styles'
import avatar from '../../assets/avatar.png'

const Header = () => (
  <HeaderBar>
    <Avatar>
      <img src={avatar} alt="Avatar Gabriel" />
      <h1>Gabriel Assenato</h1>
    </Avatar>
    <nav>
      <Links>
        <LinkItem>
          <a href="#">Sobre</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Habilidades</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Projetos</a>
        </LinkItem>
        <LinkItem>
          <a href="#">Contatos</a>
        </LinkItem>
      </Links>
    </nav>
  </HeaderBar>
)

export default Header
