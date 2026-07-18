import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  ChevronRight,
  FolderGit2,
  FileText,
  BracesIcon,
  GraduationCap,
  Award,
  Terminal,
  Circle,
  CheckCircle2,
  Globe,
  Server,
} from "lucide-react";

/* ---------------------------------------------------------
   ASSETS
   These point to files in the /public folder. To update your
   photo, resume, or certificate, just replace the file with
   the SAME name inside /public — no code changes needed.
--------------------------------------------------------- */
const PROFILE_URI = "/My picc.jpg";
const RESUME_URI = "/SAM Resume.pdf";
const CERT_URI = "/certificate.jpg";

/* ---------------------------------------------------------
   DATA
--------------------------------------------------------- */
const NAME = "Shaik Abdul Mukhtadir";
const TITLE = "MERN Stack Developer";
const LOCATION = "Kurnool, Andhra Pradesh";
const EMAIL = "samshaik204@gmail.com";
const PHONES = ["+91 94903 48744", "+91 83283 38526"];
const LINKEDIN = "https://linkedin.com/in/abdul-mukhtadir-shaik-9722a0420";
const GITHUB = "https://github.com/Abdul-mukhtadir";

const SKILLS = [
  {
    group: "frontend",
    color: "amber",
    items: ["React.js", "Redux", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Axios"],
  },
  {
    group: "backend",
    color: "teal",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Bcrypt"],
  },
  {
    group: "database",
    color: "amber",
    items: ["MongoDB", "Mongoose", "MySQL"],
  },
  {
    group: "tools",
    color: "teal",
    items: ["Git", "GitHub", "Postman", "VS Code", "MongoDB Compass", "npm"],
  },
  {
    group: "deployment",
    color: "amber",
    items: ["Render", "Netlify", "Vercel"],
  },
];

const PROJECTS = [
  {
    id: "hotel",
    name: "Hotel Booking System",
    tagline: "Full-stack hotel booking platform with payments & admin control",
    description:
      "A full-stack hotel booking platform where users can search hotels, check real-time room availability, book rooms, pay securely online, and manage their reservations. Admins get a full dashboard to manage hotels, rooms, bookings, and users.",
    icon: "hotel",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay", "Tailwind CSS"],
    features: [
      "JWT authentication with role-based access control for guests & admins",
      "Razorpay payment gateway for secure online transactions",
      "Room availability validation, booking management & invoice generation",
      "Automated email notifications for booking confirmations",
      "Admin dashboard with full CRUD for hotels and rooms",
      "Fully responsive UI built with Tailwind CSS and RESTful APIs",
    ],
    githubFrontend: "https://github.com/Abdul-mukhtadir/hotel-booking-system/tree/main/client",
    githubBackend: "https://github.com/Abdul-mukhtadir/hotel-booking-system/tree/main/server",
    live: "https://hotelsyst.netlify.app/",
    backend: "https://hotel-booking-system-dcg4.onrender.com/",
  },
  {
    id: "recipe",
    name: "Recipe Application",
    tagline: "Recipe management app with secure auth and role-based permissions",
    description:
      "A recipe management application where users can create, browse, and manage recipes with secure authentication. Built with a React front end and an Express/MongoDB back end for persistent data storage.",
    icon: "recipe",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Axios"],
    features: [
      "Create, browse, and manage recipes in a full-stack app",
      "JWT authentication with secure login/registration & bcrypt hashing",
      "RESTful API endpoints built with Express.js and MongoDB",
      "Responsive, mobile-first UI using React.js and Tailwind CSS",
      "Role-based access control separating admin and standard users",
    ],
    githubFrontend: "https://github.com/Abdul-mukhtadir/recipe-app",
    githubBackend: "https://github.com/Abdul-mukhtadir/recipe-app",
    live: "https://recipeg.netlify.app/",
    backend: null,
  },
  {
    id: "expense",
    name: "Smart Expense Tracker",
    tagline: "Track and visualize everyday spending in a clean MERN dashboard",
    description:
      "A capstone-style expense tracking dashboard where users can add, categorize, and review day-to-day expenses, with a clean visual breakdown of spending patterns. Built on the MERN stack.",
    icon: "expense",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Add, categorize, and review day-to-day expenses",
      "Dashboard view for spending patterns at a glance",
      "Built on the MERN stack as part of a hands-on GUVI project series",
    ],
    githubFrontend:
      "https://github.com/Abdul-mukhtadir/GuviTasks/tree/21f3388a5305012c9ae371e7b7cf22877509a083/Task%208/smart-expense-tracker",
    githubBackend:
      "https://github.com/Abdul-mukhtadir/GuviTasks/tree/21f3388a5305012c9ae371e7b7cf22877509a083/Task%208/smart-expense-tracker",
    live: "https://smartexptrack.netlify.app/",
    backend: null,
  },
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    place: "2026",
    score: null,
  },
  {
    degree: "Bachelor of Technology (B.Tech) — Electrical & Electronics Engineering",
    place: "2014 – 2018",
    score: "69%",
  },
  {
    degree: "Intermediate (MPC) — Sri Chaitanya Junior College",
    place: "2012 – 2014",
    score: "88%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    place: "2012",
    score: "92%",
  },
];

