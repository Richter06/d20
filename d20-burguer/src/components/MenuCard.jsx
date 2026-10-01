import { motion } from 'motion/react'
import './MenuCard.css'

export default function MenuCard({ item, onOpen }) {
  return (
    <motion.article
      className="menu-card"
      whileHover={{
        y: -10,
        rotate: 0,
      }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 22,
      }}
      onClick={() => onOpen(item)}
    >
      <div className="menu-card-sheet">

        <div className="menu-card-header">
          <span>D20 · FICHA</span>
          <span>#{item.code}</span>
        </div>

        <div className="menu-portrait">
          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
          />

          <div className="menu-portrait-overlay" />

          <span className="menu-class-seal">
            {item.type}
          </span>
        </div>

        <div className="menu-card-main">

          <div className="menu-character-heading">
            <div>
              <span className="menu-class-label">
                Classe
              </span>

              <h3>{item.name}</h3>
            </div>

            <span className="menu-level">
              LVL. 01
            </span>
          </div>

          <div className="menu-divider">
            <span />
            <b>✦</b>
            <span />
          </div>

          <div className="menu-character-info">

            <div className="menu-info-block">
              <span>HABILIDADE</span>
              <p>{item.phrase}</p>
            </div>

            <div className="menu-info-block">
              <span>RECOMPENSA</span>
              <strong>{item.price}</strong>
            </div>

          </div>

        </div>

        <button
          className="menu-detail"
          type="button"
          onClick={(event) => {
            event.stopPropagation()
            onOpen(item)
          }}
        >
          <span>Abrir ficha</span>
          <span className="menu-detail-mark">✦</span>
        </button>

        <div className="menu-card-footer">
          <span>AVENTUREIRO</span>
          <span>D20 HAMBURGUERIA</span>
        </div>

      </div>
    </motion.article>
  )
}