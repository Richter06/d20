import { motion } from 'motion/react'
import './MenuCard.css'

export default function MenuCard({ item, onOpen }) {
  return (
    <motion.article className="menu-card" whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 260, damping: 22 }} onClick={() => onOpen(item)}>
      <div className="menu-image-wrap">
        <img src={item.image} alt={item.name} loading="lazy" />
        <span className="class-tag">{item.type}</span>
      </div>
      <div className="menu-card-body"><div><p className="menu-class">Classe</p><h3>{item.name}</h3></div><strong>{item.price}</strong></div>
      <p className="menu-phrase">{item.phrase}</p>
      <button className="menu-detail" type="button" onClick={(e) => { e.stopPropagation(); onOpen(item) }}>Abrir ficha</button>
    </motion.article>
  )
}