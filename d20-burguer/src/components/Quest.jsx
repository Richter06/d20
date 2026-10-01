import { links } from '../data/menu'
import './Quest.css'

export default function Quest() {
  return (
    <section className="quest" id="missao">
      <div className="quest-table" aria-hidden="true">
        <span className="quest-d20 quest-d20-one">20</span>
        <span className="quest-d20 quest-d20-two">8</span>
        <span className="quest-coin">D20</span>
      </div>

      <div className="quest-content" data-reveal>
        <div className="quest-scroll">
          <div className="quest-scroll-top">
            <span>MISSÃO DISPONÍVEL</span>
            <span>QUEST · 002</span>
          </div>

          <div className="quest-scroll-body">
            <span className="quest-symbol">✦</span>

            <p className="quest-eyebrow">Chamado da taverna</p>

            <h2>
              Reúna seu
              <br />
              <em>grupo.</em>
            </h2>

            <p className="quest-description">
              A fome apareceu no mapa.
              <br />
              Só existe uma maneira de derrotá-la.
            </p>

            <div className="quest-objective">
              <span className="quest-objective-label">OBJETIVO DA MISSÃO</span>

              <div className="quest-objective-row">
                <span className="quest-check">✓</span>
                <span>Escolher sua classe</span>
              </div>

              <div className="quest-objective-row">
                <span className="quest-check">✓</span>
                <span>Reunir a party</span>
              </div>

              <div className="quest-objective-row">
                <span className="quest-check">✓</span>
                <span>Mandar a fome para o além</span>
              </div>
            </div>

            <div className="quest-reward">
              <span>RECOMPENSA</span>
              <strong>+100% SATISFAÇÃO</strong>
            </div>

            <div className="quest-actions">
              <a
                className="quest-choice quest-choice-primary"
                href={links.order}
                target="_blank"
                rel="noreferrer"
              >
                <span className="quest-choice-number">01</span>

                <span className="quest-choice-copy">
                  <small>ESCOLHA SUA AVENTURA</small>
                  <strong>Abrir cardápio</strong>
                </span>

                <span className="quest-choice-arrow">→</span>
              </a>

              <a
                className="quest-choice"
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <span className="quest-choice-number">02</span>

                <span className="quest-choice-copy">
                  <small>FALAR COM A TAVERNA</small>
                  <strong>WhatsApp</strong>
                </span>

                <span className="quest-choice-arrow">→</span>
              </a>
            </div>
          </div>

          <div className="quest-scroll-bottom">
            <span>REÚNA SUA PARTY</span>
            <span>ROLE OS DADOS</span>
            <span>BOA AVENTURA</span>
          </div>
        </div>
      </div>
    </section>
  )
}