const CERTIFICATIONS = [
  {
    name: "IIT-M Pravartak Certified Full Stack Development Course With AI Tools",
    issuer: "GUVI x HCL — An IITM Incubated Company",
    duration: "7 Months",
    date: "Issued June 1, 2026",
    image: CERT_URI,
  },
];

/* ---------------------------------------------------------
   NAV CONFIG — styled like an editor's file explorer
--------------------------------------------------------- */
const NAV = [
  { id: "home", label: "Home", icon: Terminal, desc: "Overview & intro" },
  { id: "about", label: "About", icon: FileText, desc: "Who I am" },
  { id: "skills", label: "Skills", icon: BracesIcon, desc: "Tech stack" },
  { id: "projects", label: "Projects", icon: FolderGit2, desc: "Live builds" },
  { id: "education", label: "Education", icon: GraduationCap, desc: "Academic background" },
  { id: "certifications", label: "Certifications", icon: Award, desc: "Certifications" },
  { id: "contact", label: "Contact", icon: Mail, desc: "Reach me" },
];

/* ---------------------------------------------------------
   SMALL HELPERS
--------------------------------------------------------- */
function Dot({ className = "" }) {
  return <span className={`inline-block w-1.5 h-1.5 rounded-full ${className}`} />;
}

function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-teal-400 font-mono mb-2">
        <Dot className="bg-teal-400" />
        {eyebrow}
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-100 tracking-tight">{title}</h2>
    </div>
  );
}

function TechBadge({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-slate-700 bg-slate-800/60 text-slate-300 hover:border-teal-400/50 hover:text-teal-300 transition-colors">
      {children}
    </span>
  );
}

