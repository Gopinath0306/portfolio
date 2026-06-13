import { useState, useEffect } from 'react';
import { Github, ExternalLink, Star, Plus, Pencil, Trash2, X, Check, Tag } from 'lucide-react';
import defaultProjects from '../data/projects';

const STORAGE_KEY = 'gopinath_projects';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full Stack' },
];

const emptyForm = {
  title: '',
  description: '',
  tagsRaw: '',
  category: 'frontend',
  github: '',
  live: '',
  featured: false,
};

// ── Project Card ────────────────────────────────────────────────────────────
function ProjectCard({ project, onEdit, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false);

  return (
    <div className="card group flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300 relative">

      {/* Edit / Delete controls */}
      <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
        <button
          onClick={() => onEdit(project)}
          title="Edit project"
          className="p-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-accent hover:border-accent transition-all"
        >
          <Pencil size={13} />
        </button>
        {confirmDelete ? (
          <div className="flex gap-1">
            <button
              onClick={() => onDelete(project.id)}
              title="Confirm delete"
              className="p-1.5 rounded-lg bg-red-50 dark:bg-red-950 border border-red-300 dark:border-red-800 text-red-500 hover:bg-red-100 transition-all"
            >
              <Check size={13} />
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              title="Cancel"
              className="p-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 transition-all"
            >
              <X size={13} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmDelete(true)}
            title="Delete project"
            className="p-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-red-500 hover:border-red-400 transition-all"
          >
            <Trash2 size={13} />
          </button>
        )}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between pr-16">
        <div className="flex-1">
          {project.featured && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-mono border border-accent/20 mb-1">
              <Star size={10} fill="currentColor" /> Featured
            </span>
          )}
          <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white group-hover:text-accent transition-colors">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent text-gray-500 dark:text-gray-400 font-mono text-xs transition-all duration-200"
          >
            <Github size={13} /> Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-accent hover:text-accent text-gray-500 dark:text-gray-400 font-mono text-xs transition-all duration-200"
          >
            <ExternalLink size={13} /> Live Demo
          </a>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-mono text-xs hover:bg-accent/10 hover:text-accent transition-colors"
          >
            {tag}
          </span>
        ))}
        <span className="px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-400 font-mono text-xs border border-gray-200 dark:border-gray-800 capitalize">
          {project.category}
        </span>
      </div>
    </div>
  );
}

