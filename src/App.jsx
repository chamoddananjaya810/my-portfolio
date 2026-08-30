import { useEffect, useState } from 'react';
import { FaAndroid, FaCss3Alt, FaGlobe, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa';
import { SiFirebase, SiFlutter, SiHibernate, SiLaravel, SiMysql, SiPhp, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import './App.css';
import profileImg from './assets/pp4 (1).jpg';
import Navbar from './components/Navbar';

// Temporary sample images - පස්සෙ ඔයාගේ real screenshots වලින් replace කරන්න
const mshopImg1 = 'https://placehold.co/600x400/1e1b4b/818cf8?text=MShop+Screenshot+1';
const mshopImg2 = 'https://placehold.co/600x400/1e1b4b/818cf8?text=MShop+Screenshot+2';
const mshopImg3 = 'https://placehold.co/600x400/1e1b4b/818cf8?text=MShop+Screenshot+3';
const aswanuImg1 = 'https://placehold.co/600x400/1e1b4b/818cf8?text=Aswanu+Screenshot+1';
const aswanuImg2 = 'https://placehold.co/600x400/1e1b4b/818cf8?text=Aswanu+Screenshot+2';

const skills = [
  { icon: FaHtml5, label: 'HTML', color: 'text-orange-500' },
  { icon: FaCss3Alt, label: 'CSS', color: 'text-blue-500' },
  { icon: FaJs, label: 'JavaScript', color: 'text-yellow-400' },
  { icon: FaJava, label: 'Java', color: 'text-red-500' },
  { icon: FaGlobe, label: 'Web', color: 'text-indigo-400' },
  { icon: SiSpringboot, label: 'Spring Boot', color: 'text-green-500' },
  { icon: FaAndroid, label: 'Android', color: 'text-green-400' },
  { icon: SiFlutter, label: 'Flutter', color: 'text-sky-400' },
  { icon: SiLaravel, label: 'Laravel', color: 'text-red-400' },
  { icon: SiHibernate, label: 'Hibernate', color: 'text-yellow-600' },
  { icon: FaReact, label: 'React', color: 'text-cyan-400' },
  { icon: SiMysql, label: 'MySQL', color: 'text-amber-400' },
  { icon: SiPhp, label: 'PHP', color: 'text-indigo-300' },
  { icon: SiFirebase, label: 'Firebase', color: 'text-yellow-500' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-300' },
];

// Project data - images දැන් array එකක් - ගොඩක් screenshots දාන්න පුළුවන්
const projects = [
  {
    id: 'mshop',
    title: 'MShop',
    images: [mshopImg1, mshopImg2, mshopImg3],
    shortDesc: 'An e-commerce mobile/web application with integrated database management and backend features.',
    longDesc: 'MShop is a full-featured e-commerce platform built to handle product listings, user authentication, cart management, and order processing. The backend was designed for scalability, with a normalized MySQL database schema and RESTful APIs connecting the mobile and web clients.',
    tech: ['Java', 'PHP', 'MySQL', 'React'],
    liveLink: '',
    githubLink: '',
  },
  {
    id: 'aswanu',
    title: 'Aswanu',
    images: [aswanuImg1, aswanuImg2],
    shortDesc: 'An application designed to connect local farmers and buyers efficiently with map integrations.',
    longDesc: 'Aswanu bridges the gap between local farmers and buyers by providing a marketplace with live location-based discovery. It integrates map APIs to help buyers find nearby farmers, and includes a messaging system for direct negotiation.',
    tech: ['Flutter', 'Firebase', 'Java'],
    liveLink: '',
    githubLink: '',
  },
];

function ImageCarousel({ images, title }) {
  const [current, setCurrent] = useState(0);

  const goPrev = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative">
      <img src={images[current]} alt={`${title} screenshot ${current + 1}`} className="object-cover w-full h-56 sm:h-72" />

      {images.length > 1 && (
        <>
          {/* Left/Right arrows */}
          <button
            onClick={goPrev}
            className="absolute flex items-center justify-center text-white transition -translate-y-1/2 rounded-full w-9 h-9 left-3 top-1/2 bg-black/50 hover:bg-black/70"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goNext}
            className="absolute flex items-center justify-center text-white transition -translate-y-1/2 rounded-full w-9 h-9 right-3 top-1/2 bg-black/50 hover:bg-black/70"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot indicators */}
          <div className="absolute flex gap-2 -translate-x-1/2 bottom-3 left-1/2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-indigo-400' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          {/* Image counter */}
          <div className="absolute px-2 py-1 text-xs text-white rounded-md top-3 left-3 bg-black/50">
            {current + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden bg-gray-900 border border-gray-800 rounded-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute z-10 flex items-center justify-center w-8 h-8 text-gray-300 transition rounded-full top-4 right-4 bg-gray-900/80 hover:bg-gray-800 hover:text-white"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <ImageCarousel images={project.images} title={project.title} />

        <div className="p-6 sm:p-8">
          <h3 className="mb-3 text-2xl font-bold text-indigo-400">{project.title}</h3>
          <p className="mb-5 leading-relaxed text-gray-300">{project.longDesc}</p>

          <div className="mb-6">
            <h4 className="mb-2 text-sm font-semibold tracking-wide text-gray-400 uppercase">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 text-sm text-indigo-300 border rounded-full bg-indigo-500/10 border-indigo-500/30">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {(project.liveLink || project.githubLink) && (
            <div className="flex gap-4">
              {project.liveLink && (
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2 font-medium text-gray-300 transition border border-gray-600 rounded-lg hover:border-indigo-400 hover:text-white">
                  View Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen text-white bg-gray-950">
      <Navbar />

      {/* Hero Section - full width, inner content max-w-7xl */}
      <section id="home" className="w-full px-6 pt-32 pb-20">
        <div className="flex flex-col items-center justify-center mx-auto text-center max-w-7xl">
          <img src={profileImg} alt="Chamod Dhananjaya" className="object-cover mb-6 border-4 rounded-full shadow-lg w-36 h-36 sm:w-44 sm:h-44 border-indigo-500/50 shadow-indigo-500/20" />
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-indigo-400">Chamod Dhananjaya</span>
          </h1>
          <p className="max-w-2xl mb-8 text-lg text-gray-300 sm:text-xl">
            Software Engineering Undergraduate | Backend & Web Developer passionate about building robust applications.
          </p>
          <div className="flex space-x-4">
            <a href="#projects" className="px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">View Projects</a>
            <a href="#contact" className="px-6 py-3 font-medium text-gray-300 transition border border-gray-600 rounded-lg hover:border-indigo-400 hover:text-white">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section - full width, border spans edge to edge */}
      <section id="about" className="w-full px-6 py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold text-center">About Me</h2>
          <p className="max-w-3xl mx-auto mb-6 text-lg leading-relaxed text-center text-gray-300">
            I am a Software Engineering undergraduate reading for my <span className="font-semibold text-indigo-400">BSc (Hons) in Software Engineering</span> at <span className="text-white">Birmingham City University</span> via the Java Institute.
          </p>
          <p className="max-w-3xl mx-auto leading-relaxed text-center text-gray-400">
            I hold UK-awarded qualifications including a <span className="font-medium text-gray-200">Diploma</span> and a <span className="font-medium text-gray-200">Higher National Diploma (HND) in Software Engineering</span>. I specialize in backend development and enterprise web applications, focusing on scalable, clean, and efficient solutions.
          </p>
        </div>
      </section>

      {/* Skills Section - full width, border spans edge to edge, expanded icon grid */}
      <section id="skills" className="w-full px-6 py-20 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center">Skills</h2>
          <div className="grid grid-cols-3 gap-5 text-center sm:grid-cols-4 md:grid-cols-5">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.label}
                  className="flex flex-col items-center gap-2 p-4 transition duration-300 bg-gray-900 border border-gray-800 rounded-lg hover:border-indigo-500 hover:-translate-y-1 group"
                >
                  <Icon className={`w-8 h-8 ${skill.color} transition duration-300 group-hover:scale-110`} />
                  <span className="text-xs font-medium text-gray-200 sm:text-sm">{skill.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section - clickable cards that open a detail modal with image carousel */}
      <section id="projects" className="w-full px-6 py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-2 text-3xl font-bold text-center">Projects</h2>
          <p className="mb-10 text-sm text-center text-gray-500">Click a project to see more details</p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="overflow-hidden text-left transition bg-gray-900 border border-gray-800 rounded-xl hover:border-indigo-500/60 hover:-translate-y-1 group"
              >
                <div className="overflow-hidden">
                  <img src={project.images[0]} alt={`${project.title} project screenshot`} className="object-cover w-full h-48 transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-indigo-400">{project.title}</h3>
                  <p className="text-gray-300">{project.shortDesc}</p>
                  <span className="inline-block mt-4 text-sm font-medium text-indigo-400 group-hover:underline">
                    View Details →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - full width, border spans edge to edge */}
      <section id="contact" className="w-full px-6 py-20 text-center border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
          <p className="mb-6 text-gray-300">Feel free to reach out for collaborations or opportunities.</p>
          <a href="mailto:chamoddhananjaya76@gmail.com" className="inline-block px-6 py-3 font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">chamoddhananjaya76@gmail.com</a>
        </div>
      </section>

      {/* Footer - already full width */}
      <footer className="w-full py-6 text-sm text-center text-gray-500 border-t border-gray-900">
        © 2026 Chamod Dhananjaya. All rights reserved.
      </footer>

      {/* Project Detail Modal with image carousel */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;