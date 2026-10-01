import Icon from './Icon'
import { links } from '../data/menu'
import './Tavern.css'

export default function Tavern() {
  return (
    <section className="section tavern" id="taverna">
      <div className="tavern-stage">

        <div className="tavern-intro" data-reveal>
          <span className="tavern-chapter">CAPÍTULO I</span>

          <p className="eyebrow">
            A taverna
          </p>

          <h2>
            Toda aventura
            <br />
            precisa de um
            <br />
            <em>bom lugar para parar.</em>
          </h2>
        </div>

        <div className="tavern-table" data-reveal>

          <div className="tavern-die" aria-hidden="true">
            <span>20</span>
          </div>

          <div className="tavern-coin" aria-hidden="true">
            <span>D20</span>
          </div>

          <article className="tavern-parchment">

            <div className="parchment-top">
              <span>REGISTRO DA TAVERNA</span>
              <span>EUSÉBIO · CEARÁ</span>
            </div>

            <div className="parchment-content">
              <span className="parchment-number">01</span>

              <h3>
                D20
                <br />
                Hamburgueria
              </h3>

              <div className="ornament">
                <span />
                <b>✦</b>
                <span />
              </div>

              <p>
                A D20 é uma hamburgueria artesanal em Eusébio
                onde cada hambúrguer ganha uma classe própria.
              </p>

              <p>
                Smash, pão brioche e molhos da casa entram
                em cena para transformar uma refeição comum
                em parte da aventura.
              </p>

              <a
                className="parchment-link"
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <span>Conhecer a taverna</span>
                <Icon name="instagram" />
              </a>
            </div>

            <div className="parchment-bottom">
              <span>REÚNA SUA PARTY</span>
              <span>ESCOLHA SUA CLASSE</span>
              <span>ROLE OS DADOS</span>
            </div>

          </article>

          <div className="tavern-side-note">
            <span className="side-note-mark">✦</span>

            <p>
              Uma taverna para
              <br />
              aventureiros famintos.
            </p>

            <span className="side-note-small">
              Desde o primeiro dado
            </span>
          </div>

        </div>

        <div className="tavern-footer" data-reveal>
          <div className="tavern-stat">
            <span className="stat-number">D20</span>
            <span className="stat-label">O dado da casa</span>
          </div>

          <div className="tavern-footer-copy">
            <span>ADVENTURE AWAITS</span>
            <p>
              Entre, escolha sua classe e deixe a fome
              decidir o próximo movimento.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}