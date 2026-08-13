function seededRandom(seed) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const rnd = seededRandom(20260813)

const STARS = Array.from({ length: 70 }, () => ({
  left: rnd() * 100,
  top: rnd() * 62,
  size: 2 + rnd() * 2,
  delay: rnd() * 4,
  dur: 2.5 + rnd() * 3.5,
}))

const CLOUDS = [
  { id: 'cloud-a', top: '12%', scale: 1.2, dur: '90s', delay: '-8s', opacity: 1 },
  { id: 'cloud-b', top: '26%', scale: 0.85, dur: '110s', delay: '-36s', opacity: 0.9 },
  { id: 'cloud-c', top: '5%', scale: 0.6, dur: '75s', delay: '-20s', opacity: 0.85 },
  { id: 'cloud-d', top: '36%', scale: 1.05, dur: '100s', delay: '-52s', opacity: 0.9 },
  { id: 'cloud-e', top: '17%', scale: 0.75, dur: '85s', delay: '-28s', opacity: 0.95 },
]

const COINS = Array.from({ length: 2 }, () => ({
  left: 5 + Math.random() * 85,
  top: 8 + Math.random() * 38,
  delay: Math.random() * 5,
}))

const QUESTION_BLOCKS = Array.from({ length: 1 }, () => ({
  left: 5 + Math.random() * 85,
  top: 8 + Math.random() * 38,
}))

function PixelCloud({ top, scale, dur, delay, opacity }) {
  return (
    <svg
      className="pixel-cloud"
      style={{ top, '--scale': scale, '--op': opacity, '--dur': dur, '--delay': delay }}
      viewBox="0 0 96 40"
      aria-hidden="true"
    >
      <g shapeRendering="crispEdges">
        <rect x="32" y="0" width="8" height="8" fill="#ffffff" />
        <rect x="40" y="0" width="8" height="8" fill="#ffffff" />
        <rect x="16" y="8" width="8" height="8" fill="#ffffff" />
        <rect x="24" y="8" width="8" height="8" fill="#eef5ff" />
        <rect x="32" y="8" width="8" height="8" fill="#ffffff" />
        <rect x="40" y="8" width="8" height="8" fill="#eef5ff" />
        <rect x="48" y="8" width="8" height="8" fill="#ffffff" />
        <rect x="56" y="8" width="8" height="8" fill="#ffffff" />
        <rect x="8" y="16" width="8" height="8" fill="#ffffff" />
        <rect x="16" y="16" width="8" height="8" fill="#ffffff" />
        <rect x="24" y="16" width="8" height="8" fill="#ffffff" />
        <rect x="32" y="16" width="8" height="8" fill="#eef5ff" />
        <rect x="40" y="16" width="8" height="8" fill="#ffffff" />
        <rect x="48" y="16" width="8" height="8" fill="#eef5ff" />
        <rect x="56" y="16" width="8" height="8" fill="#ffffff" />
        <rect x="64" y="16" width="8" height="8" fill="#ffffff" />
        <rect x="72" y="16" width="8" height="8" fill="#ffffff" />
        <rect x="8" y="24" width="8" height="8" fill="#d8e8ff" />
        <rect x="16" y="24" width="8" height="8" fill="#ffffff" />
        <rect x="24" y="24" width="8" height="8" fill="#d8e8ff" />
        <rect x="32" y="24" width="8" height="8" fill="#ffffff" />
        <rect x="40" y="24" width="8" height="8" fill="#d8e8ff" />
        <rect x="48" y="24" width="8" height="8" fill="#ffffff" />
        <rect x="56" y="24" width="8" height="8" fill="#d8e8ff" />
        <rect x="64" y="24" width="8" height="8" fill="#ffffff" />
      </g>
    </svg>
  )
}

