import { ExternalLink, Award } from 'lucide-react';
import { certifications } from '../data/education';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-tag">Recognition & learning</span>
          <h2 className="section-heading">Certifications &amp; Achievements</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            Courses completed, credentials earned, and milestones along the way.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {certifications.map(cert => (
            <div
              key={cert.id}
              className="card group flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="text-2xl">{cert.icon}</span>
                <span className="font-mono text-xs text-gray-400 dark:text-gray-600 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md whitespace-nowrap">
                  {cert.year}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-accent transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-mono">{cert.issuer}</p>
              </div>
              {cert.link && cert.link !== '#' && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-accent font-mono hover:underline mt-1 w-fit"
                >
                  View Certificate <ExternalLink size={11} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
