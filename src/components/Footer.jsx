import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Designed &amp; built with <span className="heart">♥</span> by {profile.name}
      </p>
      <button
        className="to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  )
}
