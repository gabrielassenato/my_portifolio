import { ContactContainer, LinksItem, LinksList } from './styles'
import logoWhatsApp from '../../assets/logo_whatsapp.png'
import logoGitHub from '../../assets/logo_github.png'
import logoLinkedIn from '../../assets/logo_linkedin.png'
import logoGmail from '../../assets/logo_gmail.png'
import Pin from '../../assets/logo_pin.png'
import { Button } from '../../styles'

export const Contact = () => (
  <ContactContainer id="contact">
    <h1>Contato</h1>
    <LinksList>
      <LinksItem>
        <a href="https://www.linkedin.com/in/gabriel-assenato/" target="blank">
          <img src={logoLinkedIn} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="https://github.com/gabrielassenato" target="blank">
          <img src={logoGitHub} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="mailto:gabrielassenato@gmail.com" target="blank">
          <img src={logoGmail} alt="" />
        </a>
      </LinksItem>
      <LinksItem>
        <a href="https://wa.me/5551998831217" target="blank">
          <img src={logoWhatsApp} alt="" />
        </a>
      </LinksItem>
    </LinksList>
    <Button>
      <a
        href="https://github.com/gabrielassenato/my_portifolio/blob/main/src/assets/cv-gabriel.pdf"
        target="blank"
      >
        Baixar CV
      </a>
    </Button>
    <span>
      Porto Alegre - RS <img src={Pin} alt="" />
    </span>
  </ContactContainer>
)
