import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-surface-light dark:bg-surface-dark grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-tag">What I work with</span>
          <h2 className="section-heading">Technical Skills</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            A curated set of technologies I've worked with across projects, coursework, and self-learning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map(cat => (
            <div key={cat.id} className="card group hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="font-display font-bold text-gray-900 dark:text-white text-lg">
                  {cat.label}
                </h3>
              </div>

              <ul className="space-y-4">
                {cat.skills.map(skill => (
                  <li key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="font-mono text-xs text-accent font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${skill.level}%`, background: 'linear-gradient(90deg, #00D9A3, #33E0B5)' }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Tech badge row */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {['Java', 'React.js', 'Node.js', 'Express.js', 'MySQL', 'Firebase', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Git', 'Postman', 'VS Code', 'Vercel', 'REST API'].map(tech => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 font-mono text-xs text-gray-600 dark:text-gray-400 hover:border-accent hover:text-accent transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
