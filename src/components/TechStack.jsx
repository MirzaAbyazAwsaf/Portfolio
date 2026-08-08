import { techStack } from '../data'
import Reveal from './Reveal'
import { useInView } from '../hooks/useInView'

function SkillBar({ name, level, delay }) {
  const [ref, inView] = useInView()

  return (
    <div ref={ref} className="skill">
      <div className="skill-head">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{inView ? level : 0}%</span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: inView ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

function Icon({ name }) {
  if (name === 'frontend') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="18" rx="3" />
        <path d="M6 8.5 9 12l-3 3.5M12 15.5h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (name === 'backend') {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v12c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12c0 1.66 3.13 3 7 3s7-1.34 7-3" />
      </svg>
    )
  }
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4L14 12l-2-2 2.7-3.7Z" strokeLinejoin="round" />
    </svg>
  )
}

export default function TechStack() {
  return (
    <section id="stack" className="section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-num">04.</span> Tech Stack
        </h2>
      </Reveal>

      <div className="stack-grid">
        {techStack.map((group, gi) => (
          <Reveal key={group.category} delay={gi * 140} className="stack-card">
            <div className="stack-card-head">
              <div className="stack-icon">
                <Icon name={group.icon} />
              </div>
              <h3>{group.category}</h3>
            </div>
            <div className="skills">
              {group.skills.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={si * 120} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
