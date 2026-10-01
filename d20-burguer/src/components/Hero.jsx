import Icon from './Icon'
import { links, menu } from '../data/menu'
import './Hero.css'

const logoUrl =
  'https://meuairgo.com.br/assets/uploads/images/users/image-perfil-joao-brasil-16-03-2023-18-46.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={menu[0].image}
        >
          <source src="/videos/fire.mp4" type="video/mp4" />
        </video>

        <div className="hero-media-shadow" />
        <div className="hero-media-warmth" />
      </div>

      <div className="hero-content">
        <div className="hero-brand">
          <span className="hero-brand-line" />
          <span>Hamburgueria artesanal</span>
          <span>·</span>
          <span>Eusébio</span>
        </div>

        <img
          className="hero-logo"
          src={logoUrl}
          alt="D20 Hamburgueria"
        />

        <div className="hero-title">
          <span className="hero-title-small">A aventura começa aqui.</span>

          <h1>
            Role os
            <br />
            dados.
            <br />
            <em>Mate a fome.</em>
          </h1>
        </div>

        <p className="hero-description">
          Uma taverna para quem prefere a aventura com
          brioche, smash e molho da casa.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#cardapio"
          >
            Escolher minha classe
            <Icon name="sword" />
          </a>

          <a
            className="hero-order"
            href={links.order}
            target="_blank"
            rel="noreferrer"
          >
            Pedir agora
          </a>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Reúna o grupo</span>

        <span className="hero-bottom-center">
          D20 Hamburgueria
        </span>

        <span className="hero-scroll">
          Scroll para explorar
        </span>
      </div>
    </section>
  )
}