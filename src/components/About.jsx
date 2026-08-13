import { profile, aboutPoints } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-num"></span> About Me
        </h2>
      </Reveal>

      <div className="about-grid">
        <Reveal className="about-left" delay={100}>
          <div className="avatar">
            <img src="public\profile.jpg" alt={`${profile.name}'s profile picture`} />
          </div>
          <div className="quick-facts">
            <p>
              <strong>Location</strong> {profile.location}
            </p>
            <p>
              <strong>Email</strong> {profile.email}
            </p>
            <p>
              <strong>Status</strong> {profile.available ? 'Open to work' : 'Busy building'}
            </p>
          </div>
          <a href={profile.resumeUrl} className="btn btn-primary btn-block" download>
            Download Resume
          </a>
        </Reveal>

        <div className="about-right">
          <Reveal delay={200}>
            <p className="about-bio">{profile.bio}</p>
          </Reveal>
          <div className="about-points">
            {aboutPoints.map((point, i) => (
              <Reveal key={point.title} delay={300 + i * 120}>
                <div className="about-point">
                  <div className="point-icon">{i + 1}</div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
