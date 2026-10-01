import Icon from './Icon'

import { hours, links } from '../data/menu'

import './Visit.css'

export default function Visit() {
  return (
    <section className="section visit" id="visite">

      <div className="visit-intro" data-reveal>

        <div className="visit-chapter">
          <span>CAPÍTULO IV</span>
          <span>LOCALIZAÇÃO · QUEST</span>
        </div>

        <p className="eyebrow">
          A taverna fica aqui
        </p>

        <h2>
          Quando a fome chamar,
          <br />
          você já sabe <em>onde ir.</em>
        </h2>

        <p className="visit-intro-copy">
          Toda aventura precisa de um ponto de encontro.
          <br />
          A nossa fica em Guaribas, Eusébio.
        </p>

        <a
          className="button button-primary"
          href={links.maps}
          target="_blank"
          rel="noreferrer"
        >
          Encontrar a taverna
          <Icon name="map" />
        </a>

      </div>

      <div className="visit-content">

        <div className="quest-map" data-reveal>

          <div className="quest-map-header">
            <span>MAPA DA AVENTURA</span>
            <span>QUEST · 004</span>
          </div>

          <div className="quest-map-canvas">

            <div className="map-compass">
              <span>N</span>
              <i />
              <b>✦</b>
              <i />
              <span>S</span>
            </div>

            <div className="map-route map-route-one" />
            <div className="map-route map-route-two" />

            <div className="map-location map-location-start">
              <span className="map-location-dot" />
              <div>
                <small>PARTIDA</small>
                <strong>Seu caminho</strong>
              </div>
            </div>

            <div className="map-location map-location-tavern">
              <span className="map-location-marker">
                <Icon name="flame" />
              </span>

              <div>
                <small>DESTINO</small>
                <strong>D20 Taverna</strong>
                <span>Guaribas · Eusébio</span>
              </div>
            </div>

            <div className="map-location map-location-landmark landmark-one">
              <span>✦</span>
              <small>GUARIBAS</small>
            </div>

            <div className="map-location map-location-landmark landmark-two">
              <span>◆</span>
              <small>EUSÉBIO</small>
            </div>

            <div className="map-terrain terrain-one" />
            <div className="map-terrain terrain-two" />
            <div className="map-terrain terrain-three" />

            <span className="map-label map-label-one">
              CAMINHO DA PARTY
            </span>

            <span className="map-label map-label-two">
              TERRAS DE EUSÉBIO
            </span>

          </div>

          <div className="quest-map-footer">
            <span>✦</span>
            <p>
              O caminho é seu.
              <br />
              A recompensa está na taverna.
            </p>

            <a
              href={links.maps}
              target="_blank"
              rel="noreferrer"
            >
              ABRIR NO MAPA
              <Icon name="map" />
            </a>
          </div>

        </div>

        <div className="visit-info">

          <div className="info-block" data-reveal>

            <div className="info-block-top">
              <span className="info-number">01</span>

              <span className="info-icon">
                <Icon name="map" />
              </span>
            </div>

            <span className="info-label">
              LOCAL DA QUEST
            </span>

            <h3>
              Endereço
            </h3>

            <p>
              R. Maria Fernandes de Sousa, 58
              <br />
              Guaribas · Eusébio, CE · 61769-500
            </p>

          </div>

          <div className="info-block" data-reveal>

            <div className="info-block-top">
              <span className="info-number">02</span>

              <span className="info-icon">
                <Icon name="clock" />
              </span>
            </div>

            <span className="info-label">
              HORÁRIO DA AVENTURA
            </span>

            <h3>
              Horários
            </h3>

            <div className="hours">
              {hours.map(([day, time]) => (
                <div key={day}>
                  <span>{day}</span>
                  <strong>{time}</strong>
                </div>
              ))}
            </div>

          </div>

          <div className="info-block" data-reveal>

            <div className="info-block-top">
              <span className="info-number">03</span>

              <span className="info-icon">
                <Icon name="flame" />
              </span>
            </div>

            <span className="info-label">
              CONTATO DA GUILDA
            </span>

            <h3>
              Fale com a guilda
            </h3>

            <div className="guild-links">

              <a
                href={links.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                <span>WhatsApp</span>
                <strong>(85) 98937-9116</strong>
                <b>→</b>
              </a>

              <a
                href={links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <span>Instagram</span>
                <strong>@d20burger</strong>
                <b>→</b>
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}