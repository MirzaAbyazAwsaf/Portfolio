import { useLayoutEffect, useMemo, useRef, useState } from 'react'
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
  const beltRef = useRef(null)
  const trackRef = useRef(null)
  const [copies, setCopies] = useState(2)

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      const belt = beltRef.current
      if (!track || !belt || !track.children.length) return

      const setWidth = (track.scrollWidth / track.children.length) * items.length
      const container = belt.clientWidth
      const needed = Math.max(2, Math.ceil(container / setWidth) + 1)

      track.style.setProperty('--belt-shift', `${-setWidth}px`)

      if (needed !== copies) setCopies(needed)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [items, copies])

  const list = useMemo(
    () => Array.from({ length: copies }, () => items).flat(),
    [items, copies],
  )

  return (
    <div ref={beltRef} className={`belt belt-${direction}`}>
      <div ref={trackRef} className="belt-track">
        {list.map((item, i) => (
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