function PixelSun() {
  return (
    <svg className="pixel-sun" viewBox="0 0 64 64" aria-hidden="true">
      <g shapeRendering="crispEdges">
        <rect x="28" y="0" width="8" height="8" fill="#ffd21a" />
        <rect x="28" y="56" width="8" height="8" fill="#ffd21a" />
        <rect x="0" y="28" width="8" height="8" fill="#ffd21a" />
        <rect x="56" y="28" width="8" height="8" fill="#ffd21a" />
        <rect x="12" y="12" width="8" height="8" fill="#ffd21a" />
        <rect x="44" y="12" width="8" height="8" fill="#ffd21a" />
        <rect x="12" y="44" width="8" height="8" fill="#ffd21a" />
        <rect x="44" y="44" width="8" height="8" fill="#ffd21a" />
        <rect x="16" y="16" width="8" height="8" fill="#fff3a0" />
        <rect x="24" y="16" width="8" height="8" fill="#ffe45d" />
        <rect x="32" y="16" width="8" height="8" fill="#ffe45d" />
        <rect x="40" y="16" width="8" height="8" fill="#ffd21a" />
        <rect x="16" y="24" width="8" height="8" fill="#ffe45d" />
        <rect x="24" y="24" width="8" height="8" fill="#ffd21a" />
        <rect x="32" y="24" width="8" height="8" fill="#ffd21a" />
        <rect x="40" y="24" width="8" height="8" fill="#ffe45d" />
        <rect x="16" y="32" width="8" height="8" fill="#ffe45d" />
        <rect x="24" y="32" width="8" height="8" fill="#ffd21a" />
        <rect x="32" y="32" width="8" height="8" fill="#ffd21a" />
        <rect x="40" y="32" width="8" height="8" fill="#ffe45d" />
        <rect x="16" y="40" width="8" height="8" fill="#ffd21a" />
        <rect x="24" y="40" width="8" height="8" fill="#ffe45d" />
        <rect x="32" y="40" width="8" height="8" fill="#ffe45d" />
        <rect x="40" y="40" width="8" height="8" fill="#fff3a0" />
      </g>
    </svg>
  )
}

function PixelBush({ style }) {
  return (
    <svg className="pixel-bush" viewBox="0 0 80 40" style={style} aria-hidden="true">
      <g shapeRendering="crispEdges">
        <rect x="24" y="0" width="8" height="8" fill="currentColor" />
        <rect x="32" y="0" width="8" height="8" fill="currentColor" />
        <rect x="8" y="8" width="8" height="8" fill="currentColor" />
        <rect x="16" y="8" width="8" height="8" fill="currentColor" />
        <rect x="24" y="8" width="8" height="8" fill="currentColor" />
        <rect x="32" y="8" width="8" height="8" fill="currentColor" />
        <rect x="40" y="8" width="8" height="8" fill="currentColor" />
        <rect x="48" y="8" width="8" height="8" fill="currentColor" />
        <rect x="56" y="8" width="8" height="8" fill="currentColor" />
        <rect x="0" y="16" width="8" height="8" fill="currentColor" />
        <rect x="8" y="16" width="8" height="8" fill="currentColor" />
        <rect x="16" y="16" width="8" height="8" fill="currentColor" />
        <rect x="24" y="16" width="8" height="8" fill="currentColor" />
        <rect x="32" y="16" width="8" height="8" fill="currentColor" />
        <rect x="40" y="16" width="8" height="8" fill="currentColor" />
        <rect x="48" y="16" width="8" height="8" fill="currentColor" />
        <rect x="56" y="16" width="8" height="8" fill="currentColor" />
        <rect x="64" y="16" width="8" height="8" fill="currentColor" />
        <rect x="72" y="16" width="8" height="8" fill="currentColor" />
      </g>
    </svg>
  )
}

const MUSHROOM_IMG = '/mushrooms.png'

function PixelCoin({ style }) {
  return (
    <span className="coin-wrap" style={style}>
      <svg className="coin-svg" viewBox="0 0 16 16" aria-hidden="true">
        <g shapeRendering="crispEdges">
          <rect x="4" y="0" width="8" height="2" fill="#ffd21a" />
          <rect x="2" y="2" width="12" height="2" fill="#ffd21a" />
          <rect x="2" y="4" width="12" height="2" fill="#ffd21a" />
          <rect x="1" y="6" width="14" height="2" fill="#ffd21a" />
          <rect x="1" y="8" width="14" height="2" fill="#ffd21a" />
          <rect x="2" y="10" width="12" height="2" fill="#ffd21a" />
          <rect x="2" y="12" width="12" height="2" fill="#ffd21a" />
          <rect x="4" y="14" width="8" height="2" fill="#ffd21a" />
          <rect x="2" y="2" width="4" height="2" fill="#ffe45d" />
          <rect x="2" y="4" width="2" height="2" fill="#ffe45d" />
          <rect x="1" y="6" width="4" height="2" fill="#ffe45d" />
          <rect x="11" y="8" width="4" height="2" fill="#d9a500" />
          <rect x="10" y="10" width="4" height="2" fill="#d9a500" />
          <rect x="10" y="12" width="2" height="2" fill="#d9a500" />
        </g>
      </svg>
    </span>
  )
}

