# Gopinath T — Personal Portfolio

A modern, responsive personal portfolio website built with **React (Vite)** + **Tailwind CSS**.

---

## 🗂️ Folder Structure

```
portfolio/
├── public/
│   └── favicon.svg          # Site favicon
│   └── resume.pdf           # ← PUT YOUR RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   ├── projects.js       # ← Add/edit projects here
│   │   ├── skills.js         # ← Add/edit skills here
│   │   └── education.js      # ← Add/edit education & certs here
│   ├── hooks/
│   │   ├── useTheme.js       # Dark/light mode logic
│   │   └── useScrollSpy.js   # Active nav highlight
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js v18+
- npm v9+

### 1. Install dependencies

```bash
npm install
```

### 2. Add your resume

Place your resume PDF at:
```
public/resume.pdf
```

### 3. Start development server

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## ✏️ Customization Guide

### Adding a New Project

Open `src/data/projects.js` and add an object to the array:

```js
{
  id: 7,                          // Unique ID
  title: "My New Project",
  description: "What the project does...",
  tags: ["React", "Firebase"],    // Tech stack tags
  category: "frontend",           // "frontend" | "backend" | "fullstack"
  github: "https://github.com/...",
  live: "https://yourproject.vercel.app", // null if no live demo
  featured: false,
}
```

### Adding a Skill

Open `src/data/skills.js` and add to the relevant category:

```js
{ name: "TypeScript", level: 70 }  // level is a % out of 100
```

### Adding a Certification

Open `src/data/education.js` and add to the `certifications` array:

```js
{
  id: 7,
  title: "AWS Cloud Practitioner",
  issuer: "Amazon Web Services",
  year: "2025",
  icon: "☁️",
  link: "https://your-cert-link.com",
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Click **Deploy** ✅

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com) → Add New Site → Deploy manually
3. Drag & drop the `dist/` folder

Or connect your GitHub repo with auto-deploy on push.

---

## 🔧 Contact Form Integration

The contact form currently simulates submission. To make it real, integrate one of:

### Option A: Formspree (easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form, get your endpoint URL
3. In `Contact.jsx`, replace the `handleSubmit` with:
```js
const res = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

### Option B: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install: `npm install @emailjs/browser`
3. Follow their React integration guide

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS v3 |
| Icons | Lucide React |
| Fonts | Syne, DM Sans, JetBrains Mono |
| Deployment | Vercel / Netlify |

---

## 📄 License

MIT — free to use and customize for personal use.