// ── Project Form Modal ───────────────────────────────────────────────────────
function ProjectFormModal({ initial, onSave, onClose }) {
  const [form, setForm] = useState(
    initial
      ? { ...initial, tagsRaw: initial.tags.join(', ') }
      : emptyForm
  );
  const [errors, setErrors] = useState({});

  const set = (field, val) => {
    setForm(prev => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required';
    if (!form.description.trim()) e.description = 'Description is required';
    if (!form.tagsRaw.trim()) e.tagsRaw = 'Add at least one tag';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length) { setErrors(e2); return; }
    const tags = form.tagsRaw.split(',').map(t => t.trim()).filter(Boolean);
    onSave({ ...form, tags });
  };

  const inputCls = (field) =>
    `w-full px-4 py-2.5 rounded-xl border font-mono text-sm bg-white dark:bg-gray-950 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none transition-colors ${
      errors[field]
        ? 'border-red-400 focus:border-red-400'
        : 'border-gray-200 dark:border-gray-800 focus:border-accent'
    }`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">

        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-800">
          <div>
            <h3 className="font-display font-bold text-lg text-gray-900 dark:text-white">
              {initial ? 'Edit Project' : 'Add New Project'}
            </h3>
            <p className="font-mono text-xs text-gray-400 mt-0.5">
              {initial ? 'Update the details below' : 'Fill in the details to add a project'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">

          {/* Title */}
          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Project Title *
            </label>
            <input
              value={form.title}
              onChange={e => set('title', e.target.value)}
              placeholder="e.g. E-Commerce Platform"
              className={inputCls('title')}
            />
            {errors.title && <p className="text-red-500 text-xs font-mono">{errors.title}</p>}
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Description *
            </label>
            <textarea
              value={form.description}
              onChange={e => set('description', e.target.value)}
              placeholder="What does this project do? Keep it concise."
              rows={3}
              className={`${inputCls('description')} resize-none`}
            />
            {errors.description && <p className="text-red-500 text-xs font-mono">{errors.description}</p>}
          </div>

          {/* Tags */}
          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
              <Tag size={11} /> Tech Stack / Tags * <span className="normal-case text-gray-400">(comma separated)</span>
            </label>
            <input
              value={form.tagsRaw}
              onChange={e => set('tagsRaw', e.target.value)}
              placeholder="React, Node.js, MongoDB, Tailwind"
              className={inputCls('tagsRaw')}
            />
            {errors.tagsRaw && <p className="text-red-500 text-xs font-mono">{errors.tagsRaw}</p>}
            {/* Tag preview */}
            {form.tagsRaw.trim() && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {form.tagsRaw.split(',').map(t => t.trim()).filter(Boolean).map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-accent/10 text-accent font-mono text-xs border border-accent/20">{t}</span>
                ))}
              </div>
            )}
          </div>

          {/* Category */}
          <div className="space-y-1.5">
            <label className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Category *
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['frontend', 'backend', 'fullstack'].map(cat => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => set('category', cat)}
                  className={`py-2 rounded-xl font-mono text-xs capitalize border transition-all ${
                    form.category === cat
                      ? 'bg-accent text-gray-900 border-accent font-medium'
                      : 'border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-accent hover:text-accent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* GitHub & Live links */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Github size={11} /> GitHub URL
              </label>
              <input
                value={form.github}
                onChange={e => set('github', e.target.value)}
                placeholder="https://github.com/..."
                className={inputCls('github')}
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-mono text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <ExternalLink size={11} /> Live URL
              </label>
              <input
                value={form.live}
                onChange={e => set('live', e.target.value)}
                placeholder="https://yourapp.vercel.app"
                className={inputCls('live')}
              />
            </div>
          </div>

          {/* Featured toggle */}
          <div className="flex items-center gap-3 py-1">
            <button
              type="button"
              onClick={() => set('featured', !form.featured)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                form.featured ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${
                  form.featured ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <div>
              <span className="font-mono text-sm text-gray-700 dark:text-gray-300">Mark as Featured</span>
              <p className="font-mono text-xs text-gray-400">Shows a ★ Featured badge on the card</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-display font-semibold text-sm hover:border-gray-400 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-accent text-gray-900 font-display font-bold text-sm hover:bg-accent-dark transition-colors flex items-center justify-center gap-2"
            >
              <Check size={15} />
              {initial ? 'Save Changes' : 'Add Project'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Main Projects Section ────────────────────────────────────────────────────
export default function Projects() {
  const [projects, setProjects] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultProjects;
    } catch {
      return defaultProjects;
    }
  });

  const [activeFilter, setActiveFilter] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editTarget, setEditTarget] = useState(null); // null = add mode, project = edit mode

  // Persist to localStorage whenever projects change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
  }, [projects]);

  const handleSave = (formData) => {
    if (editTarget) {
      // Edit existing
      setProjects(prev =>
        prev.map(p => p.id === editTarget.id ? { ...formData, id: editTarget.id } : p)
      );
    } else {
      // Add new
      const newId = Date.now();
      setProjects(prev => [...prev, { ...formData, id: newId }]);
    }
    setShowModal(false);
    setEditTarget(null);
  };

  const handleEdit = (project) => {
    setEditTarget(project);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  const handleOpenAdd = () => {
    setEditTarget(null);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditTarget(null);
  };

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <section id="projects" className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span className="section-tag">What I've built</span>
              <h2 className="section-heading">Projects</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
                A collection of my work — from full-stack applications to polished UIs.
              </p>
            </div>
            {/* Add Project button */}
            <button
              onClick={handleOpenAdd}
              className="btn-primary whitespace-nowrap self-start sm:self-auto"
            >
              <Plus size={16} />
              Add Project
            </button>
          </div>

          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-10 flex-wrap">
            {filters.map(f => {
              const count = f.id === 'all' ? projects.length : projects.filter(p => p.category === f.id).length;
              return (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-200 border ${
                    activeFilter === f.id
                      ? 'bg-accent text-gray-900 border-accent font-medium'
                      : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 hover:border-accent hover:text-accent'
                  }`}
                >
                  {f.label}
                  <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${
                    activeFilter === f.id ? 'bg-gray-900/20 text-gray-900' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-2xl">
              <p className="font-mono text-gray-400 text-sm mb-4">No projects in this category yet.</p>
              <button onClick={handleOpenAdd} className="btn-primary">
                <Plus size={15} /> Add your first project
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}

              {/* Add new card (always visible at end) */}
              <button
                onClick={handleOpenAdd}
                className="flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-800 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 min-h-[200px] group"
              >
                <div className="w-10 h-10 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 group-hover:border-accent group-hover:text-accent text-gray-400 flex items-center justify-center transition-all">
                  <Plus size={20} />
                </div>
                <span className="font-mono text-xs text-gray-400 group-hover:text-accent transition-colors">
                  Add New Project
                </span>
              </button>
            </div>
          )}

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/Gopinath0306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 font-mono text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              <Github size={16} />
              View all on GitHub
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <ProjectFormModal
          initial={editTarget}
          onSave={handleSave}
          onClose={handleClose}
        />
      )}
    </>
  );
}
