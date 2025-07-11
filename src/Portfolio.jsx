import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaPython } from 'react-icons/fa';
import { SiTailwindcss, SiC, SiGit } from 'react-icons/si';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Portfolio = () => {
  return (
    <>
      <section className="pt-24 sm:pt-36 text-center py-16 px-4 sm:px-6 bg-black min-h-screen text-white">
        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/myphoto.jpg"
            alt="Vansh Kashyap"
            className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg hover:scale-105 transition duration-300 mb-6"
          />
          <h1 className="text-3xl sm:text-5xl font-extrabold text-indigo-400">Hi, I'm Vansh Kashyap 👨‍💻</h1>
        </motion.div>

        <TypeAnimation
          sequence={['Frontend Developer', 1500, 'Tech Storyteller', 1500, 'Creative Thinker', 1500]}
          wrapper="h2"
          speed={50}
          className="text-xl sm:text-2xl text-gray-400 mt-4"
          repeat={Infinity}
        />

        <p className="max-w-xl mx-auto mt-6 text-gray-300 text-lg">
          A Computer Science graduate passionate about transforming concepts into interactive web experiences. I specialize in React.js and modern frontend ecosystems, love solving real-world problems, and bring discipline and creativity to the table — not just from tech, but from books, the gym, and storytelling.
        </p>
      </section>

      <section className="bg-gray-900 text-white py-16 px-6 text-left">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-6">Experience</h2>
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold">Content Creator – CricTracker (Internship)</h3>
            <p className="mt-2 text-gray-300">Crafted tech-informed cricket content, IPL analyses, and engaging editorial using storytelling and SEO strategies. This internship honed my ability to communicate complex information with creativity and clarity.</p>
            <p className="mt-2 text-sm text-gray-500">Duration: July, 2022 – January, 2023</p>
          </div>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-6">Skills & Tools ⚙️</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
            <FaHtml5 size={40} className="text-orange-500 hover:scale-110 transition-transform duration-300" />
            <FaCss3Alt size={40} className="text-blue-500 hover:scale-110 transition-transform duration-300" />
            <FaJs size={40} className="text-yellow-300 hover:scale-110 transition-transform duration-300" />
            <FaReact size={40} className="text-cyan-400 hover:scale-110 transition-transform duration-300" />
            <SiTailwindcss size={40} className="text-teal-300 hover:scale-110 transition-transform duration-300" />
            <FaPython size={40} className="text-yellow-400 hover:scale-110 transition-transform duration-300" />
            <SiC size={40} className="text-gray-300 hover:scale-110 transition-transform duration-300" />
            <SiGit size={40} className="text-orange-400 hover:scale-110 transition-transform duration-300" />
            <FaGithub size={40} className="text-gray-400 hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </section>

      <section id="projects" className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-indigo-400 mb-12">💻 Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400">Decentralized Voting System</h3>
            <p className="text-gray-300 mt-2">A blockchain-based voting platform ensuring transparency and security using smart contracts.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400">Netflix Clone</h3>
            <p className="text-gray-300 mt-2">Built with React.js & TMDB API, mimicking Netflix interface with real-time data.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
            <h3 className="text-xl font-semibold text-purple-400">Weather App</h3>
            <p className="text-gray-300 mt-2">Displays live weather using OpenWeatherMap API. Responsive + Dark mode.</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-950 to-black py-20 px-6 text-center text-white">
        <div className="max-w-xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold text-indigo-300 mb-2">🚀 Want to see how I grow in real time?</h3>
            <p className="text-gray-400 text-lg mb-8">
              <a
                href="https://linkedin.com/in/vansh-kashyap-83b203228"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-200 underline"
              >
                Watch my journey on LinkedIn
              </a>
            </p>
            <a
              href="/resume/VANSH-NEW-RESUME-JULY-2025.pdf"
              download
              className="inline-block mb-6 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition"
            >
              📄 Download My Resume
            </a>
            <p className="text-lg text-gray-300">
              Or email me at
              <a href="mailto:Kashyapvansh123@gmail.com" className="text-purple-300 underline hover:text-purple-200 ml-1">
                Kashyapvansh123@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Contact Form */}
          <div className="mt-12">
            <h3 className="text-xl font-semibold text-indigo-300 mb-4">📬 Or send me a message directly here:</h3>

            <form
              action="https://formspree.io/f/xqabrgoz"
              method="POST"
              onSubmit={() => alert('✅ Message sent successfully!')}
              className="space-y-4 text-left"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="bg-purple-600 px-6 py-2 text-white rounded hover:bg-purple-700 transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black text-center py-6 border-t border-gray-700 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Vansh Kashyap • Full of code, curiosity, and caffeine ☕
      </footer>
    </>
  );
};

export default Portfolio;
