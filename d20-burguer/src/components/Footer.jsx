import { links } from '../data/menu'

import Icon from './Icon'

import './Footer.css'

const logoUrl = 'https://meuairgo.com.br/assets/uploads/images/users/image-perfil-joao-brasil-16-03-2023-18-46.png'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <div className="footer-brand-mark">
            <img
              src={logoUrl}
              alt="D20"
            />
          </div>

          <div>
            <span className="footer-label">
              D20 · TAVERNA
            </span>

            <p>
              Hamburgueria artesanal em Eusébio.
            </p>
          </div>
        </div>

        <div className="footer-quest">
          <span className="footer-label">
            A AVENTURA CONTINUA
          </span>

          <p>
            Reúna sua party.
            <br />
            A próxima quest começa aqui.
          </p>
        </div>

        <div className="footer-links">

          <a
            href={links.instagram}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="instagram" />
            <span>Instagram</span>
            <b>↗</b>
          </a>

          <a
            href={links.ifood}
            target="_blank"
            rel="noreferrer"
          >
            <span>iFood</span>
            <b>↗</b>
          </a>

          <a
            href={links.review}
            target="_blank"
            rel="noreferrer"
          >
            <span>Avaliar a taverna</span>
            <b>↗</b>
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          D20 · EUSÉBIO
        </span>

        <p>
          @d20burger
          {' · '}
          Desenvolvido por{' '}
          <a
            href="https://www.linkedin.com/in/richard-r-araújo/"
            target="_blank"
            rel="noreferrer"
          >
            Richard R. Araújo
          </a>
        </p>

        <span>
          © D20
        </span>

      </div>

    </footer>
  )
}