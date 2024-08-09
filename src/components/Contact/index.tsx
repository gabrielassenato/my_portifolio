import { ContactContainer, LinksItem, LinksList } from './styles'
import logoWhatsApp from '../../assets/logo_whatsapp.png'
import logoGitHub from '../../assets/logo_github.png'
import logoLinkedIn from '../../assets/logo_linkedin.png'
import logoGmail from '../../assets/logo_gmail.png'
import Pin from '../../assets/logo_pin.png'

export const Contact = () => (
  <ContactContainer>
    <h1>Contato</h1>
    <LinksList>
      <LinksItem>
        <a href="#">
          <img src={logoWhatsApp} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="#">
          <img src={logoGmail} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="#">
          <img src={logoGitHub} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="#">
          <img src={logoLinkedIn} alt="" />
        </a>
      </LinksItem>
    </LinksList>
    <span>
      Porto Alegre - RS <img src={Pin} alt="" />
    </span>
  </ContactContainer>
)
