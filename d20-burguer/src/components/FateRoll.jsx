import { Suspense, useCallback, useMemo, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion } from 'motion/react'
import { menu, links } from '../data/menu'
import D20Scene from './D20Scene'
import './FateRoll.css'

function getMenuItemFromRoll(number) {
  const index = number <= 10
    ? number - 1
    : number - 11

  return menu[index]
}

function FateResult({ result, item }) {
  return (
    <AnimatePresence mode="wait">
      {result && item && (
        <motion.article
          key={`${result}-${item.code}`}
          className="fate-result-card"
          initial={{
            opacity: 0,
            y: 28,
            rotate: -1.2,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: 0,
          }}
          exit={{
            opacity: 0,
            y: -18,
            rotate: 1,
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="fate-result-sheet">

            <div className="fate-result-header">
              <span>D20 · RESULTADO</span>
              <span>ROLAGEM #{String(result).padStart(2, '0')}</span>
            </div>

            <div className="fate-result-body">

              <div className="fate-result-portrait">
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="fate-result-portrait-overlay" />

                <span className="fate-result-seal">
                  {item.type}
                </span>

                <span className="fate-result-number">
                  {result}
                </span>
              </div>

              <div className="fate-result-information">

                <span className="fate-result-kicker">
                  O dado decidiu
                </span>

                <h3>{item.name}</h3>

                <div className="fate-result-divider">
                  <span />
                  <b>✦</b>
                  <span />
                </div>

                <p className="fate-result-description">
                  {item.description}
                </p>

                <div className="fate-result-meta">
                  <div>
                    <span>HABILIDADE</span>
                    <strong>{item.phrase}</strong>
                  </div>

                  <div>
                    <span>RECOMPENSA</span>
                    <strong>{item.price}</strong>
                  </div>
                </div>

                <a
                  className="fate-result-order"
                  href={links.order}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Pedir esta classe</span>
                  <b>→</b>
                </a>

              </div>

            </div>

            <div className="fate-result-footer">
              <span>AVENTUREIRO ESCOLHIDO</span>
              <span>D20 HAMBURGUERIA · EUSÉBIO</span>
            </div>

          </div>
        </motion.article>
      )}
    </AnimatePresence>
  )
}

function FateRollCanvas({
  result,
  rollToken,
  onRoll,
  onRollComplete,
}) {
  return (
    <div className="fate-canvas-wrap">

      <div className="fate-canvas-glow" />

      <Canvas
        className="fate-canvas"
        camera={{
          position: [0, 0, 3.05],
          fov: 35,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <Suspense fallback={null}>

          <ambientLight intensity={0.35} />

          <directionalLight
            position={[3, 4, 5]}
            intensity={2.4}
          />

          <directionalLight
            position={[-3, 1, 2]}
            intensity={0.8}
          />

          <D20Scene
            result={result}
            rollToken={rollToken}
            onRollStart={onRoll}
            onRollComplete={onRollComplete}
          />

        </Suspense>
      </Canvas>

      <div className="fate-canvas-shadow" />

    </div>
  )
}

export default function FateRoll() {
  const [result, setResult] = useState(null)
  const [rollToken, setRollToken] = useState(0)
  const [rolling, setRolling] = useState(false)
  const [hasRolled, setHasRolled] = useState(false)

  const selectedItem = useMemo(() => {
    if (!result) return null
    return getMenuItemFromRoll(result)
  }, [result])

  const roll = useCallback(() => {
    if (rolling) return

    const nextResult = Math.floor(Math.random() * 20) + 1

    setResult(nextResult)
    setRolling(true)
    setHasRolled(true)
    setRollToken((value) => value + 1)
  }, [rolling])

  const handleRollStart = useCallback(() => {
    if (rolling) return

    roll()
  }, [roll, rolling])

  const handleRollComplete = useCallback(() => {
    setRolling(false)
  }, [])

  return (
    <section className="section fate-roll" id="destino">

      <div className="fate-roll-inner">

        <header className="fate-heading" data-reveal>

          <div className="fate-heading-top">
            <span className="fate-chapter">
              CAPÍTULO III
            </span>

            <span className="fate-heading-note">
              DESTINO · D20
            </span>
          </div>

          <p className="eyebrow">
            O destino
          </p>

          <h2>
            Não sabe qual classe
            <br />
            <em>escolher?</em>
          </h2>

          <p className="fate-intro">
            Não pense demais.
            <br />
            Deixa que o dado decide.
          </p>

        </header>

        <div className="fate-stage" data-reveal>

          <div className="fate-stage-top">
            <span>
              ROLE O DADO
            </span>

            <span>
              01 — 20
            </span>
          </div>

          <FateRollCanvas
            result={result}
            rollToken={rollToken}
            onRoll={handleRollStart}
            onRollComplete={handleRollComplete}
          />

          <div className="fate-stage-bottom">

            <div className="fate-result-number-display">
              {result ? (
                <>
                  <span>RESULTADO</span>
                  <strong>{String(result).padStart(2, '0')}</strong>
                </>
              ) : (
                <>
                  <span>AGUARDANDO</span>
                  <strong>?</strong>
                </>
              )}
            </div>

            <button
              className={`fate-roll-button${rolling ? ' is-rolling' : ''}`}
              type="button"
              onClick={roll}
              disabled={rolling}
            >
              <span>
                {rolling
                  ? 'O dado está rolando...'
                  : hasRolled
                    ? 'Rolar novamente'
                    : 'Clique para rolar'}
              </span>

              <b>✦</b>
            </button>

          </div>

        </div>

        <div className="fate-result-area">

          <div className="fate-result-label" data-reveal>
            <span>FICHA SORTEADA</span>

            <p>
              Cada resultado leva a uma classe.
              <br />
              O próximo movimento é seu.
            </p>
          </div>

          <FateResult
            result={result}
            item={selectedItem}
          />

        </div>

      </div>

    </section>
  )
}