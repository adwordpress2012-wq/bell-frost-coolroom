"use client";

import { useState } from "react";

const navItems = ["Home", "Services", "Industries", "How It Works", "Contact"];

const services = [
  "Coolroom Installations",
  "Coolroom Repairs",
  "Freezer Room Repairs",
  "Preventative Maintenance",
  "Commercial Refrigeration Servicing",
  "Emergency Breakdowns",
];

const industries = [
  "Restaurants & Cafes",
  "Butchers & Bakeries",
  "Supermarkets & Retail",
  "Warehouses & Cold Storage",
  "Food Manufacturing",
  "Medical & Pharmaceutical Storage",
];

const trustPoints = [
  "24/7 Emergency Support",
  "All Brands Serviced",
  "Quality Guaranteed",
];

const howItWorks = [
  "Customer sends enquiry",
  "Micah captures the details",
  "DOS Calendar organises the booking",
  "Bell Frost follows up fast",
];

export function SiteShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <div className="trust-bar" aria-label="Business trust details">
        <span>Service All Areas</span>
        <span>24/7 Emergency Support</span>
        <span>Never Miss a Booking</span>
      </div>

      <header className="site-header">
        <a className="logo" href="#home" aria-label="Bell Frost Coolroom home">
          {/* Replace this wordmark with the approved Bell Frost logo asset when available. */}
          <span className="logo-mark">BF</span>
          <span>
            <strong>Bell Frost</strong>
            <small>Coolroom</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={isMenuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="call-button header-call" href="tel:0413741695">
          Call 0413 741 695
        </a>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Commercial Refrigeration Specialists</p>
          <h1>Keeping Your Business Cool.</h1>
          <p className="hero-subtitle">
            Coolroom installations, servicing & repairs you can rely on. 24/7.
          </p>

          <div className="trust-grid">
            {trustPoints.map((point) => (
              <div className="trust-card" key={point}>
                <span className="mini-icon" aria-hidden="true" />
                <strong>{point}</strong>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="tel:0413741695">
              Call Now
            </a>
            <a className="secondary-button" href="#contact">
              Request a Quote
            </a>
          </div>
        </div>

        <div className="hero-photo-card" aria-label="Realistic Bell Frost service photo placeholder">
          {/* Replace this CSS background with a real licensed tradie, branded van and coolroom photo. */}
          <div className="photo-overlay">
            <div className="van-panel">
              <span>Bell Frost</span>
              <strong>Coolroom Service Van</strong>
            </div>
            <div className="technician-card">
              <span>Commercial Technician</span>
              <strong>Ready 24/7</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="micah-section section-shell" id="how-it-works">
        <div className="booking-visual">
          {/* Replace this mock booking card with the real SCW/Micah embed when connected. */}
          <div className="phone-frame">
            <div className="phone-top" />
            <div className="booking-card">
              <p className="booking-label">New enquiry received</p>
              <h3>Customer name</h3>
              <dl>
                <div>
                  <dt>Service needed</dt>
                  <dd>Coolroom repair</dd>
                </div>
                <div>
                  <dt>Preferred time</dt>
                  <dd>Today, 2:30 PM</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>Booked in DOS Calendar</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="calendar-card">
            <div className="calendar-header">DOS Calendar</div>
            {["8:00 AM - Coolroom Service", "11:00 AM - Preventative Maintenance", "1:30 PM - Emergency Call Out", "3:30 PM - Coolroom Installation"].map(
              (entry) => (
                <div className="calendar-entry" key={entry}>
                  {entry}
                </div>
              ),
            )}
          </div>
        </div>

        <div className="micah-copy">
          <p className="eyebrow">Micah Booking System</p>
          <h2>Never Miss a Booking</h2>
          <p>
            Micah captures enquiries, booking requests and customer details through
            the Smart Chat Widget, then helps organise the job through DOS Calendar.
          </p>

          <div className="steps-grid">
            {howItWorks.map((step, index) => (
              <article className="step-card" key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section" id="services">
        <div className="section-shell split-grid">
          <div>
            <p className="eyebrow light">Our Services</p>
            <h2>Reliable refrigeration support for busy operators.</h2>
            <div className="list-grid">
              {services.map((service) => (
                <article className="service-card" key={service}>
                  <span className="card-dot" />
                  <h3>{service}</h3>
                </article>
              ))}
            </div>
          </div>

          <div id="industries">
            <p className="eyebrow light">Industries</p>
            <h2>Built for commercial cold-chain environments.</h2>
            <div className="list-grid">
              {industries.map((industry) => (
                <article className="industry-card" key={industry}>
                  <span className="card-dot" />
                  <h3>{industry}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="emergency section-shell">
        <div>
          <p className="eyebrow">Local. Reliable. Professional.</p>
          <h2>24/7 emergency support when your cold room cannot wait.</h2>
          <p>Proudly servicing businesses across all areas with fast response and clear follow-up.</p>
        </div>
        <a className="primary-button" href="tel:0413741695">
          Call 0413 741 695
        </a>
      </section>

      <section className="contact section-shell" id="contact">
        <div>
          <p className="eyebrow">Request a Quote</p>
          <h2>Tell Bell Frost what needs cooling.</h2>
          <p>
            This static form is ready for a future enquiry workflow. It is not connected
            to a backend yet.
          </p>
        </div>
        <form className="contact-form" aria-label="Static quote request form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Phone
            <input type="tel" name="phone" placeholder="0413 741 695" />
          </label>
          <label>
            Service Needed
            <select name="service" defaultValue="">
              <option value="" disabled>
                Choose a service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Briefly describe the job" rows={4} />
          </label>
          <button type="button" className="primary-button">
            Request a Quote
          </button>
        </form>
      </section>

      <footer className="footer">
        <strong>Bell Frost Coolroom</strong>
        <span>Keeping your business cool.</span>
        <span>© 2026 Bell Frost Coolroom. All rights reserved.</span>
      </footer>
    </main>
  );
}
