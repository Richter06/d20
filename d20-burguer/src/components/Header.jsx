import { useState } from 'react'

import logoUrl from '../assets/d20Logo.png'
import { links } from '../data/menu'

import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth',
    })

    setMenuOpen(false)
  }

  return (
    <header className={`nav ${menuOpen ? 'is-menu-open' : ''}`}>

      <button
        className="brand"
        onClick={() => scrollTo('#top')}
        aria-label="Voltar ao início"
      >
        <img
          src={logoUrl}
          alt="D20 Hamburgueria"
        />
      </button>

      <nav
        id="main-navigation"
        className={`nav-links ${menuOpen ? 'is-open' : ''}`}
        aria-label="Navegação principal"
      >
        <button onClick={() => scrollTo('#cardapio')}>
          Cardápio
        </button>

        <button onClick={() => scrollTo('#taverna')}>
          A taverna
        </button>

        <button onClick={() => scrollTo('#visite')}>
          Visite
        </button>
      </nav>

      <div className="nav-actions">

        <a
          className="nav-order"
          href={links.order}
          target="_blank"
          rel="noreferrer"
        >
          Pedir agora
          <span>↗</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          <span />
          <span />
        </button>

      </div>

    </header>
  )
}