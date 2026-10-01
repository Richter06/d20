import { useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import D20Scene from './components/D20Scene'
import { gallery, hours, links, menu } from './data/menu'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

const logoUrl = 'https://meuairgo.com.br/assets/uploads/images/users/image-perfil-joao-brasil-16-03-2023-18-46.png'

function Icon({ name }) {
  const paths = {
    sword: 'M7 17 17 7m0 0V4m0 3h-3M6 18l-2 2m4-4-2-2 2-2 2 2-2 2Z',
    map: 'M4 6l5-2 6 2 5-2v14l-5 2-6-2-5 2V6Zm5-2v14m6-12v14',
    clock: 'M12 7v5l3 2m7-2a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z',
    flame: 'M12 21c4 0 7-2.8 7-7 0-2.8-1.5-5.2-4-7.5.2 2-1 3.4-2.3 4.2.2-3.8-1.8-6.2-4.7-8.7.2 4-3 6.2-3 10.3C5 18 8 21 12 21Z',
    instagram: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm5-1h.01',
  }
  return <svg viewBox="0 0 24 24" className="icon" aria-hidden="true"><path d={paths[name]} /></svg>
}

function App() {
  const root = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-kicker', { opacity: 0, y: 16, duration: .6 })
        .from('.hero-logo', { opacity: 0, scale: .9, duration: .8 }, '-=.3')
        .from('.hero-copy > *', { opacity: 0, y: 24, duration: .7, stagger: .08 }, '-=.4')
        .from('.hero-actions', { opacity: 0, y: 18, duration: .5 }, '-=.3')
        .from('.hero-d20', { opacity: 0, scale: .8, duration: 1 }, '-=.7')

      gsap.to('.hero-d20', { yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero-video', { scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.utils.toArray('[data-reveal]').forEach((el) => gsap.from(el, { opacity: 0, y: 34, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 84%', once: true } }))
      gsap.to('.quest-line', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.quest', start: 'top 75%', end: 'bottom 65%', scrub: true } })
    }, root)
    return () => ctx.revert()
  }, [])

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div ref={root} className="site">
      <header className="nav">
        <button className="brand" onClick={() => scrollTo('#top')} aria-label="Início"><img src={logoUrl} alt="D20" /></button>
        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <button onClick={() => scrollTo('#cardapio')}>Cardápio</button>
          <button onClick={() => scrollTo('#taverna')}>A taverna</button>
          <button onClick={() => scrollTo('#visite')}>Visite</button>
        </nav>
        <a className="nav-order" href={links.menu} target="_blank" rel="noreferrer">Ver cardápio</a>
        <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-label="Menu"><span /><span /></button>
      </header>

      <main id="top">
        <section className="hero">
          <video className="hero-video" autoPlay muted loop playsInline poster={menu[0].image} aria-hidden="true">
            <source src="/videos/dragon-hero.mp4" type="video/mp4" />
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
              <a className="button button-ghost" href={links.menu} target="_blank" rel="noreferrer">Pedir agora</a>
            </div>
          </div>
          <span className="hero-scroll">Desça pela masmorra</span>
        </section>

        <div className="marquee"><div>SMASH ARTESANAL <span>✦</span> MOLHOS DA CASA <span>✦</span> EUSÉBIO <span>✦</span> REÚNA O GRUPO <span>✦</span> </div></div>

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

        <section className="section menu-section" id="cardapio">
          <div className="section-heading menu-heading" data-reveal>
            <p className="eyebrow">O cardápio</p>
            <h2>Escolha sua <em>classe.</em></h2>
            <p>Os nomes e ingredientes abaixo seguem o cardápio público atual da D20.</p>
          </div>
          <div className="menu-grid">
            {menu.map((item) => (
              <motion.article key={item.code} className="menu-card" whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} onClick={() => setActiveItem(item)}>
                <div className="menu-image-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className="class-tag">{item.type}</span>
                </div>
                <div className="menu-card-body"><div><p className="menu-class">Classe</p><h3>{item.name}</h3></div><strong>{item.price}</strong></div>
                <p className="menu-phrase">{item.phrase}</p>
                <button className="menu-detail" type="button">Abrir ficha</button>
              </motion.article>
            ))}
          </div>
          <div className="menu-cta" data-reveal><p>Já escolheu seu personagem?</p><a className="button button-primary" href={links.menu} target="_blank" rel="noreferrer">Partir para o pedido</a></div>
        </section>

        <section className="quest">
          <div className="quest-backdrop" />
          <div className="quest-content" data-reveal>
            <p className="eyebrow">Missão disponível</p>
            <h2>Reúna seu grupo.<br /><em>A fome não espera.</em></h2>
            <p>Peça pelo cardápio online ou fale diretamente com a D20 pelo WhatsApp.</p>
            <div className="quest-actions">
              <a className="button button-primary" href={links.menu} target="_blank" rel="noreferrer">Abrir cardápio</a>
              <a className="button button-outline" href={links.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </div>
          <div className="quest-line" />
        </section>

        <section className="section gallery">
          <div className="section-heading" data-reveal><p className="eyebrow">Da cozinha</p><h2>Feito para abrir o <em>apetite.</em></h2></div>
          <div className="gallery-grid">
            {gallery.map((item, index) => <figure key={item.code} className={`gallery-item gallery-item-${index + 1}`} data-reveal><img src={item.image} alt={item.name} loading="lazy" /><figcaption>{item.name}</figcaption></figure>)}
          </div>
        </section>

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

        <section className="final-cta">
          <div className="final-rune">D20</div>
          <p className="eyebrow">A aventura está servida</p>
          <h2>Seu próximo hambúrguer<br /><em>já tem uma classe.</em></h2>
          <a className="button button-primary" href={links.menu} target="_blank" rel="noreferrer">Fazer meu pedido</a>
        </section>
      </main>

      <footer className="footer">
        <div><img src={logoUrl} alt="D20" /><p>Hamburgueria artesanal em Eusébio.</p></div>
        <div className="footer-links"><a href={links.instagram} target="_blank" rel="noreferrer"><Icon name="instagram" /> Instagram</a><a href={links.ifood} target="_blank" rel="noreferrer">iFood</a><a href={links.review} target="_blank" rel="noreferrer">Avaliar</a></div>
        <small>Conceito não oficial · conteúdo baseado nas informações públicas atuais da D20.</small>
      </footer>

      <a className="floating-order" href={links.menu} target="_blank" rel="noreferrer">Pedir agora</a>

      <AnimatePresence>
        {activeItem && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveItem(null)}>
          <motion.div className="item-modal" role="dialog" aria-modal="true" initial={{ opacity: 0, y: 28, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .97 }} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveItem(null)} aria-label="Fechar">×</button>
            <img src={activeItem.image} alt="" />
            <div className="modal-copy"><p className="eyebrow">{activeItem.type}</p><h2>{activeItem.name}</h2><p>{activeItem.description}</p><div className="modal-bottom"><strong>{activeItem.price}</strong><a className="button button-primary" href={links.menu} target="_blank" rel="noreferrer">Pedir esta classe</a></div></div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </div>
  )
}

export default App
