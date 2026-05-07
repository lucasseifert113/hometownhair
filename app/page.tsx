'use client';

import { useEffect, useState, useRef } from 'react';

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setParallaxY(window.scrollY * 0.4);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ backgroundColor: '#0D0D0D', color: '#FAF8F5' }}>

      {/* NAV */}
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/images/logo-circle.jpg" alt="Logo" style={{ width: 36, height: 36, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.4rem', fontWeight: 700, color: '#FAF8F5' }}>
              Hometown Hair
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="/careers" style={{ color: '#C9A84C', textDecoration: 'none', fontSize: '0.95rem', letterSpacing: '0.05em', fontWeight: 600 }}>Join Our Team</a>
            {['Services', 'Gallery', 'About', 'Contact'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ color: '#FAF8F5', textDecoration: 'none', fontSize: '0.95rem', letterSpacing: '0.05em', transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = '#FAF8F5')}>
                {link}
              </a>
            ))}
          </div>
          <a href="tel:6088850177" className="cta-button" style={{ fontSize: '0.9rem', padding: '0.7rem 1.8rem' }}>
            Book Now
          </a>
        </div>
      </nav>

      {/* HERO -- parallax */}
      <section ref={heroRef} className="hero" style={{ overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxY}px)`,
          willChange: 'transform',
          scale: '1.15',
        }} />
        <div className="hero-overlay" />
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 1rem' }}>
          <p style={{ color: '#C9A84C', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', animation: 'fadeInUp 0.8s ease-out' }}>
            Cuba City, Wisconsin
          </p>
          <h1 className="text-cream" style={{ animation: 'fadeInUp 0.8s ease-out 0.15s backwards' }}>
            Hometown Hair & Barber
          </h1>
          <p style={{ color: '#C9A84C', fontFamily: 'var(--font-cormorant)', fontSize: 'clamp(1.3rem, 3vw, 1.8rem)', marginBottom: '2.5rem', animation: 'fadeInUp 0.8s ease-out 0.3s backwards' }}>
            Best Hair For You
          </p>
          <a href="tel:6088850177" className="cta-button" style={{ animation: 'fadeInUp 0.8s ease-out 0.45s backwards' }}>
            Book Now
          </a>
        </div>
        {/* scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10, animation: 'bounce 2s infinite' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal reveal-up">
            <p style={{ textAlign: 'center', color: '#C9A84C', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Offer</p>
            <h2 className="text-cream">Our Services</h2>
          </div>
          <div className="services-grid">
            {[
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>, title: 'Color Services', items: ['Balayage & Highlights', 'Full Color', 'Color Correction'] },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M6 3l6 9 6-9M6 3C4.9 3 4 3.9 4 5s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 21c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm12 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/></svg>, title: 'Cuts & Styles', items: ['Bobs & Layers', 'Pixie Cuts', 'Long Layers'] },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>, title: 'Bridal & Events', items: ['Bridal Styling', 'Event Updos', 'Trial Sessions'] },
              { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>, title: 'Barber Services', items: ['Straight Razor Beard', 'Clipper Cuts', 'Beard Shaping'] },
            ].map((card, i) => (
              <div key={i} className={`glass-card service-card p-8 reveal reveal-up`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div style={{ marginBottom: '1rem' }}>{card.icon}</div>
                <h3 className="text-cream">{card.title}</h3>
                <ul className="text-cream text-sm" style={{ listStyle: 'none', padding: 0 }}>
                  {card.items.map((item, j) => (
                    <li key={j} style={{ padding: '0.4rem 0 0.4rem 1rem', position: 'relative', fontSize: '0.95rem', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#C9A84C' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-dark-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal reveal-up">
            <p style={{ textAlign: 'center', color: '#C9A84C', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Portfolio</p>
            <h2 className="text-cream">Our Work</h2>
          </div>
          <div className="gallery-grid">
            {[
              { src: '/images/balayage-curls.jpg', label: 'Balayage' },
              { src: '/images/copper-straight.jpg', label: 'Full Color' },
              { src: '/images/bridal-half-up.jpg', label: 'Bridal Styling' },
              { src: '/images/platinum-bob.jpg', label: 'Bob Cut' },
              { src: '/images/balayage-waves.jpg', label: 'Balayage Waves' },
              { src: '/images/bridal-braids.jpg', label: 'Bridal Braids' },
            ].map((item, i) => (
              <div key={i} className={`gallery-item reveal reveal-scale`} style={{ backgroundImage: `url(${item.src})`, backgroundSize: 'cover', backgroundPosition: 'center', transitionDelay: `${i * 0.08}s` }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 60%)', borderRadius: 12 }} />
                <span className="gallery-label" style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', fontFamily: 'var(--font-cormorant)', fontSize: '1.2rem', fontWeight: 600, color: '#FAF8F5', letterSpacing: '0.05em' }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal reveal-up">
            <p style={{ textAlign: 'center', color: '#C9A84C', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Your Stylist & Barber</p>
            <h2 className="text-cream">Meet Michelle</h2>
          </div>
          <div className="about-container">
            <div className="reveal reveal-left" style={{ display: 'flex', justifyContent: 'center' }}>
              <div className="about-avatar" style={{ backgroundImage: 'url(/images/michelle-logo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
            </div>
            <div className="about-content reveal reveal-right">
              <p className="text-cream">
                With years of experience in hair and barber services, Michelle has become Cuba City&apos;s go-to stylist for anyone who takes their look seriously. Her attention to detail and commitment to quality sets Hometown Hair & Barber apart.
              </p>
              <p className="text-cream">
                Whether you need a precision cut, color work, a straight razor shave, or a full style overhaul, Michelle brings expertise and care to every appointment -- for every client.
              </p>
              <div className="award-badge">
                <img src="/images/best-of-2025.jpg" alt="Best of BusinessRate 2025" style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: '50%', marginRight: 16, flexShrink: 0 }} />
                <div>
                  <p style={{ fontSize: '1.2rem', fontWeight: 700, color: '#C9A84C', marginBottom: '0.25rem' }}>Best Hair Salon 2025</p>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(250,248,245,0.8)' }}>BusinessRate, Cuba City WI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-dark-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal reveal-up">
            <p style={{ textAlign: 'center', color: '#C9A84C', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Ready to Book?</p>
            <h2 className="text-cream">Get In Touch</h2>
          </div>
          <div className="contact-wrapper">
            <div className="contact-info reveal reveal-left">
              {[
                { label: 'Call Us', content: <a href="tel:6088850177" style={{ color: '#C9A84C', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 600 }}>(608) 885-0177</a> },
                { label: 'Visit Us', content: <p style={{ color: 'rgba(250,248,245,0.85)', lineHeight: 1.7 }}>105 S. Main St<br />Cuba City, WI 53807</p> },
                { label: 'Hours', content: <p style={{ color: 'rgba(250,248,245,0.85)', lineHeight: 1.7 }}>Monday &ndash; Saturday: 9:00 AM &ndash; 5:00 PM<br />Sunday: Closed</p> },
              ].map((item, i) => (
                <div key={i} style={{ borderLeft: '2px solid #C9A84C', paddingLeft: '1.5rem' }}>
                  <h3 style={{ color: '#C9A84C', fontFamily: 'var(--font-cormorant)', fontSize: '1.1rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{item.label}</h3>
                  {item.content}
                </div>
              ))}
              <a href="tel:6088850177" className="cta-button" style={{ width: 'fit-content' }}>
                Book an Appointment
              </a>
            </div>
            <div className="contact-map reveal reveal-right">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.0748571641656!2d-90.28444092346924!3d42.79452107120915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f0f0f0f0f0f0f1%3A0x0!2s105%20S%20Main%20St%2C%20Cuba%20City%2C%20WI%2053807!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            <span style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 700, color: '#FAF8F5' }}>Hometown Hair & Barber</span>
            <span style={{ color: '#C9A84C', letterSpacing: '0.15em', fontSize: '0.8rem', textTransform: 'uppercase' }}>Best Hair For You</span>
            <div style={{ width: 40, height: 1, background: '#C9A84C', opacity: 0.4 }} />
            <a href="/careers" style={{ color: '#C9A84C', fontSize: '0.85rem', textDecoration: 'none', letterSpacing: '0.1em' }}>Join Our Team</a>
            <p style={{ color: 'rgba(250,248,245,0.5)', fontSize: '0.85rem' }}>
              &copy; 2025 Hometown Hair & Barber &nbsp;&bull;&nbsp; (608) 885-0177 &nbsp;&bull;&nbsp; 105 S. Main St, Cuba City, WI
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
