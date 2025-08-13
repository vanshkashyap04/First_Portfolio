import React from "react";
import "./index.css";

export default function Portfolio() {
  return (
    <main>
      {/* HERO SECTION */}
      <header className="hero" id="home">
        {/* Left: Text */}
        <div>
          <div className="eyebrow">Hello — I'm</div>
          <h1 className="fade-up">Vansh Kashyap</h1>
          <div className="lead fade-up">
            Code • Lift • Learn — I blend modern web development with
            AI-driven automation to build smarter products that scale.
          </div>
          <div style={{ marginTop: "18px", color: "var(--muted)", fontSize: "13px" }}>
            Email:{" "}
            <a href="mailto:kashyapvansh123@gmail.com">kashyapvansh123@gmail.com</a>
          </div>
          <div style={{ marginTop: "12px" }}>
            <a
              className="ghost"
              href={"/resume/VANSH-RESUME-UPDATED.pdf"}
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-photo">
          <img
            src={"/myphoto.jpg"}
            alt="Vansh Kashyap"
            style={{
              width: "100%",
              maxWidth: "350px",
              borderRadius: "50%",
              objectFit: "cover",
              display: "block",
              margin: "auto"
            }}
          />
        </div>
      </header>

      {/* ABOUT */}
      <section id="about">
        <div className="section-head">
          <div className="section-title">About</div>
          <div className="section-sub">A quick look</div>
        </div>
        <div className="about fade-up">
          <div className="avatar">VK</div>
          <div>
            <p>
              I build clean web experiences and AI-driven automations. I focus on
              product-first design, efficient frontends, and practical AI prompts
              that ship real value.
            </p>
            <p className="tiny">
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
        <div className="skills fade-up">
          <div className="skill">
            <strong>HTML & CSS</strong>
            <div className="tiny">Semantic markup, responsive</div>
          </div>
          <div className="skill">
            <strong>JavaScript</strong>
            <div className="tiny">DOM, fetch, tooling</div>
          </div>
          <div className="skill">
            <strong>React.js</strong>
            <div className="tiny">Component-driven UI</div>
          </div>
          <div className="skill">
            <strong>Tailwind</strong>
            <div className="tiny">Utility-first styling</div>
          </div>
          <div className="skill">
            <strong>Python (Flask)</strong>
            <div className="tiny">APIs & simple backends</div>
          </div>
          <div className="skill">
            <strong>DSA</strong>
            <div className="tiny">Problem solving</div>
          </div>
          <div className="skill">
            <strong>AI Automation</strong>
            <div className="tiny">Make, Zapier & scripts</div>
          </div>
          <div className="skill">
            <strong>Prompt Engineering</strong>
            <div className="tiny">Designing useful prompts</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects">
        <div className="section-head">
          <div className="section-title">Projects</div>
          <div className="section-sub">Selected works</div>
        </div>
        <div className="projects-grid fade-up">
          <div className="project">
            <h4>AI-Powered Voting System</h4>
            <p className="tiny">Decentralized voting UI with real-time tallying.</p>
          </div>
          <div className="project">
            <h4>Netflix Clone</h4>
            <p className="tiny">Responsive streaming-like UI focused on performance.</p>
          </div>
          <div className="project">
            <h4>Weather App (Dark Mode)</h4>
            <p className="tiny">Location-aware app, polished UX.</p>
          </div>
          <div className="project">
            <h4>AI Prompt & Automation Suite</h4>
            <p className="tiny">Prompt templates + automation workflows.</p>
          </div>
          <div className="project">
            <h4>Personal Analytics Dashboard</h4>
            <p className="tiny">Lightweight dashboard with scheduled reports.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-head">
          <div className="section-title">Contact</div>
          <div className="section-sub">Let's collaborate</div>
        </div>
        <div className="contact-card fade-up">
          <form
            id="contactForm"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              fetch("https://portfolio-backend-tbox.onrender.com/contact", {
                method: "POST",
                body: formData,
              })
                .then((r) =>
                  r.ok
                    ? r.json()
                    : Promise.reject(new Error(`Server error ${r.status}`))
                )
                .then((data) => {
                  alert(data.message || "Message sent!");
                  e.target.reset();
                })
                .catch((err) => {
                  alert("Error: " + err.message);
                });
            }}
          >
            <div className="form-row">
              <input type="text" name="name" placeholder="Your name" required />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-row">
              <textarea name="message" placeholder="Your message" required />
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <button className="btn" type="submit">
                Send message
              </button>
            </div>
          </form>
          <div style={{ marginTop: "8px", color: "var(--muted)", fontSize: "13px" }}>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/vansh-kashyap-83b203228">
              Visit
            </a>
          </div>
        </div>
      </section>

      <footer>
        Built with ❤️ • AI + Web •{" "}
        <a href="mailto:kashyapvansh123@gmail.com">kashyapvansh123@gmail.com</a>
      </footer>
    </main>
  );
}
