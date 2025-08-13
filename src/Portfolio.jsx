import React from "react";

export default function Portfolio() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">VK</div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-subtitle">Hello — I'm</div>
              <h1>Vansh Kashyap</h1>
              <p className="hero-description">
                Code • Lift • Learn — I blend modern web development with AI-driven automation to build smarter products that scale.
              </p>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <a href="#contact" className="btn btn-primary">Get In Touch</a>
                <a href="./VANSH-AUG25-RESUME-CLEANED.pdf" download className="btn btn-secondary">Download Resume</a>
              </div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                📧 <a href="mailto:kashyapvansh123@gmail.com">kashyapvansh123@gmail.com</a>
              </div>
            </div>
            <div className="hero-image">
              <img src="./public/myphoto.jpg" alt="Vansh Kashyap" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">About Me</div>
            <h2>A quick look</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '2rem', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '1rem', 
              background: 'linear-gradient(135deg, var(--bg-tertiary) 0%, rgba(0, 212, 255, 0.1) 100%)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontSize: '2rem', 
              fontWeight: '800', 
              color: 'var(--accent)',
              fontFamily: 'Poppins, sans-serif'
            }}>
              VK
            </div>
            <div>
              <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                I build clean web experiences and AI-driven automations. I focus on product-first design, efficient frontends, and practical AI prompts that ship real value.
              </p>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                I enjoy the gym, focusing on discipline, learning, and sharing growth-focused content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Skills</div>
            <h2>What I work with</h2>
          </div>
          <div className="skills-grid">
            {[
              ["HTML & CSS", "Semantic markup, responsive design"],
              ["JavaScript", "DOM manipulation, ES6+, tooling"],
              ["React.js", "Component-driven UI development"],
              ["Tailwind CSS", "Utility-first styling approach"],
              ["Python (Flask)", "APIs & backend development"],
              ["Data Structures", "Problem solving & algorithms"],
              ["AI Automation", "Make, Zapier & custom scripts"],
              ["Prompt Engineering", "Designing effective AI prompts"],
            ].map(([title, desc], i) => (
              <div key={i} className="skill-card">
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Projects</div>
            <h2>Selected works</h2>
          </div>
          <div className="cards-grid">
            {[
              {
                title: "AI-Powered Voting System",
                description: "Decentralized voting platform with real-time tallying and secure blockchain integration.",
                tech: "React, Web3, Smart Contracts"
              },
              {
                title: "Netflix Clone",
                description: "Responsive streaming platform UI with focus on performance and user experience.",
                tech: "React, CSS Grid, REST APIs"
              },
              {
                title: "Weather App (Dark Mode)",
                description: "Location-aware weather application with polished dark theme and smooth animations.",
                tech: "JavaScript, Weather API, CSS"
              },
              {
                title: "AI Prompt & Automation Suite",
                description: "Collection of prompt templates and automation workflows for productivity enhancement.",
                tech: "Python, AI APIs, Automation"
              },
              {
                title: "Personal Analytics Dashboard",
                description: "Lightweight dashboard with scheduled reports and data visualization components.",
                tech: "React, Charts.js, Node.js"
              }
            ].map((project, i) => (
              <div key={i} className="card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div style={{ 
                  marginTop: '1rem', 
                  padding: '0.5rem 1rem', 
                  background: 'var(--bg-tertiary)', 
                  borderRadius: '0.5rem', 
                  fontSize: '0.85rem', 
                  color: 'var(--accent)',
                  fontWeight: '500'
                }}>
                  {project.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-subtitle">Contact</div>
            <h2>Let's collaborate</h2>
          </div>
          <div className="contact-form">
            <form action="https://portfolio-backend-tbox.onrender.com/contact" method="POST">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
            </form>
            <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              🔗 LinkedIn: <a href="https://www.linkedin.com/in/vansh-kashyap-83b203228">Connect with me</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            Built with ❤️ • AI + Web Development • 
            <a href="mailto:kashyapvansh123@gmail.com" style={{ marginLeft: '0.5rem' }}>
              kashyapvansh123@gmail.com
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
