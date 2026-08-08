import { useState, useRef } from 'react'
import { projects, projectFilters } from '../data'
import Reveal from './Reveal'

function ProjectCard({ project, onExpand, expanded }) {
  const cardRef = useRef(null)

  const handleMove = (e) => {
    const el = cardRef.current
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`
  }

  const reset = () => {
    cardRef.current.style.transform = ''
  }

  return (
    <div
      ref={cardRef}
      className={`project-card ${expanded ? 'expanded' : ''}`}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      <div className="project-top">
        <div className="project-icons">
          <span className="folder-icon">{"</>"}</span>
          {project.featured && <span className="featured-tag">Featured</span>}
        </div>
        <div className="project-links">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" aria-label="Live demo">
              <ExternalIcon />
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noreferrer" aria-label="Source code">
              <GithubIcon />
            </a>
          )}
        </div>
      </div>
      <h3>{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <button className="expand-btn" onClick={() => onExpand(project.title)}>
        {expanded ? 'Hide details' : 'Details'}
        <span className={`chevron ${expanded ? 'up' : ''}`}>▼</span>
      </button>
    </div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [expanded, setExpanded] = useState(null)

  const visible = projects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="projects" className="section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-num">02.</span> Projects
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="filters">
          {projectFilters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="projects-grid">
        {visible.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 120}>
            <ProjectCard
              project={p}
              expanded={expanded === p.title}
              onExpand={(title) => setExpanded(expanded === title ? null : title)}
            />
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.36 9.36 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}
