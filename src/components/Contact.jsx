import { useState } from 'react';
import { Mail, Phone, Github, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'gopinathvasuki907@gmail.com',
    href: 'mailto:gopinathvasuki907@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 89254 73356',
    href: 'tel:+918925473356',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Gopinath0306',
    href: 'https://github.com/Gopinath0306',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/GopinathT',
    href: 'https://linkedin.com/in/GopinathT',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Thanjavur, Tamil Nadu',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate form submission (replace with your actual form handler / Formspree / EmailJS)
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-surface-light dark:bg-surface-dark grid-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-tag">Let's connect</span>
          <h2 className="section-heading">Get In Touch</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xl mx-auto">
            I'm actively looking for opportunities. Whether you have a question, a project, or just want to say hi — my inbox is open!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-5">
            <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Contact Details</h3>
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 group-hover:border-accent group-hover:text-accent text-gray-500 dark:text-gray-400 transition-all duration-200">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs text-gray-400 dark:text-gray-600 uppercase tracking-wider">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-medium text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability badge */}
            <div className="mt-6 p-4 rounded-2xl bg-accent/5 border border-accent/20 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-accent animate-pulse-slow shrink-0" />
              <div>
                <p className="font-display font-semibold text-sm text-gray-900 dark:text-white">Available for opportunities</p>
                <p className="font-mono text-xs text-gray-500 dark:text-gray-400 mt-0.5">Open to full-time & internship roles</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="card">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-full py-10 gap-4 text-center">
                <CheckCircle size={48} className="text-accent" />
                <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline mt-2 text-sm px-5 py-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 font-mono text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary w-full justify-center"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-center font-mono text-xs text-gray-400 dark:text-gray-600">
                  Or email directly at{' '}
                  <a href="mailto:gopinathvasuki907@gmail.com" className="text-accent hover:underline">
                    gopinathvasuki907@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
