import { MapPin, Code2, Target, Sparkles } from 'lucide-react';

const highlights = [
  { icon: '🚀', label: 'Projects Built', value: '6+' },
  { icon: '📚', label: 'Technologies', value: '10+' },
  { icon: '🎓', label: 'MCA', value: '2026' },
  { icon: '📍', label: 'Location', value: 'TN, India' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div className="space-y-6">
            <div>
              <span className="section-tag">Who I am</span>
              <h2 className="section-heading">About Me</h2>
            </div>

           <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
  I'm a passionate fresher Java Developer from{' '}
  <span className="text-gray-900 dark:text-white font-medium">
    Thanjavur, Tamil Nadu
  </span>.
  I have a strong foundation in{' '}
  <span className="text-accent font-medium">
    Java, Object-Oriented Programming, Data Structures, and SQL
  </span>, with hands-on experience in building backend systems and integrating databases.
</p>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey into software development began with a curiosity about how websites work
              and grew into a genuine passion for crafting clean user interfaces and robust backend APIs.
              I enjoy solving problems, writing maintainable code, and continuously learning new technologies.
            </p>

            <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5 space-y-2">
              <div className="flex items-center gap-2 text-accent font-semibold font-display">
                <Target size={18} />
                Career Objective
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                To secure a challenging position as a software developer in a growth-oriented
                organization where I can contribute my technical skills, collaborate with talented teams,
                and continue growing as a full-stack developer.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 font-mono text-sm">
              <MapPin size={14} className="text-accent" />
              Thanjavur, Tamil Nadu, India
            </div>
          </div>

          {/* Right: Stats + Quick skills */}
          <div className="space-y-8">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon, label, value }) => (
                <div key={label} className="card flex items-center gap-4 p-5">
                  <span className="text-3xl">{icon}</span>
                  <div>
                    <p className="font-display font-bold text-2xl text-gray-900 dark:text-white">{value}</p>
                    <p className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick skills overview */}
            <div className="card space-y-4">
              <div className="flex items-center gap-2 font-display font-semibold text-gray-900 dark:text-white">
                <Code2 size={18} className="text-accent" />
                Quick Skills Overview
              </div>
              {[
                { label: 'Frontend (React, HTML, CSS, JS)', pct: 85 },
                { label: 'Backend (Java, JDBC)', pct: 74 },
                { label: 'Database (MySQL, Firebase)', pct: 70 },
                { label: 'Tools & DevOps', pct: 80 },
              ].map(({ label, pct }) => (
                <div key={label} className="space-y-1.5">
                  <div className="flex justify-between">
                    <span className="font-mono text-xs text-gray-600 dark:text-gray-400">{label}</span>
                    <span className="font-mono text-xs text-accent">{pct}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #00D9A3, #33E0B5)' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
