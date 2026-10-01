import Icon from './Icon'

import { links, menu } from '../data/menu'

import './Hero.css'

import logoUrl from '../assets/d20Logo.png'


export default function Hero() {
  return (
    <section className="hero">

      <div
        className="hero-media"
        aria-hidden="true"
      >
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={menu[0].image}
        >
          <source
            src="/videos/fire.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero-media-shadow" />
        <div className="hero-media-warmth" />
      </div>

      <div className="hero-content">

        <div className="hero-kicker">

          <span className="hero-kicker-chapter">
            CAPÍTULO 0
          </span>

          <span className="hero-kicker-line" />

          <span>
            ABERTURA DA AVENTURA
          </span>

          <span className="hero-kicker-place">
            EUSÉBIO · CEARÁ
          </span>

        </div>

        <div className="hero-main">

          <div className="hero-copy">

            <img
              className="hero-logo"
              src={logoUrl}
              alt="D20 Hamburgueria"
            />

            <div className="hero-title">

              <span className="hero-title-small">
                A aventura começa aqui.
              </span>

              <h1>
                Role os
                <br />
                dados.
                <br />
                <em>Mate a fome.</em>
              </h1>

            </div>

            <p className="hero-description">
              Uma taverna para quem prefere a aventura
              com brioche, smash e molho da casa.
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
                <span>↗</span>
              </a>

            </div>

          </div>

          <div className="hero-note" aria-hidden="true">

            <span className="hero-note-symbol">
              ✦
            </span>

            <span className="hero-note-label">
              REGISTRO DA TAVERNA
            </span>

            <p>
              Reúna sua party.
              <br />
              A próxima aventura
              <br />
              começa à mesa.
            </p>

            <span className="hero-note-mark">
              D20
            </span>

          </div>

        </div>

      </div>

      <div className="hero-bottom">

        <span>
          REÚNA O GRUPO
        </span>

        <span className="hero-bottom-center">
          D20 · HAMBURGUERIA ARTESANAL
        </span>

        <a
          className="hero-scroll"
          href="#taverna"
        >
          <span>EXPLORAR</span>
          <b>↓</b>
        </a>

      </div>

    </section>
  )
}