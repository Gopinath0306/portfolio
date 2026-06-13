import { Github, Linkedin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/Gopinath0306', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/GopinathT', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:gopinathvasuki907@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+918925473356', label: 'Phone' },
];

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-display font-extrabold text-2xl text-gray-900 dark:text-white">
              Gopinath<span className="text-accent">.</span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Fresher Software Developer passionate about building modern, user-centric web applications.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="p-2.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent text-gray-500 dark:text-gray-400 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-accent font-mono transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact quick info */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-gray-400 dark:text-gray-600 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-mono text-gray-600 dark:text-gray-400">
              <li>
                <a href="mailto:gopinathvasuki907@gmail.com" className="hover:text-accent transition-colors">
                  gopinathvasuki907@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+918925473356" className="hover:text-accent transition-colors">
                  +91 89254 73356
                </a>
              </li>
              <li className="text-gray-400 dark:text-gray-600">Thanjavur, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 dark:border-gray-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-gray-400 dark:text-gray-600 flex items-center gap-1.5">
            © {new Date().getFullYear()} Gopinath T. Built with
            <Heart size={11} className="text-accent fill-accent" />
            using React &amp; Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex items-center gap-2 font-mono text-xs text-gray-400 dark:text-gray-600 hover:text-accent dark:hover:text-accent transition-colors group"
          >
            Back to top
            <span className="p-1.5 rounded-full border border-gray-200 dark:border-gray-800 group-hover:border-accent group-hover:text-accent transition-all">
              <ArrowUp size={12} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
