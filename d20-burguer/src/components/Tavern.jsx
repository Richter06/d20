import Icon from './Icon'
import { links } from '../data/menu'
import './Tavern.css'

export default function Tavern() {
  return (
    <section className="section intro" id="taverna">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">A taverna</p>
        <h2>Uma boa aventura começa quando alguém diz: <em>“vamos comer?”</em></h2>
      </div>
      <div className="intro-grid">
        <div className="intro-copy" data-reveal>
          <p>A D20 é uma hamburgueria artesanal em Eusébio que transformou classes de RPG em hambúrgueres com personalidade própria.</p>
          <p>O cardápio mistura smash, pão brioche e molhos da casa com uma brincadeira que faz parte da identidade da casa: cada lanche tem sua classe.</p>
          <a className="text-link" href={links.instagram} target="_blank" rel="noreferrer">Ver a guilda no Instagram <Icon name="instagram" /></a>
        </div>
        <div className="tavern-card" data-reveal>
          <span className="card-mark">D20</span>
          <p>Reúna a party, escolha sua classe e deixe a cozinha cuidar do resto.</p>
          <small>Uma taverna para aventureiros famintos</small>
        </div>
      </div>
    </section>
  )
}