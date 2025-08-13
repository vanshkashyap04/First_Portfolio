import React from "react";
import myPhoto from "../public/myphoto.jpg";
import resumeFile from "../public/VANSH-AUG25-RESUME-CLEANED.pdf";

export default function Portfolio() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 text-[#e6eef3] font-inter">
      {/* HERO SECTION */}
      <header
        id="home"
        className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 items-center py-20"
      >
        {/* Left: Text */}
        <div>
          <div className="text-[#9aa4ab] font-semibold mb-3">Hello — I'm</div>
          <h1 className="font-poppins text-4xl md:text-[44px] font-bold leading-tight mb-3">
            Vansh Kashyap
          </h1>
          <p className="text-[#cfeefb] opacity-95 font-medium mb-5">
            Code • Lift • Learn — I blend modern web development with AI-driven
            automation to build smarter products that scale.
          </p>
          <div className="mt-4 text-sm text-[#9aa4ab]">
            Email:{" "}
            <a
              href="mailto:kashyapvansh123@gmail.com"
              className="text-[#00d4ff]"
            >
              kashyapvansh123@gmail.com
            </a>
          </div>
          <div className="mt-3">
            <a
              className="border border-white/10 px-4 py-2 rounded-lg text-[#9aa4ab] hover:border-[#00d4ff] hover:text-[#00d4ff] transition"
              href={resumeFile}
              download
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="hero-photo order-first md:order-none">
          <img
            src={myPhoto}
            alt="Vansh Kashyap"
            className="w-full max-w-[350px] rounded-full object-cover mx-auto"
          />
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="mt-20">
        <div className="flex items-end gap-3 mb-6">
          <div className="font-poppins text-xl">About</div>
          <div className="text-sm text-[#9aa4ab]">A quick look</div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-6 bg-[#0f0f10] p-6 rounded-xl border border-white/5">
          <div className="w-[120px] h-[120px] rounded-lg flex items-center justify-center bg-gradient-to-br from-[#06121a] to-[#00d4ff0f] font-poppins font-bold text-[#00d4ff] text-2xl">
            VK
          </div>
          <div>
            <p className="mb-2">
              I build clean web experiences and AI-driven automations. I focus
              on product-first design, efficient frontends, and practical AI
              prompts that ship real value.
            </p>
            <p className="text-xs text-[#9aa4ab]">
              I enjoy the gym, focusing on discipline, learning, and sharing
              growth-focused content.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-20">
        <div className="flex items-end gap-3 mb-6">
          <div className="font-poppins text-xl">Skills</div>
          <div className="text-sm text-[#9aa4ab]">What I work with</div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[
            ["HTML & CSS", "Semantic markup, responsive"],
            ["JavaScript", "DOM, fetch, tooling"],
            ["React.js", "Component-driven UI"],
            ["Tailwind", "Utility-first styling"],
            ["Python (Flask)", "APIs & simple backends"],
            ["DSA", "Problem solving"],
            ["AI Automation", "Make, Zapier & scripts"],
            ["Prompt Engineering", "Designing useful prompts"],
          ].map(([title, sub], idx) => (
            <div
              key={idx}
              className="bg-[#0f0f10] p-4 rounded-xl border border-white/5"
            >
              <strong>{title}</strong>
              <div className="text-xs text-[#9aa4ab]">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-20">
        <div className="flex items-end gap-3 mb-6">
          <div className="font-poppins text-xl">Projects</div>
          <div className="text-sm text-[#9aa4ab]">Selected works</div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            [
              "AI-Powered Voting System",
              "Decentralized voting UI with real-time tallying.",
            ],
            [
              "Netflix Clone",
              "Responsive streaming-like UI focused on performance.",
            ],
            [
              "Weather App (Dark Mode)",
              "Location-aware app, polished UX.",
            ],
            [
              "AI Prompt & Automation Suite",
              "Prompt templates + automation workflows.",
            ],
            [
              "Personal Analytics Dashboard",
              "Lightweight dashboard with scheduled reports.",
            ],
          ].map(([title, sub], idx) => (
            <div
              key={idx}
              className="bg-[#0f0f10] p-4 rounded-xl border border-white/5"
            >
              <h4 className="font-semibold">{title}</h4>
              <p className="text-xs text-[#9aa4ab]">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-20">
        <div className="flex items-end gap-3 mb-6">
          <div className="font-poppins text-xl">Contact</div>
          <div className="text-sm text-[#9aa4ab]">Let's collaborate</div>
        </div>
        <div className="bg-[#0f0f10] p-6 rounded-xl border border-white/5">
          <form
            action="https://portfolio-backend-tbox.onrender.com/contact"
            method="POST"
            className="space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="bg-transparent border border-white/10 p-2 rounded-lg text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-transparent border border-white/10 p-2 rounded-lg text-sm"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
              className="bg-transparent border border-white/10 p-2 rounded-lg text-sm w-full min-h-[120px]"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00d4ff] to-[#7bffec] text-[#021018] px-4 py-2 rounded-lg font-bold"
            >
              Send message
            </button>
          </form>
          <div className="mt-3 text-sm text-[#9aa4ab]">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/vansh-kashyap-83b203228"
              className="text-[#00d4ff]"
            >
              Visit
            </a>
          </div>
        </div>
      </section>

      <footer className="mt-20 mb-10 text-center text-sm text-[#9aa4ab]">
        Built with ❤️ • AI + Web •{" "}
        <a href="mailto:kashyapvansh123@gmail.com" className="text-[#00d4ff]">
          kashyapvansh123@gmail.com
        </a>
      </footer>
    </main>
  );
}
