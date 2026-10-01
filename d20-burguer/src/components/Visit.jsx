import Icon from './Icon'
import { hours, links } from '../data/menu'
import './Visit.css'

export default function Visit() {
  return (
    <section className="section visit" id="visite">
      <div className="visit-intro" data-reveal>
        <p className="eyebrow">A taverna fica aqui</p>
        <h2>Quando a fome chamar, você já sabe <em>onde ir.</em></h2>
        <p>Guaribas, Eusébio — Ceará.</p>
        <a className="button button-primary" href={links.maps} target="_blank" rel="noreferrer">Encontrar a taverna <Icon name="map" /></a>
      </div>
      <div className="visit-info">
        <div className="info-block" data-reveal><span className="info-icon"><Icon name="map" /></span><h3>Endereço</h3><p>R. Maria Fernandes de Sousa, 58<br />Guaribas · Eusébio, CE · 61769-500</p></div>
        <div className="info-block" data-reveal><span className="info-icon"><Icon name="clock" /></span><h3>Horários</h3><div className="hours">{hours.map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></div>
        <div className="info-block" data-reveal><span className="info-icon"><Icon name="flame" /></span><h3>Fale com a guilda</h3><p><a href={links.whatsapp} target="_blank" rel="noreferrer">WhatsApp · (85) 98937-9116</a></p><p><a href={links.instagram} target="_blank" rel="noreferrer">@d20burger</a></p></div>
      </div>
    </section>
  )
}