import { links } from '../data/menu'
import './Quest.css'

export default function Quest() {
  return (
    <section className="quest">
      <div className="quest-backdrop" />
      <div className="quest-content" data-reveal>
        <p className="eyebrow">Missão disponível</p>
        <h2>Reúna seu grupo.<br /><em>A fome não espera.</em></h2>
        <p>Peça pelo cardápio online ou fale diretamente com a D20 pelo WhatsApp.</p>
        <div className="quest-actions">
          <a className="button button-primary" href={links.order} target="_blank" rel="noreferrer">Abrir cardápio</a>
          <a className="button button-outline" href={links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
      <div className="quest-line" />
    </section>
  )
}