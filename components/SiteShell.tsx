"use client";

import { useState } from "react";

const navItems = ["Home", "Services", "Industries", "About", "How It Works", "Contact"];

const services = [
  { title: "Coolroom Installations", icon: "snow" },
  { title: "Coolroom Repairs", icon: "tool" },
  { title: "Freezer Room Repairs", icon: "flake" },
  { title: "Preventative Maintenance", icon: "check" },
  { title: "Commercial Refrigeration Servicing", icon: "gear" },
  { title: "Emergency Breakdowns", icon: "alert" },
];

const industries = [
  { title: "Restaurants & Cafes", icon: "cloche" },
  { title: "Butchers & Bakeries", icon: "van" },
  { title: "Supermarkets & Retail", icon: "cart" },
  { title: "Warehouses & Cold Storage", icon: "warehouse" },
  { title: "Food Manufacturing", icon: "factory" },
  { title: "Medical & Pharmaceutical Storage", icon: "medical" },
];

const trustPoints = [
  { title: "24/7", label: "Emergency Support", icon: "snow" },
  { title: "All Brands", label: "Serviced", icon: "gear" },
  { title: "Quality", label: "Guaranteed", icon: "shield" },
];

const howItWorks = [
  { title: "Customer", text: "sends enquiry", icon: "chat" },
  { title: "Micah", text: "captures the details", icon: "person" },
  { title: "DOS Calendar", text: "organises the booking", icon: "calendar" },
  { title: "Bell Frost", text: "follows up fast", icon: "check" },
];

export function SiteShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main>
      <div className="top-bar" aria-label="Business trust details">
        <span className="top-item top-location">Service All Areas</span>
        <span className="top-item top-support">24/7 Emergency Support</span>
        <span className="top-item top-calendar">Never Miss a Booking</span>
      </div>

      <header className="site-header">
        <a className="logo" href="#home" aria-label="Bell Frost Coolroom home">
          <span className="logo-bear" aria-hidden="true">
            <span />
          </span>
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
          0413 741 695
        </a>
      </header>

      <section className="hero" id="home" aria-label="Bell Frost Coolroom hero">
        <div className="hero-brand-card" aria-hidden="true">
          <span className="van-logo-bear" />
          <span>
            <strong>Bell Frost</strong>
            <small>Coolroom</small>
          </span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Commercial Refrigeration Specialists</p>
          <h1>
            Keeping Your Business <span>Cool.</span>
          </h1>
          <p className="hero-subtitle">
            Coolroom installations, servicing & repairs you can rely on. 24/7.
          </p>

          <div className="trust-grid">
            {trustPoints.map((point) => (
              <div className="trust-card" key={point.label}>
                <span className={`line-icon icon-${point.icon}`} aria-hidden="true" />
                <strong>{point.title}</strong>
                <span>{point.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a className="primary-button" href="tel:0413741695">
              0413 741 695
            </a>
            <a className="secondary-button" href="#contact">
              Request a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="booking-system section-shell" id="how-it-works">
        <aside className="scw-panel" aria-label="SCW and Micah panel">
          <div className="scw-ribbon">SCW + Micah</div>
          <div className="scw-logo">SCW</div>
          <p>Powered by SCW</p>
          <div className="micah-badge">
            <span className="line-icon icon-calendar" aria-hidden="true" />
            <strong>Micah</strong>
            <small>Booking System</small>
          </div>
          <ul>
            <li>Captures Enquiries</li>
            <li>Books More Jobs</li>
            <li>Saves You Time</li>
          </ul>
        </aside>

        <div className="how-copy">
          <p className="eyebrow">How It Works</p>
          <h2>Micah Booking System</h2>
          <p className="powered">Powered by SCW + DOS Calendar</p>

          <div className="flow" aria-label="Micah booking flow">
            {howItWorks.map((step, index) => (
              <article className="flow-step" key={step.title}>
                <span className={`line-icon icon-${step.icon}`} aria-hidden="true" />
                <strong>{index + 1}</strong>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="booking-card" aria-label="New enquiry booking card">
          <p className="booking-label">New enquiry received</p>
          <dl>
            <div>
              <dt>Customer</dt>
              <dd>ABC Fresh Foods</dd>
            </div>
            <div>
              <dt>Service needed</dt>
              <dd>Coolroom Repair</dd>
            </div>
            <div>
              <dt>Preferred time</dt>
              <dd>24 May 2025<br />10:00 AM</dd>
            </div>
          </dl>
          <div className="calendar-confirm">
            <span className="line-icon icon-calendar" aria-hidden="true" />
            Booked in DOS Calendar
          </div>
        </aside>
      </section>

      <section className="services-section section-shell" id="services">
        <p className="section-label">Our Services</p>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className={`line-icon icon-${service.icon}`} aria-hidden="true" />
              <h3>{service.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="industries-section" id="industries">
        <div className="section-shell industries-inner">
          <p className="section-label light">Industries We Service</p>
          <div className="industry-grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.title}>
                <span className={`line-icon icon-${industry.icon}`} aria-hidden="true" />
                <h3>{industry.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="emergency section-shell" id="about">
        <span className="emergency-shield" aria-hidden="true">
          <span className="van-logo-bear" />
        </span>
        <div>
          <h2>24/7 Emergency Support</h2>
          <p>When you need us, we&apos;re there.</p>
        </div>
        <a className="primary-button" href="tel:0413741695">
          0413 741 695
        </a>
      </section>

      <footer className="footer" id="contact">
        <div className="footer-grid section-shell">
          <div className="footer-brand">
            <a className="logo footer-logo" href="#home" aria-label="Bell Frost Coolroom home">
              <span className="logo-bear" aria-hidden="true">
                <span />
              </span>
              <span>
                <strong>Bell Frost</strong>
                <small>Coolroom</small>
              </span>
            </a>
            <p>Keeping your business cool.</p>
            <span className="footer-bear" aria-hidden="true" />
          </div>

          <div>
            <h2>Quick Links</h2>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#industries">Industries</a>
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h2>Contact Us</h2>
            <a href="tel:0413741695">0413 741 695</a>
            <a href="mailto:info@bellfrost.com.au">info@bellfrost.com.au</a>
            <span>Service All Areas</span>
          </div>

          <div>
            <h2>Get a Quote</h2>
            <p>Fast, simple & hassle-free.</p>
            <a className="secondary-button" href="#home">
              Request a Quote
            </a>
          </div>
        </div>
        <p className="copyright">© 2026 Bell Frost Coolroom. All rights reserved.</p>
      </footer>
    </main>
  );
}
