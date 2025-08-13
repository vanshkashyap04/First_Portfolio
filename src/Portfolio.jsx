import React from "react";

export default function Portfolio() {
  return (
    <main className="max-w-[1100px] mx-auto px-6 text-[#e6eef3]">
      {/* HERO */}
      <header
        id="home"
        className="grid grid-cols-1 md:grid-cols-[1fr_420px] gap-8 items-center py-20"
      >
        {/* Left */}
        <div>
          <div className="text-gray-400 font-semibold mb-3">Hello — I'm</div>
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-3">
            Vansh Kashyap
          </h1>
          <p className="text-gray-200 mb-4">
            Code • Lift • Learn — I blend modern web development with
            AI-driven automation to build smarter products that scale.
          </p>
          <div className="text-sm text-gray-400 mb-3">
            Email:{" "}
            <a
              href="mailto:kashyapvansh123@gmail.com"
              className="text-[#00d4ff]"
            >
              kashyapvansh123@gmail.com
            </a>
          </div>
          <a
            className="border border-gray-600 px-4 py-2 rounded-lg text-gray-300 hover:border-[#00d4ff] hover:text-[#00d4ff]"
            href="/VANSH-AUG25-RESUME-CLEANED.pdf"
            download
          >
            Download Resume
          </a>
        </div>

        {/* Right Photo */}
        <div className="flex justify-center hero-photo">
          <img
            src="/myphoto.jpg"
            alt="Vansh Kashyap"
            className="w-full max-w-[350px] rounded-full object-cover"
          />
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="mt-20">
        <div className="flex items-end gap-3 mb-4">
          <div className="font-poppins text-xl font-bold">About</div>
          <div className="text-sm text-gray-400">A quick look</div>
        </div>
        <div className="flex gap-6 items-center">
          <div className="w-[120px] h-[120px] rounded-lg bg-[#06121a] flex items-center justify-center font-poppins font-bold text-[#00d4ff] text-2xl">
            VK
          </div>
          <div>
            <p className="mb-2">
              I build clean web experiences and AI-driven automations. I focus
              on product-first design, efficient frontends, and practical AI
              prompts that ship real value.
            </p>
            <p className="text-sm text-gray-400">
              I enjoy the gym, focusing on discipline, learning, and sharing
              growth-focused content.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-20">
        <div className="flex items-end gap-3 mb-4">
          <div className="font-poppins text-xl font-bold">Skills</div>
          <div className="text-sm text-gray-400">What I work with</div>
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
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-[#0f0f10] p-4 rounded-lg border border-gray-800"
            >
              <strong>{title}</strong>
              <div className="text-xs text-gray-400">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="mt-20">
        <div className="flex items-end gap-3 mb-4">
          <div className="font-poppins text-xl font-bold">Projects</div>
          <div className="text-sm text-gray-400">Selected works</div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            ["AI-Powered Voting System", "Decentralized voting UI with real-time tallying."],
            ["Netflix Clone", "Responsive streaming-like UI focused on performance."],
            ["Weather App (Dark Mode)", "Location-aware app, polished UX."],
            ["AI Prompt & Automation Suite", "Prompt templates + automation workflows."],
            ["Personal Analytics Dashboard", "Lightweight dashboard with scheduled reports."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="bg-[#0f0f10] p-4 rounded-lg border border-gray-800"
            >
              <h4 className="font-semibold">{title}</h4>
              <p className="text-xs text-gray-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mt-20">
        <div className="flex items-end gap-3 mb-4">
          <div className="font-poppins text-xl font-bold">Contact</div>
          <div className="text-sm text-gray-400">Let's collaborate</div>
        </div>
        <div className="bg-[#0f0f10] p-6 rounded-lg border border-gray-800 space-y-4">
          <form
            id="contactForm"
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
                className="bg-transparent border border-gray-700 p-2 rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="bg-transparent border border-gray-700 p-2 rounded-lg"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
              className="bg-transparent border border-gray-700 p-2 rounded-lg min-h-[120px] w-full"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#00d4ff] to-[#7bffec] text-black px-4 py-2 rounded-lg font-bold"
            >
              Send message
            </button>
          </form>
          <div className="text-sm text-gray-400">
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

      {/* FOOTER */}
      <footer className="mt-20 mb-10 text-center text-sm text-gray-500">
        Built with ❤️ • AI + Web •{" "}
        <a
          href="mailto:kashyapvansh123@gmail.com"
          className="text-[#00d4ff]"
        >
          kashyapvansh123@gmail.com
        </a>
      </footer>
    </main>
  );
}
