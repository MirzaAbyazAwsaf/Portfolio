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

const STARS = Array.from({ length: 90 }, () => ({
  left: rnd() * 100,
  top: rnd() * 62,
  size: rnd() < 0.8 ? 1 + rnd() : 1.8 + rnd() * 1.4,
  delay: rnd() * 4,
  dur: 2.5 + rnd() * 3.5,
}))

const CLOUDS = [
  { id: 'cloud-a', top: '11%', scale: 1.15, dur: '70s', delay: '-8s', opacity: 0.98 },
  { id: 'cloud-b', top: '26%', scale: 0.85, dur: '92s', delay: '-36s', opacity: 0.9 },
  { id: 'cloud-c', top: '4%', scale: 0.6, dur: '58s', delay: '-20s', opacity: 0.85 },
  { id: 'cloud-d', top: '34%', scale: 1.05, dur: '84s', delay: '-52s', opacity: 0.9 },
  { id: 'cloud-e', top: '16%', scale: 0.75, dur: '64s', delay: '-28s', opacity: 0.95 },
]

function AuroraCurtain({ id, className = '', base, bright, path }) {
  const dim = (a) => `rgba(${base},${a})`
  const lit = (a) => `rgba(${bright},${a})`
  return (
    <svg className={`aurora-curtain ${className}`} viewBox="0 0 1440 520" preserveAspectRatio="none">
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={path} />
        </clipPath>
        <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#000" />
          <stop offset="0.15" stopColor="#fff" />
          <stop offset="0.6" stopColor="#fff" />
          <stop offset="0.85" stopColor="#222" />
          <stop offset="1" stopColor="#000" />
        </linearGradient>
        <linearGradient id={`${id}-body`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={dim(0)} />
          <stop offset="0.4" stopColor={dim(0.55)} />
          <stop offset="0.8" stopColor={dim(0.2)} />
          <stop offset="1" stopColor={dim(0)} />
        </linearGradient>
        <linearGradient id={`${id}-shaft`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={lit(0)} />
          <stop offset="0.45" stopColor={lit(0.55)} />
          <stop offset="0.75" stopColor={lit(0.15)} />
          <stop offset="1" stopColor={lit(0)} />
        </linearGradient>
        <pattern id={`${id}-rays`} width="26" height="520" patternUnits="userSpaceOnUse">
          <rect width="26" height="520" fill={`url(#${id}-body)`} />
          <rect x="11" width="5" height="520" fill={`url(#${id}-shaft)`} />
        </pattern>
      </defs>
      <g clipPath={`url(#${id}-clip)`} mask={`url(#${id}-fade)`}>
        <rect width="1440" height="520" fill={`url(#${id}-rays)`} />
      </g>
    </svg>
  )
}

function Cloud({ id, top, scale, dur, delay, opacity }) {
  return (
    <svg
      className="cloud"
      style={{ top, '--scale': scale, '--op': opacity, '--dur': dur, '--delay': delay }}
      viewBox="0 0 340 160"
    >
      <defs>
        <linearGradient id={`${id}-top`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e9f2fb" />
        </linearGradient>
        <linearGradient id={`${id}-bot`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dae8f6" />
          <stop offset="1" stopColor="#bfd5ec" />
        </linearGradient>
      </defs>
      <g>
        <ellipse cx="86" cy="118" rx="82" ry="32" fill={`url(#${id}-bot)`} />
        <ellipse cx="86" cy="106" rx="62" ry="30" fill={`url(#${id}-top)`} />
        <ellipse cx="160" cy="112" rx="70" ry="34" fill={`url(#${id}-bot)`} />
        <ellipse cx="160" cy="96" rx="54" ry="30" fill={`url(#${id}-top)`} />
        <ellipse cx="232" cy="120" rx="64" ry="30" fill={`url(#${id}-bot)`} />
        <ellipse cx="232" cy="108" rx="48" ry="26" fill={`url(#${id}-top)`} />
        <ellipse cx="112" cy="82" rx="46" ry="34" fill="#ffffff" />
        <ellipse cx="188" cy="74" rx="38" ry="30" fill="#ffffff" />
      </g>
    </svg>
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
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
        <AuroraCurtain
          id="aurora-a"
          className="aurora-curtain-1"
          base="30,240,140"
          bright="215,255,230"
          path="M0,360 C180,150 380,430 680,240 C980,60 1220,400 1440,210 L1440,520 L0,520 Z"
        />
        <AuroraCurtain
          id="aurora-b"
          className="aurora-curtain-2"
          base="34,211,238"
          bright="200,245,255"
          path="M0,280 C240,430 480,120 760,300 C1040,470 1240,140 1440,300 L1440,520 L0,520 Z"
        />
        <div className="aurora-horizon" />
      </div>

      <div className="bg-layer sky">
        <div className="sun" />
        <div className="sky-haze" />
        {CLOUDS.map((c) => (
          <Cloud key={c.id} {...c} />
        ))}
      </div>
    </div>
  )
}
