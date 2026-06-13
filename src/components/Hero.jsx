import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight } from 'lucide-react';

const floatingChips = ['React','Java', 'MySQL', 'JavaScript', 'Git'];

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
    >
      {/* Ambient blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Status chip */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-accent text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
              Open to work — Fresher SDE
            </div>

            {/* Name */}
            <div>
              <p className="font-mono text-sm text-gray-500 dark:text-gray-400 mb-2 tracking-widest uppercase">
                Hello, I'm
              </p>
              <h1 className="font-display text-6xl md:text-7xl font-extrabold leading-none tracking-tight">
                <span className="text-gray-900 dark:text-white">Gopinath</span>
                <br />
                <span className="text-gradient">T</span>
                <span className="text-gray-900 dark:text-white">.</span>
              </h1>
              <p className="font-display text-2xl md:text-3xl font-semibold text-gray-500 dark:text-gray-400 mt-3">
                Software Developer
              </p>
            </div>

            {/* Tagline */}
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              I build clean, fast, and user-friendly web experiences.
              Passionate about turning ideas into reality with modern tech.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <button onClick={() => handleScroll('projects')} className="btn-primary">
                View Projects
                <ChevronRight size={16} />
              </button>
              <a
                href="/resume.pdf"
                download="Gopinath_T_Resume.pdf"
                className="btn-outline"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button onClick={() => handleScroll('contact')} className="btn-outline">
                <Mail size={16} />
                Contact Me
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs text-gray-400 dark:text-gray-600">FIND ME ON</span>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800 max-w-16" />
              <div className="flex gap-3">
                <a
                  href="https://github.com/Gopinath0306"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent text-gray-500 dark:text-gray-400 transition-all duration-200 hover:scale-110"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com/in/GopinathT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent text-gray-500 dark:text-gray-400 transition-all duration-200 hover:scale-110"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="mailto:gopinathvasuki907@gmail.com"
                  className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent text-gray-500 dark:text-gray-400 transition-all duration-200 hover:scale-110"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="hidden md:flex justify-center items-center relative">
            {/* Main card */}
            <div className="relative w-80 h-80 rounded-3xl border-2 border-accent/20 bg-white dark:bg-gray-900 shadow-2xl glow flex flex-col items-center justify-center gap-6 noise">
              {/* Avatar placeholder */}
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-accent/30 to-accent/10 border-2 border-accent/30 flex items-center justify-center text-6xl font-display font-bold text-accent">
                G
              </div>
              <div className="text-center px-6">
                <p className="font-display font-bold text-xl text-gray-900 dark:text-white">Gopinath T</p>
                <p className="font-mono text-xs text-accent mt-1">@Gopinath0306</p>
              </div>
              {/* Floating chips */}
              <div className="flex flex-wrap justify-center gap-2 px-4">
                {floatingChips.slice(0, 4).map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-mono border border-accent/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Orbiting elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg flex items-center justify-center text-2xl animate-float">
              ⚛️
            </div>
            <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg flex items-center justify-center text-xl animate-float" style={{ animationDelay: '2s' }}>
              🟢
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-2xl bg-accent/20 border border-accent/30 shadow-lg flex items-center justify-center text-lg animate-float" style={{ animationDelay: '4s' }}>
              🍃
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600">
          <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent" />
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
