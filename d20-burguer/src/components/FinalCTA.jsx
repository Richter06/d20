import { links } from '../data/menu'
import './FinalCTA.css'

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-rune">D20</div>
      <p className="eyebrow">A aventura está servida</p>
      <h2>Seu próximo hambúrguer<br /><em>já tem uma classe.</em></h2>
      <a className="button button-primary" href={links.order} target="_blank" rel="noreferrer">Fazer meu pedido</a>
    </section>
  )
}