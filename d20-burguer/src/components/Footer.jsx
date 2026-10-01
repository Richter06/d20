import { links } from '../data/menu'
import Icon from './Icon'
import './Footer.css'

const logoUrl = 'https://meuairgo.com.br/assets/uploads/images/users/image-perfil-joao-brasil-16-03-2023-18-46.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div><img src={logoUrl} alt="D20" /><p>Hamburgueria artesanal em Eusébio.</p></div>
      <div className="footer-links"><a href={links.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" /> Instagram</a><a href={links.ifood} target="_blank" rel="noreferrer">iFood</a><a href={links.review} target="_blank" rel="noreferrer">Avaliar</a></div>
      <small>Conceito não oficial · conteúdo baseado nas informações públicas atuais da D20.</small>
    </footer>
  )
}