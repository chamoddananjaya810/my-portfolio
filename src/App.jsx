import './App.css';
import profileImg from './assets/hero.png';
import Navbar from './components/Navbar';

// Temporary sample images - පස්සෙ ඔයාගේ real screenshots වලින් replace කරන්න
const mshopImg = 'https://placehold.co/600x400/1e1b4b/818cf8?text=MShop+Screenshot';
const aswanuImg = 'https://placehold.co/600x400/1e1b4b/818cf8?text=Aswanu+Screenshot';

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar />

      {/* Hero Section - full width, inner content max-w-7xl */}
      <section id="home" className="w-full pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
          <img src={profileImg} alt="Chamod Dhananjaya" className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-indigo-500/50 shadow-lg shadow-indigo-500/20 mb-6" />
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
            Hi, I'm <span className="text-indigo-400">Chamod Dhananjaya</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
            Software Engineering Undergraduate | Backend & Web Developer passionate about building robust applications.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition">View Projects</a>
            <a href="#contact" className="border border-gray-600 hover:border-indigo-400 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg transition">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section - full width, border spans edge to edge */}
      <section id="about" className="w-full py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-gray-300 text-center leading-relaxed max-w-3xl mx-auto">
            I am an undergraduate software engineering student studying through Birmingham City University via the Java Institute. I enjoy turning complex problems into clean, efficient, and scalable backend and web solutions.
          </p>
        </div>
      </section>

      {/* Skills Section - full width, border spans edge to edge */}
      <section id="skills" className="w-full py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-indigo-500 transition">Java / PHP</div>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-indigo-500 transition">React.js</div>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-indigo-500 transition">MySQL / Firebase</div>
            <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-indigo-500 transition">Tailwind CSS / Git</div>
          </div>
        </div>
      </section>

      {/* Projects Section - full width, border spans edge to edge */}
      <section id="projects" className="w-full py-20 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-indigo-500/60 transition group">
              <div className="overflow-hidden">
                <img src={mshopImg} alt="MShop project screenshot" className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-400">MShop</h3>
                <p className="text-gray-300">An e-commerce mobile/web application with integrated database management and backend features.</p>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden hover:border-indigo-500/60 transition group">
              <div className="overflow-hidden">
                <img src={aswanuImg} alt="Aswanu project screenshot" className="w-full h-48 object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-400">Aswanu</h3>
                <p className="text-gray-300">An application designed to connect local farmers and buyers efficiently with map integrations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - full width, border spans edge to edge */}
      <section id="contact" className="w-full py-20 px-6 border-t border-gray-800 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-gray-300 mb-6">Feel free to reach out for collaborations or opportunities.</p>
          <a href="mailto:chamoddhananjaya76@gmail.com" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-3 rounded-lg transition">chamoddhananjaya76@gmail.com</a>
        </div>
      </section>

      {/* Footer - already full width */}
      <footer className="w-full py-6 text-center text-gray-500 border-t border-gray-900 text-sm">
        © 2026 Chamod Dhananjaya. All rights reserved.
      </footer>
    </div>
  );
}

export default App;