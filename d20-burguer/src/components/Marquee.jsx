import './Marquee.css'

const items = [
  'SMASH ARTESANAL',
  'MOLHOS DA CASA',
  'EUSÉBIO',
  'REÚNA O GRUPO',
  'D20',
  'ROLE OS DADOS',
  'FOME DE AVENTURA',
  'HAMBÚRGUER ARTESANAL',
  'QUEST DA FOME',
  'A TAVERNA',
  'SABOR CRÍTICO',
  'ESCOLHA SUA CLASSE',
  'PARTY COMPLETA',
  'BATALHA CONTRA A FOME',
  'RECOMPENSA DESBLOQUEADA',
  'MESA POSTA',
]

function MarqueeContent() {
  return (
    <>
      {items.map((item, index) => (
        <span className="marquee-item" key={`${item}-${index}`}>
          {item}
          <b>✦</b>
        </span>
      ))}
    </>
  )
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label="D20 Burger">
      <div className="marquee-track">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  )
}