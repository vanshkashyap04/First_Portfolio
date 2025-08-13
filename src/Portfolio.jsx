import React from "react";

export default function Portfolio() {
  return (
    <main>
      {/* HERO */}
      <header className="hero" id="home">
        {/* Left */}
        <div>
          <div className="eyebrow">Hello — I'm</div>
          <h1>Vansh Kashyap</h1>
          <p className="lead">
            Code • Lift • Learn — I blend modern web development with
            AI-driven automation to build smarter products that scale.
          </p>
          <div className="eyebrow" style={{ marginBottom: '12px' }}>
            Email:{" "}
            <a href="mailto:kashyapvansh123@gmail.com">
              kashyapvansh123@gmail.com
            </a>
          </div>
          <a
            className="ghost"
            href="./VANSH-AUG25-RESUME-CLEANED.pdf"
            download
          >
            Download Resume
          </a>
        </div>

        {/* Right Photo */}
        <div className="hero-photo">
          <img
            src="./public/myphoto.jpg"
            alt="Vansh Kashyap"
            style={{ width: '100%', maxWidth: '350px', borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="section-head">
          <div className="section-title">About</div>
          <div className="section-sub">A quick look</div>
        </div>
        <div className="about">
          <div className="avatar">VK</div>
          <div>
            <p style={{ marginBottom: '8px' }}>
              I build clean web experiences and AI-driven automations. I focus
              on product-first design, efficient frontends, and practical AI
              prompts that ship real value.
            </p>
            <p className="section-sub">
              I enjoy the gym, focusing on discipline, learning, and sharing
              growth-focused content.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills">
        <div className="section-head">
          <div className="section-title">Skills</div>
          <div className="section-sub">What I work with</div>
        </div>
        <div className="skills">
          {[
            ["HTML & CSS", "Semantic markup, responsive"],
            ["JavaScript", "DOM, fetch, tooling"],
            ["React.js", "Component-driven UI"],
            ["Tailwind", "Utility-first styling"],
            ["Python (Flask)", "APIs & simple backends"],
            ["DSA", "Problem solving"],
            ["AI Automation", "Make, Zapier & scripts"],
            ["Prompt Engineering", "Designing useful prompts"],
          ].map(([title, desc], i) => (
            <div key={i} className="skill">
              <strong>{title}</strong>
              <div className="section-sub" style={{ fontSize: '12px' }}>{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-head">
          <div className="section-title">Projects</div>
          <div className="section-sub">Selected works</div>
        </div>
        <div className="projects-grid">
          {[
            ["AI-Powered Voting System", "Decentralized voting UI with real-time tallying."],
            ["Netflix Clone", "Responsive streaming-like UI focused on performance."],
            ["Weather App (Dark Mode)", "Location-aware app, polished UX."],
            ["AI Prompt & Automation Suite", "Prompt templates + automation workflows."],
            ["Personal Analytics Dashboard", "Lightweight dashboard with scheduled reports."],
          ].map(([title, desc], i) => (
            <div key={i} className="project">
              <h4 style={{ fontWeight: '600' }}>{title}</h4>
              <p className="section-sub" style={{ fontSize: '12px' }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-head">
          <div className="section-title">Contact</div>
          <div className="section-sub">Let's collaborate</div>
        </div>
        <div className="contact-card">
          <form
            id="contactForm"
            action="https://portfolio-backend-tbox.onrender.com/contact"
            method="POST"
            style={{ display: 'grid', gap: '12px' }}
          >
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
            />
            <button type="submit" className="btn">
              Send message
            </button>
          </form>
          <div className="section-sub">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/vansh-kashyap-83b203228">
              Visit
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        Built with ❤️ • AI + Web •{" "}
        <a href="mailto:kashyapvansh123@gmail.com">
          kashyapvansh123@gmail.com
        </a>
      </footer>
    </main>
  );
}
