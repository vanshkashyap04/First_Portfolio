import React, { useState } from "react";
import myphoto from "/public/myphoto.jpg";

export default function Portfolio() {
  const BACKEND_URL = "https://portfolio-backend-tbox.onrender.com/contact";
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMsg("Sending...");
    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("message", formData.message);

      const res = await fetch(BACKEND_URL, { method: "POST", body: fd });
      const data = await res.json();
      setResponseMsg(data.message || "Message sent!");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setResponseMsg(""), 4000);
    } catch (err) {
      setResponseMsg("Error: " + err.message);
    }
  };

  return (
    <div className="bg-[#050505] text-[#e6eef3] font-[Inter] min-h-screen">
      {/* NAV */}
      <nav className="fixed left-0 right-0 top-3 flex justify-center z-50">
        <div className="w-full max-w-[1100px] flex items-center justify-between px-4">
          <div className="flex gap-3 items-center">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#7bffec] flex items-center justify-center font-[Poppins] font-extrabold text-[#020617]">
              V
            </div>
            <div>
              <div className="font-bold">Vansh Kashyap</div>
              <div className="text-xs text-[#9aa4ab]">
                AI-first • Web • Automation
              </div>
            </div>
          </div>

          <div className="hidden md:flex gap-5 text-sm font-semibold text-[#bcd7e3]">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-[1100px] mx-auto px-6 pt-28">
        {/* HERO */}
        <header
          id="home"
          className="grid md:grid-cols-[1fr_420px] gap-8 items-center py-20"
        >
          {/* Left */}
          <div>
            <div className="text-[#9aa4ab] font-semibold mb-3">Hello — I'm</div>
            <h1 className="font-[Poppins] text-4xl leading-tight mb-2">
              Vansh Kashyap
            </h1>
            <div className="text-[#cfeefb] opacity-95 font-medium mb-4">
              Code • Lift • Learn — I blend modern web development with
              AI-driven automation to build smarter products that scale.
            </div>
            <div className="text-sm text-[#9aa4ab]">
              Email:{" "}
              <a href="mailto:kashyapvansh123@gmail.com" className="text-[#00d4ff]">
                kashyapvansh123@gmail.com
              </a>
            </div>
            <div className="mt-3">
              <a
                className="border border-white/10 px-4 py-2 rounded-lg text-[#9aa4ab] hover:text-white transition"
                href="./VANSH-AUG25-RESUME-CLEANED.pdf"
                download
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="order-first md:order-none">
            <img
              src={myphoto}
              alt="Vansh Kashyap"
              className="w-full max-w-[350px] rounded-full object-cover mx-auto"
            />
          </div>
        </header>

        {/* ABOUT */}
        <section id="about" className="mt-20">
          <div className="flex items-end gap-3 mb-6">
            <div className="font-[Poppins] text-xl">About</div>
            <div className="text-sm text-[#9aa4ab]">A quick look</div>
          </div>
          <div className="flex gap-6 items-center flex-col md:flex-row">
            <div className="w-28 h-28 rounded-lg bg-gradient-to-br from-[#06121a] to-[#00d4ff0f] flex items-center justify-center font-[Poppins] font-extrabold text-[#00d4ff] text-2xl">
              VK
            </div>
            <div>
              <p>
                I build clean web experiences and AI-driven automations. I focus
                on product-first design, efficient frontends, and practical AI
                prompts that ship real value.
              </p>
              <p className="text-sm text-[#9aa4ab] mt-2">
                I enjoy the gym, focusing on discipline, learning, and sharing
                growth-focused content.
              </p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mt-20">
          <div className="flex items-end gap-3 mb-6">
            <div className="font-[Poppins] text-xl">Skills</div>
            <div className="text-sm text-[#9aa4ab]">What I work with</div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-3">
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
                className="bg-[#0f0f10] p-3 rounded-lg border border-white/5"
              >
                <strong>{title}</strong>
                <div className="text-xs text-[#9aa4ab]">{desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <div className="flex items-end gap-3 mb-6">
            <div className="font-[Poppins] text-xl">Projects</div>
            <div className="text-sm text-[#9aa4ab]">Selected works</div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-3">
            {[
              ["AI-Powered Voting System", "Decentralized voting UI with real-time tallying."],
              ["Netflix Clone", "Responsive streaming-like UI focused on performance."],
              ["Weather App (Dark Mode)", "Location-aware app, polished UX."],
              ["AI Prompt & Automation Suite", "Prompt templates + automation workflows."],
              ["Personal Analytics Dashboard", "Lightweight dashboard with scheduled reports."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="bg-[#0f0f10] p-4 rounded-lg border border-white/5"
              >
                <h4>{title}</h4>
                <p className="text-xs text-[#9aa4ab]">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20 mb-20">
          <div className="flex items-end gap-3 mb-6">
            <div className="font-[Poppins] text-xl">Contact</div>
            <div className="text-sm text-[#9aa4ab]">Let's collaborate</div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-[#0f0f10] p-5 rounded-lg border border-white/5 grid gap-3"
          >
            <div className="grid md:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                className="bg-transparent border border-white/10 p-2 rounded-lg text-sm"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border border-white/10 p-2 rounded-lg text-sm"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border border-white/10 p-2 rounded-lg text-sm min-h-[120px]"
              required
            ></textarea>
            <div className="flex gap-3 items-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#00d4ff] to-[#7bffec] text-[#021018] px-4 py-2 rounded-lg font-bold"
              >
                Send message
              </button>
              <div className="text-sm text-[#9aa4ab]">{responseMsg}</div>
            </div>
            <div className="text-sm text-[#9aa4ab]">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/vansh-kashyap-83b203228"
                className="text-[#00d4ff]"
              >
                Visit
              </a>
            </div>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="text-center text-sm text-[#9aa4ab] pb-10">
        Built with ❤️ • AI + Web •{" "}
        <a href="mailto:kashyapvansh123@gmail.com" className="text-[#00d4ff]">
          kashyapvansh123@gmail.com
        </a>
      </footer>
    </div>
  );
}
