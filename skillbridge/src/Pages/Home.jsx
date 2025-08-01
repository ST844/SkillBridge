import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to SkillBridge</h1>
        <p>Bridge the gap between talent and opportunity.</p>
        <button className="cta-btn">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Why Choose SkillBridge?</h2>
        <div className="feature-list">
          <div className="feature-card">
            <h3>✅ Verified Professionals</h3>
            <p>Work with only trusted and vetted experts in their field.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ Fast Hiring Process</h3>
            <p>Get matched with top talent in under 24 hours.</p>
          </div>
          <div className="feature-card">
            <h3>🔒 Secure Payments</h3>
            <p>Payments are protected until the job is completed and approved.</p>
          </div>
          <div className="feature-card">
            <h3>🌍 Global Talent</h3>
            <p>Access a diverse pool of professionals from around the world.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials" id="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial-card">
            <p>"SkillBridge helped us find skilled developers within hours. Saved us weeks!"</p>
            <span>- Alex Morgan, Startup Founder</span>
          </div>
          <div className="testimonial-card">
            <p>"Smooth hiring, trustworthy talent, and secure payments. Highly recommended."</p>
            <span>- Priya Sharma, HR Lead</span>
          </div>
          <div className="testimonial-card">
            <p>"I've tried other platforms — SkillBridge is by far the fastest and most reliable."</p>
            <span>- Daniel Wu, Project Manager</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="footer">
        <p>&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
