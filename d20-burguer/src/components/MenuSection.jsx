import { useState } from 'react'
import { links, menu } from '../data/menu'
import MenuCard from './MenuCard'
import MenuModal from './MenuModal'
import './MenuSection.css'

export default function MenuSection() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <section className="section menu-section" id="cardapio">

      <div className="menu-section-inner">

        <header className="menu-heading" data-reveal>
          <div className="menu-heading-top">
            <span className="menu-chapter">
              CAPÍTULO II
            </span>

            <span className="menu-heading-note">
              REGISTRO DE AVENTUREIROS
            </span>
          </div>

          <p className="eyebrow">
            O cardápio
          </p>

          <h2>
            Escolha sua
            <br />
            <em>classe.</em>
          </h2>

          <div className="menu-heading-bottom">
            <p>
              Dez aventureiros. Dez classes.
              <br />
              Uma só missão: matar a fome.
            </p>

            <span className="menu-count">
              <strong>{String(menu.length).padStart(2, '0')}</strong>
              personagens disponíveis
            </span>
          </div>
        </header>

        <div className="menu-table" data-reveal>

          <div className="menu-table-mark menu-table-mark-left">
            <span>✦</span>
            <small>
              PARTY
              <br />
              READY
            </small>
          </div>

          <div className="menu-grid">
            {menu.map((item) => (
              <MenuCard
                key={item.code}
                item={item}
                onOpen={setActiveItem}
              />
            ))}
          </div>

          <div className="menu-table-mark menu-table-mark-right">
            <span>D20</span>
            <small>
              ROLE
              <br />
              OS DADOS
            </small>
          </div>

        </div>

        <footer className="menu-cta" data-reveal>
          <div className="menu-cta-copy">
            <span className="menu-cta-label">
              PRÓXIMA AVENTURA
            </span>

            <p>
              Já escolheu seu personagem?
            </p>
          </div>

          <a
            className="menu-order"
            href={links.order}
            target="_blank"
            rel="noreferrer"
          >
            <span>Partir para o pedido</span>
            <b>→</b>
          </a>
        </footer>

      </div>

      <MenuModal
        item={activeItem}
        onClose={() => setActiveItem(null)}
      />

    </section>
  )
}