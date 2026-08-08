import { useState } from 'react'
import { profile } from '../data'
import Reveal from './Reveal'

const initial = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!form.email.trim()) next.email = 'Please enter your email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.message.trim()) next.message = 'Please write a message'
    else if (form.message.trim().length < 10) next.message = 'Message should be at least 10 characters'
    return next
  }

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: undefined })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm(initial)
      setTimeout(() => setStatus('idle'), 5000)
    }, 1200)
  }

  return (
    <section id="contact" className="section">
      <Reveal>
        <h2 className="section-title">
          <span className="section-num">05.</span> Contact Me
        </h2>
      </Reveal>

      <div className="contact-grid">
        <Reveal className="contact-info" delay={100}>
          <h3>Let us build something together</h3>
          <p>
            Have a project in mind or just want to say hi? My inbox is always open — I will get back
            to you as soon as I can.
          </p>
          <a className="contact-email" href={profile.socials.mailto}>
            {profile.email}
          </a>
          <div className="contact-socials">
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.socials.twitter} target="_blank" rel="noreferrer">
              X / Twitter
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={form.name}
                onChange={onChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={onChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={onChange}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="field-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="form-success">Thanks! I will get back to you soon.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
