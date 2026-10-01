import D20Scene from './D20Scene'
import Icon from './Icon'
import { links, menu } from '../data/menu'
import './Hero.css'

const logoUrl = 'https://meuairgo.com.br/assets/uploads/images/users/image-perfil-joao-brasil-16-03-2023-18-46.png'

export default function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop playsInline poster={menu[0].image} aria-hidden="true">
        <source src="../public/videos/fire.mp4" type="video/mp4" />
      </video>
      <div className="hero-fallback" />
      <div className="hero-vignette" />
      <div className="hero-d20"><D20Scene /></div>
      <div className="hero-content">
        <p className="hero-kicker">Hamburgueria artesanal · Eusébio</p>
        <img className="hero-logo" src={logoUrl} alt="D20 Hamburgueria" />
        <div className="hero-copy">
          <h1>Role os dados.<br /><em>Mate a fome.</em></h1>
          <p>Uma taverna para quem prefere a aventura com brioche, smash e molho da casa.</p>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href="#cardapio">Escolher minha classe <Icon name="sword" /></a>
          <a className="button button-ghost" href={links.order} target="_blank" rel="noreferrer">Pedir agora</a>
        </div>
      </div>
      <span className="hero-scroll">Desça pela masmorra</span>
    </section>
  )
}