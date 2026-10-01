import { gallery } from '../data/menu'
import './Gallery.css'

export default function Gallery() {
  return (
    <section className="section gallery">
      <div className="section-heading" data-reveal><p className="eyebrow">Da cozinha</p><h2>Feito para abrir o <em>apetite.</em></h2></div>
      <div className="gallery-grid">
        {gallery.map((item, index) => <figure key={item.code} className={`gallery-item gallery-item-${index + 1}`} data-reveal><img src={item.image} alt={item.name} loading="lazy" /><figcaption>{item.name}</figcaption></figure>)}
      </div>
    </section>
  )
}