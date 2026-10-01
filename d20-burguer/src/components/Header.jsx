import { useState } from 'react'
import { links } from '../data/menu'
import './Header.css'

const logoUrl = 'https://meuairgo.com.br/assets/uploads/images/users/image-perfil-joao-brasil-16-03-2023-18-46.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header className="nav">
      <button className="brand" onClick={() => scrollTo('#top')} aria-label="Início"><img src={logoUrl} alt="D20" /></button>
      <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        <button onClick={() => scrollTo('#cardapio')}>Cardápio</button>
        <button onClick={() => scrollTo('#taverna')}>A taverna</button>
        <button onClick={() => scrollTo('#visite')}>Visite</button>
      </nav>
      <a className="nav-order" href={links.order} target="_blank" rel="noreferrer">Ver cardápio</a>
      <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Menu"><span /><span /></button>
    </header>
  )
}