function BrowserMock({ url, kind }) {
  const gradients = {
    hotel: "from-amber-500/25 via-amber-500/5 to-transparent",
    recipe: "from-teal-500/25 via-teal-500/5 to-transparent",
    expense: "from-violet-500/25 via-violet-500/5 to-transparent",
  };
  const icons = {
    hotel: "🏨",
    recipe: "🍲",
    expense: "💰",
  };
  return (
    <div className="group rounded-lg overflow-hidden border border-slate-700 bg-slate-900">
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-800/80 border-b border-slate-700">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        <div className="ml-3 flex-1 bg-slate-900/80 rounded px-2 py-0.5 text-[11px] font-mono text-slate-400 truncate">
          {url}
        </div>
      </div>
      <div className={`h-40 flex items-center justify-center bg-gradient-to-br ${gradients[kind]} group-hover:scale-[1.02] transition-transform duration-300`}>
        <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-300 inline-block">{icons[kind]}</span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   APP TITLE BAR — makes the page read as a desktop application
--------------------------------------------------------- */
function AppTitleBar({ active }) {
  const current = NAV.find((n) => n.id === active);
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 border-b border-slate-800 bg-slate-900 sticky top-0 z-40 select-none">
      <div className="flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
      </div>
      <div className="flex-1 flex items-center justify-center gap-2 text-xs font-mono text-slate-400 min-w-0">
        <Terminal size={12} className="text-slate-600 shrink-0" />
        <span className="truncate">portfolio.app — {current?.label}</span>
      </div>
      <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 shrink-0">
        <Dot className="bg-emerald-400 nav-dot-active" /> online
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   MOBILE QUICK-NAV STRIP — headings visible without opening a drawer
--------------------------------------------------------- */
function MobileQuickNav({ active, go }) {
  return (
    <div className="md:hidden flex gap-2 overflow-x-auto px-4 py-3 border-b border-slate-800 bg-slate-900/60 sticky top-[45px] z-30 no-scrollbar">
      {NAV.map((item) => {
        const Icon = item.icon;
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => go(item.id)}
            className={`
              flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono whitespace-nowrap border transition-colors shrink-0
              ${
                isActive
                  ? "border-amber-400/60 bg-amber-400/10 text-amber-300"
                  : "border-slate-700 text-slate-400"
              }
            `}
          >
            <Icon size={13} className={isActive ? "text-amber-400" : "text-slate-500"} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

/* ---------------------------------------------------------
   SECTION VIEWS
--------------------------------------------------------- */
function HomeView({ go }) {
  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-teal-400 font-mono mb-4">
        <Dot className="bg-emerald-400 nav-dot-active" />
        available for hire
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-slate-100 leading-[1.05] tracking-tight">
        Building full‑stack
        <br />
        products with the{" "}
        <span className="gradient-text">MERN</span> stack
        <span className="cursor-blink text-amber-400">▍</span>
      </h1>
      <p className="mt-6 text-slate-400 text-lg leading-relaxed max-w-xl">
        Hi, I'm {NAME} — a {TITLE} based in {LOCATION}. I design and ship
        responsive, secure, full-stack web applications, from authentication
        and payments to admin dashboards.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={() => go("projects")}
          style={{ boxShadow: "0 0 24px rgba(251,191,36,0.35)" }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-400 text-slate-900 font-semibold text-sm hover:bg-amber-300 hover:scale-[1.03] active:scale-[0.98] transition-transform"
        >
          View Projects <ChevronRight size={16} />
        </button>
        <a
          href={RESUME_URI}
          download="SAM Resume.pdf"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-slate-700 text-slate-200 font-semibold text-sm hover:border-teal-400 hover:text-teal-300 hover:scale-[1.03] active:scale-[0.98] transition-all"
        >
          <Download size={16} /> Download Resume
        </a>
      </div>

      <div className="mt-14 grid grid-cols-3 gap-4 max-w-md">
        <Stat n="3+" label="Full-stack projects" />
        <Stat n="7" label="Months of intensive training" />
        <Stat n="2026" label="MCA graduate" />
      </div>

      {/* Dashboard-style quick access to every section — mirrors the sidebar */}
      <div className="mt-14 border-t border-slate-800 pt-8">
        <p className="text-xs font-mono text-slate-500 mb-4">// jump to a section</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {NAV.filter((n) => n.id !== "home").map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="group flex flex-col items-start gap-2 p-4 rounded-lg border border-slate-800 bg-slate-900/40 hover:border-amber-400/50 hover:bg-slate-900/70 hover:-translate-y-0.5 hover:shadow-lg text-left transition-all duration-200"
              >
                <Icon size={18} className="text-teal-400 group-hover:text-amber-400 group-hover:scale-110 transition-all duration-200" />
                <div>
                  <p className="text-sm font-mono text-slate-200 flex items-center gap-1">
                    {item.label}
                    <ChevronRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-amber-400" />
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 pt-2">
        <p className="text-xs font-mono text-slate-500 mb-3">// quick links</p>
        <div className="flex flex-wrap gap-3">
          <IconLink href={GITHUB} icon={Github} label="GitHub" />
          <IconLink href={LINKEDIN} icon={Linkedin} label="LinkedIn" />
          <IconLink href={`mailto:${EMAIL}`} icon={Mail} label="Email" />
        </div>
      </div>
    </div>
  );
}

function Stat({ n, label }) {
  return (
    <div>
      <div className="text-2xl font-bold text-slate-100 font-mono">{n}</div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  );
}

function IconLink({ href, icon: Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-700 text-sm text-slate-300 hover:text-amber-300 hover:border-amber-400/60 transition-colors"
    >
      <Icon size={14} /> {label}
    </a>
  );
}

function AboutView() {
  return (
    <div className="max-w-2xl">
      <SectionHeading eyebrow="01 · about" title="About Me" />
      <div className="flex flex-col sm:flex-row gap-6 mb-8">
        <img
          src={PROFILE_URI}
          alt={NAME}
          className="w-28 h-28 rounded-lg object-cover border border-slate-700 shrink-0"
        />
        <div>
          <h3 className="text-xl font-semibold text-slate-100">{NAME}</h3>
          <p className="text-teal-400 font-mono text-sm mt-1">{TITLE}</p>
          <p className="flex items-center gap-1.5 text-slate-500 text-sm mt-2">
            <MapPin size={14} /> {LOCATION}
          </p>
        </div>
      </div>
      <p className="text-slate-300 leading-relaxed">
        I am {NAME}, an MCA graduate with a strong interest in software
        development and web technologies. I have hands-on experience building
        full-stack web applications using the MERN stack, including
        authentication, payment gateway integration, and REST APIs. I enjoy
        learning new technologies, solving real-world problems, and
        developing scalable applications.
      </p>
      <p className="text-slate-300 leading-relaxed mt-4">
        I am eager to begin my career in a{" "}
        <span className="text-amber-300">Software Developer</span>,{" "}
        <span className="text-amber-300">Full-Stack Developer</span>, or{" "}
        <span className="text-amber-300">Semi-IT</span> role where I can
        contribute while continuously enhancing my technical skills.
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
        {["Problem Solving", "Team Collaboration", "Quick Learner", "Attention to Detail", "Agile Mindset", "Continuous Growth"].map(
          (attr) => (
            <div
              key={attr}
              className="flex items-center gap-2 text-sm text-slate-300 border border-slate-800 rounded-md px-3 py-2 bg-slate-900/40"
            >
              <CheckCircle2 size={14} className="text-teal-400 shrink-0" />
              {attr}
            </div>
          )
        )}
      </div>
    </div>
  );
}

function SkillsView() {
  const colorMap = {
    amber: "text-amber-300 border-amber-400/30 bg-amber-400/5",
    teal: "text-teal-300 border-teal-400/30 bg-teal-400/5",
  };
  return (
    <div className="max-w-2xl">
      <SectionHeading eyebrow="02 · skills" title="Technical Skills" />
      <div className="rounded-lg border border-slate-800 bg-slate-900/40 font-mono text-sm overflow-hidden">
        <div className="px-4 py-2 border-b border-slate-800 text-slate-500 text-xs">Technical Skills</div>
        <div className="p-5 space-y-5">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <div className="text-slate-500 mb-2">
                "<span className="text-slate-300">{s.group}</span>": [
              </div>
              <div className="flex flex-wrap gap-2 pl-4 mb-1">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className={`px-2.5 py-1 rounded border text-xs ${colorMap[s.color]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="text-slate-500">],</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectsView() {
  const accentBorder = {
    hotel: "hover:border-amber-400/50 hover:shadow-[0_0_30px_-10px_rgba(251,191,36,0.35)]",
    recipe: "hover:border-teal-400/50 hover:shadow-[0_0_30px_-10px_rgba(45,212,191,0.35)]",
    expense: "hover:border-violet-400/50 hover:shadow-[0_0_30px_-10px_rgba(167,139,250,0.35)]",
  };
  return (
    <div className="max-w-3xl">
      <SectionHeading eyebrow="03 · projects" title="Featured Projects" />
      <div className="space-y-10">
        {PROJECTS.map((p) => (
          <div
            key={p.id}
            className={`border border-slate-800 rounded-xl p-5 bg-slate-900/30 transition-all duration-300 hover:-translate-y-1 ${accentBorder[p.icon]}`}
          >
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2">
                <BrowserMock url={p.live} kind={p.icon} />
              </div>
              <div className="md:col-span-3">
                <h3 className="text-xl font-semibold text-slate-100">{p.name}</h3>
                <p className="text-slate-400 text-sm mt-1">{p.tagline}</p>
                <p className="text-slate-300 text-sm mt-3 leading-relaxed">{p.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {p.tech.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>

                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f, i) => (
                    <li key={i} className="text-sm text-slate-300 flex gap-2">
                      <ChevronRight size={14} className="text-teal-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-5">
                  <a
                    href={p.githubFrontend}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-slate-700 text-slate-300 hover:border-slate-400 transition-colors"
                  >
                    <Github size={13} /> Frontend Code
                  </a>
                  {p.githubBackend && p.githubBackend !== p.githubFrontend && (
                    <a
                      href={p.githubBackend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-slate-700 text-slate-300 hover:border-slate-400 transition-colors"
                    >
                      <Github size={13} /> Backend Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-teal-400/40 text-teal-300 hover:bg-teal-400/10 transition-colors"
                    >
                      <Globe size={13} /> Live Demo
                    </a>
                  )}
                  {p.backend && (
                    <a
                      href={p.backend}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-md border border-amber-400/40 text-amber-300 hover:bg-amber-400/10 transition-colors"
                    >
                      <Server size={13} /> Live API
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EducationView() {
  return (
    <div className="max-w-2xl">
      <SectionHeading eyebrow="04 · education" title="Education" />
      <div className="relative pl-6 border-l border-slate-800 space-y-8">
        {EDUCATION.map((e, i) => (
          <div key={i} className="relative group">
            <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-slate-950 border-2 border-teal-400 group-hover:scale-125 group-hover:border-amber-400 transition-all duration-200" />
            <h3 className="text-slate-100 font-semibold">{e.degree}</h3>
            <p className="text-sm text-slate-500 mt-1 font-mono">
              {e.place}
              {e.score && <span className="text-amber-300"> · {e.score}</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CertificationsView() {
  return (
    <div className="max-w-2xl">
      <SectionHeading eyebrow="05 · certifications" title="Certifications" />
      <div className="space-y-6">
        {CERTIFICATIONS.map((c, i) => (
          <div key={i} className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/30">
            <img src={c.image} alt={c.name} className="w-full object-cover border-b border-slate-800" />
            <div className="p-5">
              <h3 className="text-slate-100 font-semibold">{c.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{c.issuer}</p>
              <div className="flex flex-wrap gap-3 mt-3 text-xs font-mono text-slate-500">
                <span>{c.duration}</span>
                <span>·</span>
                <span>{c.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-mono text-slate-500 mb-1.5">Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full bg-slate-900/60 border border-slate-700 rounded-md px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-400/60 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-mono text-slate-500 mb-1.5">Email</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full bg-slate-900/60 border border-slate-700 rounded-md px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-400/60 transition-colors"
        />
      </div>
      <div>
        <label className="block text-xs font-mono text-slate-500 mb-1.5">Message</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about the role or opportunity..."
          className="w-full bg-slate-900/60 border border-slate-700 rounded-md px-3 py-2 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-teal-400/60 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        style={{ boxShadow: "0 0 24px rgba(251,191,36,0.35)" }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-400 text-slate-900 font-semibold text-sm hover:bg-amber-300 hover:scale-[1.03] active:scale-[0.98] transition-transform"
      >
        <Mail size={16} /> Send Message
      </button>
      <p className="text-xs text-slate-600">
        This opens your email app with the message pre-filled, addressed to {EMAIL}.
      </p>
    </form>
  );
}

function ContactView() {
  return (
    <div className="max-w-2xl">
      <SectionHeading eyebrow="06 · contact" title="Get In Touch" />
      <p className="text-slate-400 mb-8">
        I'm actively looking for opportunities as a Full-Stack / MERN
        Developer. Feel free to reach out — I usually reply within a day.
      </p>

      <div className="rounded-lg border border-slate-800 bg-slate-900/40 overflow-hidden mb-6">
        <div className="px-4 py-2 border-b border-slate-800 text-slate-500 text-xs font-mono">Send a Message</div>
        <div className="p-5">
          <ContactForm />
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        <IconLink href={LINKEDIN} icon={Linkedin} label="LinkedIn" />
        <IconLink href={GITHUB} icon={Github} label="GitHub" />
        <IconLink href={`mailto:${EMAIL}`} icon={Mail} label="Email" />
      </div>

      <div className="rounded-lg border border-slate-800 bg-slate-900/40 font-mono text-sm overflow-hidden">
        <div className="px-4 py-2 border-b border-slate-800 text-slate-500 text-xs">Contact Details</div>
        <div className="p-5 space-y-3">
          <ContactRow icon={Mail} label="email" value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactRow icon={Phone} label="phone" value={PHONES[0]} href={`tel:${PHONES[0].replace(/\s/g, "")}`} />
          <ContactRow icon={Phone} label="phone_alt" value={PHONES[1]} href={`tel:${PHONES[1].replace(/\s/g, "")}`} />
          <ContactRow icon={Linkedin} label="linkedin" value="abdul-mukhtadir-shaik" href={LINKEDIN} />
          <ContactRow icon={Github} label="github" value="Abdul-mukhtadir" href={GITHUB} />
          <ContactRow icon={MapPin} label="location" value={LOCATION} />
        </div>
      </div>

      <a
        href={RESUME_URI}
        download="SAM Resume.pdf"
        style={{ boxShadow: "0 0 24px rgba(251,191,36,0.35)" }}
        className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-amber-400 text-slate-900 font-semibold text-sm hover:bg-amber-300 hover:scale-[1.03] active:scale-[0.98] transition-transform"
      >
        <Download size={16} /> Download Resume (PDF)
      </a>
    </div>
  );
}

function ContactRow({ icon: Icon, label, value, href }) {
  const content = (
    <div className="flex items-center gap-3 group">
      <Icon size={15} className="text-teal-400 shrink-0" />
      <span className="text-slate-500 w-24 shrink-0">{label}:</span>
      <span className="text-slate-200 group-hover:text-amber-300 transition-colors truncate">
        {value}
      </span>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {content}
    </a>
  ) : (
    content
  );
}

/* ---------------------------------------------------------
   APP SHELL
--------------------------------------------------------- */
export default function Portfolio() {
  const [active, setActive] = useState("home");

  const go = (id) => setActive(id);

  const views = {
    home: <HomeView go={go} />,
    about: <AboutView />,
    skills: <SkillsView />,
    projects: <ProjectsView />,
    education: <EducationView />,
    certifications: <CertificationsView />,
    contact: <ContactView />,
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex items-center justify-center p-0 md:p-6">
      <style>{`
        @keyframes blink { 0%, 50% { opacity: 1 } 51%, 100% { opacity: 0 } }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes gradientShift { 0% { background-position: 0% 50% } 50% { background-position: 100% 50% } 100% { background-position: 0% 50% } }
        @keyframes softPulse { 0%, 100% { opacity: .55 } 50% { opacity: 1 } }
        @keyframes ringPulse { 0% { transform: scale(0.9); opacity: .5 } 70% { transform: scale(1.35); opacity: 0 } 100% { opacity: 0 } }
        .cursor-blink { animation: blink 1.1s step-end infinite; }
        .fade-in-up { animation: fadeInUp .4s ease both; }
        .gradient-text {
          background: linear-gradient(90deg, #fbbf24, #2dd4bf, #fbbf24);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: gradientShift 5s linear infinite;
        }
        .nav-dot-active { animation: softPulse 1.8s ease-in-out infinite; }
        .avatar-ring::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 8px;
          border: 1.5px solid rgba(45, 212, 191, 0.7);
          animation: ringPulse 2.4s ease-out infinite;
        }
        .bg-dotgrid {
          background-image: radial-gradient(rgba(148,163,184,0.16) 1px, transparent 1px);
          background-size: 22px 22px;
        }
      `}</style>
      {/* App window frame */}
      <div className="w-full md:max-w-6xl h-screen md:h-[calc(100vh-3rem)] flex flex-col rounded-none md:rounded-xl border-0 md:border md:border-slate-800 overflow-hidden shadow-2xl bg-slate-950">
        <AppTitleBar active={active} />
        <MobileQuickNav active={active} go={go} />

        <div className="flex flex-1 min-h-0">
          {/* Sidebar — persistent, app-style, no drawer needed */}
          <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-800">
              <FolderGit2 size={16} className="text-amber-400" />
              <span className="font-mono text-sm text-slate-300">explorer</span>
            </div>

            <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-800">
              <div className="relative avatar-ring">
                <img
                  src={PROFILE_URI}
                  alt={NAME}
                  className="w-10 h-10 rounded-md object-cover border border-slate-700 relative z-10"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-slate-100 truncate">{NAME}</p>
                <p className="text-[11px] text-teal-400 font-mono truncate">{TITLE}</p>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto py-3">
              {NAV.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => go(item.id)}
                    className={`
                      relative w-full flex items-center gap-2.5 px-5 py-2.5 text-left text-sm font-mono
                      border-l-2 transition-all duration-200
                      ${
                        isActive
                          ? "border-amber-400 bg-slate-800/60 text-amber-300"
                          : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30 hover:pl-6"
                      }
                    `}
                  >
                    <Icon size={14} className={isActive ? "text-amber-400" : "text-slate-500"} />
                    {item.label}
                    {isActive && (
                      <span className="nav-dot-active ml-auto w-1.5 h-1.5 rounded-full bg-amber-400" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="px-5 py-4 border-t border-slate-800 flex gap-3">
              <a href={GITHUB} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-amber-300">
                <Github size={16} />
              </a>
              <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-amber-300">
                <Linkedin size={16} />
              </a>
              <a href={`mailto:${EMAIL}`} className="text-slate-500 hover:text-amber-300">
                <Mail size={16} />
              </a>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 overflow-y-auto bg-dotgrid">
            {/* breadcrumb / tab bar */}
            <div className="hidden md:flex items-center gap-2 px-8 py-3 border-b border-slate-800 bg-slate-900/50 backdrop-blur text-xs font-mono text-slate-500">
              <span>portfolio</span>
              <ChevronRight size={12} />
              <span className="text-slate-300">{NAV.find((n) => n.id === active)?.label}</span>
              <span className="cursor-blink text-amber-400">▍</span>
            </div>

            <div key={active} className="px-6 md:px-14 py-10 md:py-16 fade-in-up">
              {views[active]}
            </div>

            <footer className="px-6 md:px-14 py-8 border-t border-slate-800 text-xs text-slate-600 font-mono">
              built with React · {NAME} © 2026
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
