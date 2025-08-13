import React from "react";

export default function Portfolio() {
  return (
    <main className="max-w-[1100px] mx-auto px-6">
      {/* Hero Section */}
      <header
        id="home"
        className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-20"
      >
        {/* Left - Text */}
        <div>
          <div className="text-gray-400 font-semibold mb-3">Hello — I'm</div>
          <h1 className="font-poppins text-4xl md:text-5xl font-bold leading-tight">
            Vansh Kashyap
          </h1>
          <p className="text-gray-200 mt-4 text-lg">
            Code • Lift • Learn — I blend modern web development with AI-driven
            automation to build smarter products that scale.
          </p>
          <p className="text-gray-400 text-sm mt-3">
            Email:{" "}
            <a
              href="mailto:kashyapvansh123@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              kashyapvansh123@gmail.com
            </a>
          </p>
          <div className="mt-5">
            <a
              href="/VANSH-AUG25-RESUME-CLEANED.pdf"
              download
              className="bg-gradient-to-r from-cyan-400 to-teal-300 text-black px-4 py-2 rounded-lg font-bold"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right - Circular Photo */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/myphoto.jpg"
            alt="Vansh Kashyap"
            className="w-60 h-60 md:w-80 md:h-80 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
          />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="mt-16">
        <div className="flex items-end gap-3">
          <h2 className="font-poppins text-2xl font-bold">About</h2>
          <p className="text-gray-400 text-sm">A quick look</p>
        </div>
        <div className="flex gap-6 items-center mt-6">
          <div className="w-28 h-28 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-cyan-900 font-poppins font-bold text-cyan-400 text-2xl">
            VK
          </div>
          <div>
            <p className="text-gray-200">
              I build clean web experiences and AI-driven automations. I focus
              on product-first design, efficient frontends, and practical AI
              prompts that ship real value.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              I enjoy the gym, focusing on discipline, learning, and sharing
              growth-focused content.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-16">
        <div className="flex items-end gap-3">
          <h2 className="font-poppins text-2xl font-bold">Skills</h2>
          <p className="text-gray-400 text-sm">What I work with</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
          {[
            ["HTML & CSS", "Semantic markup, responsive"],
            ["JavaScript", "DOM, fetch, tooling"],
            ["React.js", "Component-driven UI"],
            ["Tailwind", "Utility-first styling"],
            ["Python (Flask)", "APIs & simple backends"],
            ["DSA", "Problem solving"],
            ["AI Automation", "Make, Zapier & scripts"],
            ["Prompt Engineering", "Designing useful prompts"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-[#0f0f10] p-4 rounded-xl border border-gray-800"
            >
              <strong>{title}</strong>
              <div className="text-gray-500 text-sm">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-16">
        <div className="flex items-end gap-3">
          <h2 className="font-poppins text-2xl font-bold">Projects</h2>
          <p className="text-gray-400 text-sm">Selected works</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            ["AI-Powered Voting System", "Decentralized voting UI with real-time tallying."],
            ["Netflix Clone", "Responsive streaming-like UI focused on performance."],
            ["Weather App (Dark Mode)", "Location-aware app, polished UX."],
            ["AI Prompt & Automation Suite", "Prompt templates + automation workflows."],
            ["Personal Analytics Dashboard", "Lightweight dashboard with scheduled reports."],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="bg-[#0f0f10] p-4 rounded-xl border border-gray-800"
            >
              <h4 className="font-bold">{title}</h4>
              <p className="text-gray-500 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-16 mb-20">
        <div className="flex items-end gap-3">
          <h2 className="font-poppins text-2xl font-bold">Contact</h2>
          <p className="text-gray-400 text-sm">Let's collaborate</p>
        </div>
        <div className="bg-[#0f0f10] p-6 rounded-xl border border-gray-800 mt-6">
          <form
            action="https://portfolio-backend-tbox.onrender.com/contact"
            method="POST"
            className="grid gap-4"
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
              className="bg-transparent border border-gray-700 p-2 rounded-lg min-h-[120px]"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 to-teal-300 text-black px-4 py-2 rounded-lg font-bold"
            >
              Send message
            </button>
          </form>
          <div className="text-gray-400 text-sm mt-3">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/vansh-kashyap-83b203228"
              className="text-cyan-400 hover:underline"
            >
              Visit
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center pb-10">
        Built with ❤️ • AI + Web •{" "}
        <a
          href="mailto:kashyapvansh123@gmail.com"
          className="text-cyan-400 hover:underline"
        >
          kashyapvansh123@gmail.com
        </a>
      </footer>
    </main>
  );
}
