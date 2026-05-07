'use client';

import { useEffect, useState } from 'react';

export default function Careers() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://formspree.io/f/Kustermiyoose@gmail.com', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.currentTarget),
      });
      if (res.ok) {
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
      } else throw new Error();
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ backgroundColor: '#0D0D0D', color: '#FAF8F5', minHeight: '100vh' }}>

      {/* NAV */}
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img src="/images/logo-circle.jpg" alt="Logo" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 700, color: '#FAF8F5' }}>
              Hometown Hair
            </span>
          </a>
          <a href="tel:6088850177" className="cta-button" style={{ fontSize: '0.9rem', padding: '0.7rem 1.8rem' }}>
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        padding: '8rem 1rem 5rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 70%)',
      }}>
        <p style={{ color: '#C9A84C', letterSpacing: '0.25em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Work With Us
        </p>
        <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, color: '#FAF8F5', marginBottom: '1.5rem' }}>
          Join Our Team
        </h1>
        <p style={{ color: 'rgba(250,248,245,0.7)', fontSize: '1.1rem', maxWidth: 560, margin: '0 auto 2rem' }}>
          Hometown Hair & Barber is growing. Whether you are an experienced stylist, a recent graduate, or a cosmetology student looking for an internship, we want to hear from you.
        </p>
        <div style={{ width: 40, height: 2, background: '#C9A84C', margin: '0 auto', opacity: 0.5 }} />
      </section>

      {/* WHY JOIN */}
      <section style={{ padding: '4rem 1rem', backgroundColor: '#1A1A1A' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Flexible Schedule', desc: 'Work hours that fit your life. We understand life happens.' },
              { title: 'Creative Freedom', desc: 'Express your artistry. Clients who trust your vision.' },
              { title: 'Growing Client Base', desc: 'New website, open house in May, and a full booking system. More clients coming.' },
              { title: 'Internship Programs', desc: 'Cosmetology students welcome. Hands-on experience in a real salon environment with a growing client base.' },
            ].map((item, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{ width: 32, height: 2, background: '#C9A84C', marginBottom: '1rem' }} />
                <h3 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.3rem', color: '#FAF8F5', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: 'rgba(250,248,245,0.7)', fontSize: '0.95rem', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section style={{ padding: '5rem 1rem' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 1rem' }}>
          <p style={{ textAlign: 'center', color: '#C9A84C', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Apply Today</p>
          <h2 style={{ fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, textAlign: 'center', color: '#FAF8F5', marginBottom: '3rem' }}>
            Tell Us About Yourself
          </h2>

          {submitted ? (
            <div style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid #C9A84C', borderRadius: 12, padding: '2.5rem', textAlign: 'center' }}>
              <p style={{ color: '#C9A84C', fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Application Received</p>
              <p style={{ color: 'rgba(250,248,245,0.7)' }}>We will be in touch soon. Thank you for your interest in Hometown Hair & Barber.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(555) 000-0000' },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{field.label}</label>
                  <input
                    name={field.name} type={field.type} placeholder={field.placeholder} required={field.type !== 'tel'}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, padding: '0.9rem 1.2rem', color: '#FAF8F5', fontSize: '1rem', outline: 'none' }}
                  />
                </div>
              ))}

              <div>
                <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Position of Interest</label>
                <select name="position" style={{ width: '100%', background: '#1A1A1A', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, padding: '0.9rem 1.2rem', color: '#FAF8F5', fontSize: '1rem', outline: 'none' }}>
                  <option value="">Select a role</option>
                  <option>Hair Stylist</option>
                  <option>Barber</option>
                  <option>Colorist</option>
                  <option>Salon Assistant</option>
                  <option>Cosmetology Intern</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: '#C9A84C', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Experience & About You</label>
                <textarea
                  name="message" rows={5} placeholder="Tell us about your experience, specialties, and why you want to join the team..."
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 8, padding: '0.9rem 1.2rem', color: '#FAF8F5', fontSize: '1rem', outline: 'none', resize: 'vertical' }}
                />
              </div>

              {error && (
                <p style={{ color: '#ff6b6b', fontSize: '0.9rem', textAlign: 'center' }}>
                  Something went wrong. Email us directly at <a href="mailto:Kustermiyoose@gmail.com" style={{ color: '#ff6b6b' }}>Kustermiyoose@gmail.com</a>
                </p>
              )}

              <button type="submit" className="cta-button" disabled={loading} style={{ textAlign: 'center', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Sending...' : 'Submit Application'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 700, color: '#FAF8F5' }}>Hometown Hair & Barber</span>
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.4 }} />
            <p style={{ color: 'rgba(250,248,245,0.5)', fontSize: '0.85rem' }}>
              &copy; 2025 Hometown Hair & Barber &nbsp;&bull;&nbsp; (608) 885-0177 &nbsp;&bull;&nbsp; 105 S. Main St, Cuba City, WI
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
