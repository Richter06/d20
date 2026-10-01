import { AnimatePresence, motion } from 'motion/react'
import { links } from '../data/menu'
import './MenuModal.css'

export default function MenuModal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="item-modal"
            role="dialog"
            aria-modal="true"
            aria-label={`Ficha de ${item.name}`}
            initial={{
              opacity: 0,
              y: 40,
              rotate: -1.5,
              scale: .96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 25,
              rotate: 1,
              scale: .97,
            }}
            transition={{
              type: 'spring',
              stiffness: 180,
              damping: 20,
            }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-sheet">

              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Fechar ficha"
                type="button"
              >
                ×
              </button>

              <div className="modal-header">
                <span>D20 · FICHA DE PERSONAGEM</span>
                <span>#{item.code}</span>
              </div>

              <div className="modal-body">

                <div className="modal-portrait">
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="modal-portrait-overlay" />

                  <span className="modal-class-seal">
                    {item.type}
                  </span>

                  <span className="modal-portrait-label">
                    RETRATO DO AVENTUREIRO
                  </span>
                </div>

                <div className="modal-information">

                  <div className="modal-title-row">
                    <div>
                      <span className="modal-label">
                        Personagem
                      </span>

                      <h2>{item.name}</h2>
                    </div>

                    <span className="modal-level">
                      LVL. 01
                    </span>
                  </div>

                  <div className="modal-divider">
                    <span />
                    <b>✦</b>
                    <span />
                  </div>

                  <div className="modal-description">
                    <span className="modal-label">
                      Descrição
                    </span>

                    <p>{item.description}</p>
                  </div>

                  <div className="modal-stats">

                    <div className="modal-stat">
                      <span>CLASSE</span>
                      <strong>{item.type}</strong>
                    </div>

                    <div className="modal-stat">
                      <span>RECOMPENSA</span>
                      <strong>{item.price}</strong>
                    </div>

                  </div>

                </div>
              </div>

              <div className="modal-footer">

                <div className="modal-footer-note">
                  <span>✦</span>
                  <p>
                    Reúna sua party.
                    <br />
                    Esta aventura começa na cozinha.
                  </p>
                </div>

                <a
                  className="modal-order"
                  href={links.order}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Pedir esta classe</span>
                  <b>→</b>
                </a>

              </div>

              <div className="modal-bottom">
                <span>AVENTUREIRO DA CASA</span>
                <span>D20 HAMBURGUERIA · EUSÉBIO</span>
              </div>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}