'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="bg-dark-bg">
      {/* Navigation */}
      <nav className={`${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-cream">
              Hometown Hair
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-cream hover:text-gold transition">
              Services
            </a>
            <a href="#gallery" className="text-cream hover:text-gold transition">
              Gallery
            </a>
            <a href="#about" className="text-cream hover:text-gold transition">
              About
            </a>
            <a href="#contact" className="text-cream hover:text-gold transition">
              Contact
            </a>
          </div>
          <a href="tel:6088850177" className="cta-button text-sm md:text-base">
            Book Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-cream">
            Hometown Hair & Barber
          </h1>
          <p className="text-gold">
            Best Hair For You
          </p>
          <a href="tel:6088850177" className="cta-button">
            Book Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-cream">Our Services</h2>
          
          <div className="services-grid">
            {/* Color Services */}
            <div className="glass-card service-card p-8">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-cream">Color Services</h3>
              <ul className="text-cream text-sm">
                <li>Balayage & Highlights</li>
                <li>Full Color</li>
                <li>Color Correction</li>
              </ul>
            </div>

            {/* Cuts & Styles */}
            <div className="glass-card service-card p-8">
              <div className="text-4xl mb-4">✂️</div>
              <h3 className="text-cream">Cuts & Styles</h3>
              <ul className="text-cream text-sm">
                <li>Bobs & Layers</li>
                <li>Pixie Cuts</li>
                <li>Long Layers</li>
              </ul>
            </div>

            {/* Bridal & Events */}
            <div className="glass-card service-card p-8">
              <div className="text-4xl mb-4">💍</div>
              <h3 className="text-cream">Bridal & Events</h3>
              <ul className="text-cream text-sm">
                <li>Bridal Styling</li>
                <li>Event Updos</li>
                <li>Trial Sessions</li>
              </ul>
            </div>

            {/* Specialty Services */}
            <div className="glass-card service-card p-8">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-cream">Specialty Services</h3>
              <ul className="text-cream text-sm">
                <li>Perms & Waves</li>
                <li>Braids & Specialty</li>
                <li>Barber Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="relative z-10 bg-dark-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-cream">Our Work</h2>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <span className="gallery-label">Balayage</span>
            </div>
            <div className="gallery-item">
              <span className="gallery-label">Full Color</span>
            </div>
            <div className="gallery-item">
              <span className="gallery-label">Bridal Styling</span>
            </div>
            <div className="gallery-item">
              <span className="gallery-label">Bob Cut</span>
            </div>
            <div className="gallery-item">
              <span className="gallery-label">Perms & Waves</span>
            </div>
            <div className="gallery-item">
              <span className="gallery-label">Braids</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-cream">Meet Michelle</h2>
          
          <div className="about-container">
            <div className="about-avatar">
              💁‍♀️
            </div>
            <div className="about-content">
              <p className="text-cream">
                With over 15 years of experience in hair styling and design, Michelle has 
                become Cuba City's trusted stylist for transformative hair experiences. Her 
                passion for quality and attention to detail sets Hometown Hair & Barber apart.
              </p>
              
              <p className="text-cream">
                Whether you're looking for a fresh cut, color transformation, or bridal 
                styling, Michelle brings expertise, creativity, and care to every appointment.
              </p>

              {/* Award Section */}
              <div className="award-badge">
                <p><span className="award-star">⭐</span>Best Hair Salon 2025</p>
                <p>BusinessRate, Cuba City WI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 bg-dark-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-cream">Get In Touch</h2>
          
          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <h3>📞 Call Us</h3>
                <a href="tel:6088850177">
                  (608) 885-0177
                </a>
              </div>

              <div className="contact-item">
                <h3>📍 Visit Us</h3>
                <p>
                  105 S. Main St<br />
                  Cuba City, WI 53807
                </p>
              </div>

              <div className="contact-item">
                <h3>🕐 Hours</h3>
                <p>
                  Monday - Saturday: 9:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <a href="tel:6088850177" className="cta-button w-fit">
                Book an Appointment
              </a>
            </div>

            {/* Map */}
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.0748571641656!2d-90.28444092346924!3d42.79452107120915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f0f0f0f0f0f0f1%3A0x0!2s105%20S%20Main%20St%2C%20Cuba%20City%2C%20WI%2053807!5e0!3m2!1sen!2sus!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="font-serif text-lg font-bold text-cream">
                Hometown Hair & Barber
              </span>
            </div>
            
            <p className="text-center md:text-right text-cream">
              &copy; 2025 Hometown Hair & Barber. All rights reserved.<br />
              <span className="text-sm">📞 (608) 885-0177</span>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