function QuestionBlock({ style }) {
  return (
    <svg className="question-block" viewBox="0 0 32 32" style={style} aria-hidden="true">
      <g shapeRendering="crispEdges">
        <rect x="0" y="0" width="32" height="4" fill="#b45f1f" />
        <rect x="0" y="28" width="32" height="4" fill="#b45f1f" />
        <rect x="0" y="0" width="4" height="32" fill="#b45f1f" />
        <rect x="28" y="0" width="4" height="32" fill="#b45f1f" />
        <rect x="4" y="4" width="24" height="24" fill="#ffb500" />
        <rect x="4" y="4" width="8" height="4" fill="#ffe08a" />
        <rect x="4" y="8" width="4" height="4" fill="#ffe08a" />
        <rect x="8" y="4" width="4" height="8" fill="#3a2a00" />
        <rect x="12" y="4" width="4" height="4" fill="#3a2a00" />
        <rect x="16" y="4" width="4" height="4" fill="#3a2a00" />
        <rect x="20" y="4" width="4" height="4" fill="#3a2a00" />
        <rect x="4" y="8" width="4" height="4" fill="#3a2a00" />
        <rect x="20" y="8" width="4" height="4" fill="#3a2a00" />
        <rect x="20" y="12" width="4" height="4" fill="#3a2a00" />
        <rect x="16" y="16" width="4" height="4" fill="#3a2a00" />
        <rect x="12" y="20" width="4" height="4" fill="#3a2a00" />
        <rect x="12" y="24" width="4" height="4" fill="#3a2a00" />
      </g>
    </svg>
  )
}

function Mushroom() {
  return (
    <div className="mushroom-walk">
      <div className="mushroom-jump">
        <img className="mushroom-sprite" src={MUSHROOM_IMG} alt="" />
      </div>
    </div>
  )
}

export default function Background() {
  return (
    <div className="bg-scene" aria-hidden="true">
      <div className="bg-layer aurora">
        <div className="moon" />
        <div className="aurora-stars">
          {STARS.map((s, i) => (
            <span
              key={i}
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: s.size,
                height: s.size,
                '--delay': `${s.delay}s`,
                '--dur': `${s.dur}s`,
              }}
            />
          ))}
        </div>
        {QUESTION_BLOCKS.map((b, i) => (
          <QuestionBlock key={i} style={{ top: `${b.top}%`, left: `${b.left}%` }} />
        ))}
        {COINS.map((c, i) => (
          <PixelCoin
            key={i}
            style={{ top: `${c.top}%`, left: `${c.left}%`, animationDelay: `${c.delay}s` }}
          />
        ))}
        <div className="pixel-ground night" />
        <PixelBush style={{ left: '18%' }} />
        <PixelBush style={{ left: '72%' }} />
        <Mushroom />
      </div>

      <div className="bg-layer sky">
        <PixelSun />
        {CLOUDS.map((c) => (
          <PixelCloud key={c.id} {...c} />
        ))}
        {QUESTION_BLOCKS.map((b, i) => (
          <QuestionBlock key={i} style={{ top: `${b.top}%`, left: `${b.left}%` }} />
        ))}
        {COINS.map((c, i) => (
          <PixelCoin
            key={i}
            style={{ top: `${c.top}%`, left: `${c.left}%`, animationDelay: `${c.delay}s` }}
          />
        ))}
        <div className="pixel-ground" />
        <PixelBush style={{ left: '10%' }} />
        <PixelBush style={{ left: '38%' }} />
        <PixelBush style={{ left: '62%' }} />
        <PixelBush style={{ left: '86%' }} />
        <Mushroom />
      </div>
    </div>
  )
}
