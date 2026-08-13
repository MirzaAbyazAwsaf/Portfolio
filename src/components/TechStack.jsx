import { techStackTop, techStackBottom } from '../data'
import Reveal from './Reveal'

function TechLogo({ item }) {
  return (
    <div className="belt-item">
      <div className="belt-logo">
        {item.icon ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d={item.icon} />
          </svg>
        ) : (
          <img src={item.logo} alt={`${item.name} logo`} loading="lazy" />
        )}
      </div>
      <span className="belt-name">{item.name}</span>
    </div>
  )
}

function Belt({ items, direction }) {
  return (
    <div className={`belt belt-${direction}`}>
      <div className="belt-track">
        {[...items, ...items].map((item, i) => (
          <TechLogo key={`${item.name}-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-num"></span> Tech Stack
        </h2>
      </Reveal>

      <div className="stack-belts">
        <Belt items={techStackTop} direction="left" />
        <Belt items={techStackBottom} direction="right" />
      </div>
    </section>
  )
}
