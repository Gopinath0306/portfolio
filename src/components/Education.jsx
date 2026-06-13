import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-surface-light dark:bg-surface-dark grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-tag">My academic journey</span>
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <div key={edu.id} className="card relative overflow-hidden">
              {/* Accent stripe */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-accent-dark rounded-l-2xl" />

              <div className="pl-4">
                <div className="flex flex-wrap items-start gap-4 justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent mt-0.5">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white leading-tight">
                        {edu.degree}
                      </h3>
                      <p className="font-semibold text-gray-700 dark:text-gray-300 mt-0.5">{edu.institution}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-mono border border-accent/20 whitespace-nowrap">
                    {edu.grade}
                  </span>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-accent" />
                    {edu.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-accent" />
                    {edu.location}
                  </span>
                </div>

                {edu.highlights.length > 0 && (
                  <ul className="space-y-1.5">
                    {edu.highlights.map(h => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 size={14} className="text-accent mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
