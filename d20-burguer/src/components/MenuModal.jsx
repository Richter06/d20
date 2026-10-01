import { AnimatePresence, motion } from 'motion/react'
import { links } from '../data/menu'
import './MenuModal.css'

export default function MenuModal({ item, onClose }) {
  return (
    <AnimatePresence>
      {item && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
        <motion.div className="item-modal" role="dialog" aria-modal="true" initial={{ opacity: 0, y: 28, scale: .97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .97 }} onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>
          <img src={item.image} alt="" />
          <div className="modal-copy"><p className="eyebrow">{item.type}</p><h2>{item.name}</h2><p>{item.description}</p><div className="modal-bottom"><strong>{item.price}</strong><a className="button button-primary" href={links.order} target="_blank" rel="noreferrer">Pedir esta classe</a></div></div>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  )
}