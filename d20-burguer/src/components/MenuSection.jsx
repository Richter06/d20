import { useState } from 'react'
import { links, menu } from '../data/menu'
import MenuCard from './MenuCard'
import MenuModal from './MenuModal'
import './MenuSection.css'

export default function MenuSection() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <section className="section menu-section" id="cardapio">
      <div className="section-heading menu-heading" data-reveal>
        <p className="eyebrow">O cardápio</p>
        <h2>Escolha sua <em>classe.</em></h2>
        <p>Os nomes e ingredientes abaixo seguem o cardápio público atual da D20.</p>
      </div>
      <div className="menu-grid">
        {menu.map((item) => <MenuCard key={item.code} item={item} onOpen={setActiveItem} />)}
      </div>
      <div className="menu-cta" data-reveal><p>Já escolheu seu personagem?</p><a className="button button-primary" href={links.order} target="_blank" rel="noreferrer">Partir para o pedido</a></div>
      <MenuModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  )
}