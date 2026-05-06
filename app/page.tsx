import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-cream border-b border-gold border-opacity-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo-script.jpg"
              alt="Hometown Hair Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-serif text-xl font-bold text-charcoal">
              Hometown Hair
            </span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="text-charcoal hover:text-gold transition">
              Services
            </a>
            <a href="#gallery" className="text-charcoal hover:text-gold transition">
              Gallery
            </a>
            <a href="#about" className="text-charcoal hover:text-gold transition">
              About
            </a>
            <a href="#contact" className="text-charcoal hover:text-gold transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/balayage-waves.jpg"
            alt="Hero background"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <Image
            src="/images/logo-script.jpg"
            alt="Hometown Hair Logo"
            width={200}
            height={200}
            className="mx-auto mb-8 rounded-lg shadow-lg"
          />
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-charcoal mb-4">
            Hometown Hair & Barber
          </h1>
          <p className="text-2xl text-gold font-serif mb-8">
            Best Hair For You
          </p>
          <a href="tel:6088850177" className="cta-button inline-block text-lg">
            Book Now
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Color Services */}
            <div className="bg-cream p-8 rounded-lg border border-gold border-opacity-30 hover:shadow-lg transition">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                Color Services
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>✨ Balayage & Highlights</li>
                <li>✨ Full Color</li>
                <li>✨ Color Correction</li>
              </ul>
            </div>

            {/* Cuts & Styles */}
            <div className="bg-cream p-8 rounded-lg border border-gold border-opacity-30 hover:shadow-lg transition">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                Cuts & Styles
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>✨ Bobs & Layers</li>
                <li>✨ Pixie Cuts</li>
                <li>✨ Long Layers</li>
              </ul>
            </div>

            {/* Bridal & Events */}
            <div className="bg-cream p-8 rounded-lg border border-gold border-opacity-30 hover:shadow-lg transition">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                Bridal & Events
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>✨ Bridal Styling</li>
                <li>✨ Event Updos</li>
                <li>✨ Trial Sessions</li>
              </ul>
            </div>

            {/* Specialty Services */}
            <div className="bg-cream p-8 rounded-lg border border-gold border-opacity-30 hover:shadow-lg transition">
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-4">
                Specialty Services
              </h3>
              <ul className="space-y-2 text-charcoal">
                <li>✨ Perms & Waves</li>
                <li>✨ Braids & Specialty</li>
                <li>✨ Barber Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/images/balayage-waves.jpg", alt: "Balayage & Waves" },
              { src: "/images/color-straight.jpg", alt: "Full Color" },
              { src: "/images/balayage-long.jpg", alt: "Balayage Long Layers" },
              { src: "/images/bob-platinum.jpg", alt: "Platinum Bob" },
              { src: "/images/bridal-updo-1.jpg", alt: "Bridal Updo" },
              { src: "/images/bridal-updo-2.jpg", alt: "Bridal Styling" },
            ].map((photo, idx) => (
              <div
                key={idx}
                className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Meet Michelle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/michelle-logo.jpg"
                alt="Michelle"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                With over 15 years of experience in hair styling and design, Michelle has 
                become Cuba City's trusted stylist for transformative hair experiences. Her 
                passion for quality and attention to detail sets Hometown Hair & Barber apart.
              </p>
              
              <p className="text-lg text-charcoal mb-8 leading-relaxed">
                Whether you're looking for a fresh cut, color transformation, or bridal 
                styling, Michelle brings expertise, creativity, and care to every appointment.
              </p>

              {/* Award Section */}
              <div className="bg-gold bg-opacity-10 p-6 rounded-lg border border-gold border-opacity-30">
                <div className="flex items-center gap-4">
                  <Image
                    src="/images/best-of-2025.jpg"
                    alt="Best Hair Salon 2025"
                    width={100}
                    height={100}
                    className="rounded"
                  />
                  <div>
                    <p className="font-serif text-xl font-bold text-gold">
                      Best Hair Salon 2025
                    </p>
                    <p className="text-charcoal">
                      BusinessRate, Cuba City WI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  Call Us
                </h3>
                <a
                  href="tel:6088850177"
                  className="text-lg text-gold hover:text-charcoal transition font-semibold"
                >
                  (608) 885-0177
                </a>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  Visit Us
                </h3>
                <p className="text-lg text-charcoal">
                  105 S. Main St<br />
                  Cuba City, WI 53807
                </p>
              </div>

              <div>
                <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                  Hours
                </h3>
                <p className="text-lg text-charcoal">
                  Monday - Saturday: 9:00 AM - 5:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <a href="tel:6088850177" className="cta-button inline-block">
                Book an Appointment
              </a>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.0748571641656!2d-90.28444092346924!3d42.79452107120915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f0f0f0f0f0f0f1%3A0x0!2s105%20S%20Main%20St%2C%20Cuba%20City%2C%20WI%2053807!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/images/logo-bw.jpg"
                alt="Hometown Hair Logo"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="font-serif text-lg font-bold">Hometown Hair & Barber</span>
            </div>
            
            <p className="text-center md:text-right">
              &copy; 2025 Hometown Hair & Barber. All rights reserved.<br />
              105 S. Main St, Cuba City, WI 53807
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
