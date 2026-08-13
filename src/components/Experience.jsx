import { experience } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-num"></span> Experience
        </h2>
      </Reveal>

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 120} className="timeline-item">
            <div className="timeline-marker">
              <span className="marker-dot" />
            </div>
            <div className="timeline-card">
              <div className="timeline-head">
                <h3>{job.role}</h3>
                <span className="period">{job.period}</span>
              </div>
              <div className="company">{job.company}</div>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="timeline-stack">
                {job.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
