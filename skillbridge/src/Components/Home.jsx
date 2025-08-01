import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero no-image">
        <div className="hero-content">
          <h1>
            Up Your <span className="highlight">Skills</span> To{' '}
            <span className="highlight">Advance</span> Your{' '}
            <span className="highlight">Career</span> Path
          </h1>
          <p className="subtext">
            Exchange expertise through verified 1-to-1 swaps. The modern way to learn and teach - no money, just knowledge.
          </p>
          <button className="cta-btn">Get Started</button>

          <div className="tags">
            <span>🔊 Public Speaking</span>
            <span>💼 Career-Oriented</span>
            <span>💡 Creative Thinking</span>
          </div>

          <div className="stats">
            <div className="stat-box">
              <h3>5K+</h3>
              <p>Online Courses</p>
            </div>
            <div className="stat-box">
              <h3>2K+</h3>
              <p>Video Courses</p>
            </div>
            <div className="stat-box">
              <h3>250+</h3>
              <p>Tutors</p>
            </div>
          </div>

          <div className="partners">
            <div>
              <strong>250+</strong> Collaboration
            </div>
            <img src="/logos/duolingo.png" alt="duolingo" />
            <img src="/logos/codecov.png" alt="codecov" />
            <img src="/logos/usertesting.png" alt="user testing" />
            <img src="/logos/magicleap.png" alt="magic leap" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"SkillBridge helped me find amazing talent in just hours!"</p>
            <span>- Alex, Startup Founder</span>
          </div>
          <div className="testimonial">
            <p>"A seamless experience from hiring to payment."</p>
            <span>- Priya, HR Manager</span>
          </div>
          <div className="testimonial">
            <p>"The best platform for career-focused learners."</p>
            <span>- Jordan, Mentor</span>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog">
        <h2>Latest From Our Blog</h2>
        <div className="blog-posts">
          <div className="post">
            <h3>5 Ways to Learn Faster</h3>
            <p>Discover proven techniques to boost your learning curve effectively.</p>
          </div>
          <div className="post">
            <h3>Career Trends in 2025</h3>
            <p>Get ahead by knowing which skills are in demand for the future.</p>
          </div>
          <div className="post">
            <h3>How to Teach What You Know</h3>
            <p>Tips to become a top-rated tutor and share your knowledge smartly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
