import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";

const highlights = [
  {
    value: "2.28M",
    label: "ticks / second",
    detail: "Sustained by Riskwire across a 48,000-position options book.",
  },
  {
    value: "3.6µs",
    label: "p50 tick-to-risk",
    detail: "Incremental Greeks remained bitwise-identical to full reprice.",
  },
  {
    value: "$2.7K",
    label: "saved per month",
    detail: "OpenAI spend reduced through context pruning and token budgeting.",
  },
  {
    value: "25 → <6",
    label: "minutes to triage",
    detail: "A concurrent observability service accelerated production alert triage.",
  },
];

const experience = [
  {
    company: "COUNTRY Financial",
    role: "Software Development Intern · Agentic AI",
    period: "May 2026 — Present",
    location: "Champaign, Illinois",
    bullets: [
      "Migrated 500+ production workflows to PySpark behind 430 automated regression tests while leading 7 engineers through an LLM validation service.",
      "Reduced p95 latency by 420ms and OpenAI spend by $2.7K/month through context pruning, schema-aware prompts, and token budgeting.",
      "Built a concurrent FastAPI observability service that cut alert triage from 25 minutes to under 6.",
    ],
    stack: ["Python", "PySpark", "FastAPI", "OpenAI", "Redis"],
  },
  {
    company: "UIUC · Molecular Biology & Integrative Physiology",
    role: "Graduate Research Assistant · ML/DL",
    period: "Feb 2026 — May 2026",
    location: "Urbana, Illinois",
    bullets: [
      "Benchmarked 100+ model configurations across 2,720 samples, reaching 4.8× better-than-chance accuracy on a noisy biological signal.",
      "Generated 2,448 boundary predictions across 816 image planes with ResNet50 U-Net segmentation models.",
    ],
    stack: ["Python", "PyTorch", "scikit-learn", "OpenCV"],
  },
  {
    company: "JPMorgan Chase",
    role: "Software Developer · Intern to FTE",
    period: "Jan 2024 — Jul 2025",
    location: "Bangalore, India",
    bullets: [
      "Built a full-stack workflow platform that reduced manual effort by 25% and delivery timelines by 30%.",
      "Improved page-load speed by 45% for a portal serving 300+ employees and trimmed back-testing runtime by 30% at 98.4% migration accuracy.",
      "Won JPMorgan’s Q1 India AI Hackathon with an LLM tool that generated production-ready UI code from Figma designs.",
    ],
    stack: ["Java", "Spring Boot", "React", "Node.js", "AWS", "Python"],
  },
  {
    company: "Pathik Construction",
    role: "Data Scientist",
    period: "Jul 2023 — Dec 2023",
    location: "Remote",
    bullets: [
      "Built data pipelines over 70K+ operational records across 15+ projects and demand forecasting models that improved MAE by 20%.",
    ],
    stack: ["Python", "SQL", "XGBoost", "scikit-learn"],
  },
];

const projects = [
  {
    name: "Riskwire",
    type: "Low-latency systems",
    description:
      "A lock-free options portfolio risk engine in C++20, sharded across cores for incremental Greeks processing.",
    metrics: ["2.28M ticks/sec", "3.6µs p50", "13.4M ticks · zero drops"],
    stack: ["C++20", "Concurrency", "ThreadSanitizer", "Linux"],
    href: "https://github.com/kritsss/Riskwire",
    featured: true,
  },
  {
    name: "NourishNet",
    type: "Full-stack · Applied AI",
    description:
      "A food-bank platform with role-based workflows, serverless inventory APIs, dietary filters, expiration tracking, and a natural-language inventory assistant.",
    metrics: ["4 user roles", "Serverless APIs", "AI inventory assistant"],
    stack: ["React", "TypeScript", "Hono", "Cloudflare D1"],
    href: "https://github.com/kritsss/NourishNet",
  },
  {
    name: "Farmer’s Friend",
    type: "RAG · Hackathon winner",
    description:
      "AI-powered livestock triage with ranked, citation-backed veterinary retrieval, persistent animal context, and high-risk escalation.",
    metrics: ["<5s responses", "Citation-backed", "Smart Livestock winner"],
    stack: ["Python", "Streamlit", "LangChain", "ChromaDB"],
    href: "https://github.com/kritsss/FarmersFriend/tree/master",
  },
  {
    name: "Brain Tumor Segmentation",
    type: "Deep learning · Computer vision",
    description:
      "A U-Net enhanced with attention and squeeze-excitation blocks for tumor localization on the BRATS MRI dataset.",
    metrics: ["86% Dice accuracy", "200 training epochs"],
    stack: ["TensorFlow", "U-Net", "Attention", "SE blocks"],
    href: "https://github.com/kritsss/Image-Segmentation-for-Brain-Tumour",
  },
  {
    name: "Fake News Detection",
    type: "NLP · Published research",
    description:
      "An ensemble of LSTM, BiLSTM, and BERT models for binary classification of news articles, published at SCEECS 2024.",
    metrics: ["98.65% accuracy", "15% fewer false positives"],
    stack: ["BERT", "LSTM", "BiLSTM", "NLP"],
    href: "https://github.com/kritsss/Fake-News-Detection",
    paper: "https://ieeexplore.ieee.org/document/10482129",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["C++", "Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
  {
    title: "Systems & Backend",
    items: ["Concurrency", "Distributed systems", "Spring Boot", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Cloud & Data",
    items: ["AWS", "Cloudflare Workers", "Docker", "Jenkins", "Redis", "PySpark"],
  },
  {
    title: "AI & ML",
    items: ["PyTorch", "scikit-learn", "RAG", "ChromaDB", "OpenAI API", "OpenCV"],
  },
];

function SystemsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationId = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = Array.from({ length: 42 }, (_, index) => ({
      angle: (index / 42) * Math.PI * 2,
      band: index % 4,
      drift: 0.2 + (index % 6) * 0.027,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * ratio);
      canvas.height = Math.round(rect.height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const time = reducedMotion ? 0.9 : frame * 0.005;
      context.clearRect(0, 0, width, height);

      const points = nodes.map((node) => {
        const radius = Math.min(width, height) * (0.23 + node.band * 0.045);
        const angle = node.angle + time * node.drift;
        const x3 = Math.cos(angle) * radius;
        const z3 = Math.sin(angle) * radius;
        const y3 = Math.sin(angle * 1.6 + node.band * 0.7) * radius * 0.7;
        const perspective = 600 / (600 + z3);
        return {
          x: width / 2 + x3 * perspective,
          y: height / 2 + y3 * perspective,
          z: z3,
          size: Math.max(1, 3.5 * perspective),
        };
      });

      points.forEach((point, index) => {
        points.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(point.x - other.x, point.y - other.y);
          if (distance < 82) {
            const opacity = 0.16 * (1 - distance / 82);
            context.strokeStyle = `rgba(96, 165, 250, ${opacity})`;
            context.lineWidth = 0.7;
            context.beginPath();
            context.moveTo(point.x, point.y);
            context.lineTo(other.x, other.y);
            context.stroke();
          }
        });
      });

      points
        .sort((a, b) => a.z - b.z)
        .forEach((point, index) => {
          context.fillStyle = index % 7 === 0 ? "#a78bfa" : "#60a5fa";
          context.globalAlpha = Math.max(0.38, Math.min(1, 0.72 + point.z / 700));
          context.beginPath();
          context.arc(point.x, point.y, point.size, 0, Math.PI * 2);
          context.fill();
        });
      context.globalAlpha = 1;

      if (!reducedMotion) {
        frame += 1;
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="systems-canvas" aria-hidden="true" />;
}

function SystemScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    scene.style.setProperty("--rotate-x", `${-y * 7}deg`);
    scene.style.setProperty("--rotate-y", `${x * 9}deg`);
  };

  const resetPointer = () => {
    sceneRef.current?.style.setProperty("--rotate-x", "0deg");
    sceneRef.current?.style.setProperty("--rotate-y", "0deg");
  };

  return (
    <div
      className="system-scene"
      ref={sceneRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      aria-label="Interactive 3D systems visualization"
    >
      <div className="scene-glow" aria-hidden="true" />
      <SystemsCanvas />
      <div className="core-object" aria-hidden="true">
        <div className="core-face core-front">KS</div>
        <div className="core-face core-back">4.0</div>
        <div className="core-face core-right">AI</div>
        <div className="core-face core-left">C++</div>
        <div className="core-face core-top">MS</div>
        <div className="core-face core-bottom">UIUC</div>
      </div>
      <div className="scene-terminal" aria-hidden="true">
        <span>software.engineer</span>
        <code>latency · scale · intelligence</code>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Kritika Sukhramani, home">
          KS
        </a>
        <div className="nav-links">
          <a href="#highlights">Highlights</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="mailto:kritika.sukhramani2002@gmail.com">
          Email <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            Software Engineer · Champaign, Illinois
          </div>
          <h1 id="hero-title">Kritika Sukhramani</h1>
          <p className="hero-role">Low-latency systems · Applied AI · Full-stack engineering</p>
          <p className="hero-intro">
            M.S. Statistics student at UIUC with a 4.0 GPA and production engineering
            experience across COUNTRY Financial and JPMorgan Chase.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:kritika.sukhramani2002@gmail.com">
              Email me
            </a>
            <a className="button button-secondary" href="https://github.com/kritsss" target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-secondary" href="https://www.linkedin.com/in/kritsss/" target="_blank" rel="noreferrer">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-meta">
            <span>UIUC · M.S. Statistics · May 2027</span>
            <span>C++ · Python · TypeScript · Java</span>
          </div>
        </div>
        <SystemScene />
      </section>

      <section className="section shell" id="highlights" aria-labelledby="highlights-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">01</span>
            <h2 id="highlights-title">Highlights</h2>
          </div>
          <p>Selected outcomes from production systems, applied AI, and systems engineering.</p>
        </div>
        <div className="highlight-grid">
          {highlights.map((highlight) => (
            <article className="highlight-card" key={highlight.value}>
              <strong>{highlight.value}</strong>
              <span>{highlight.label}</span>
              <p>{highlight.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="experience" aria-labelledby="experience-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">02</span>
            <h2 id="experience-title">Experience</h2>
          </div>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.period}`}>
              <div className="experience-meta">
                <span>{item.period}</span>
                <span>{item.location}</span>
              </div>
              <div className="experience-main">
                <h3>{item.company}</h3>
                <h4>{item.role}</h4>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className="tag-list">
                  {item.stack.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">03</span>
            <h2 id="projects-title">Projects</h2>
          </div>
          <a className="section-link" href="https://github.com/kritsss" target="_blank" rel="noreferrer">
            All repositories <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card ${project.featured ? "project-featured" : ""}`} key={project.name}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-header">
                <span>{project.type}</span>
                <h3>{project.name}</h3>
              </div>
              <p>{project.description}</p>
              <div className="project-metrics">
                {project.metrics.map((metric) => (
                  <span key={metric}>{metric}</span>
                ))}
              </div>
              <div className="tag-list">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.href} target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
                {project.paper && (
                  <a href={project.paper} target="_blank" rel="noreferrer">
                    IEEE paper <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="skills" aria-labelledby="skills-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">04</span>
            <h2 id="skills-title">Skills</h2>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-list">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell education-section" aria-labelledby="education-title">
        <div className="section-heading">
          <div>
            <span className="section-kicker">05</span>
            <h2 id="education-title">Education</h2>
          </div>
        </div>
        <div className="education-grid">
          <article>
            <span>Aug 2025 — May 2027</span>
            <h3>University of Illinois Urbana-Champaign</h3>
            <p>M.S. in Statistics · GPA 4.0/4.0</p>
          </article>
          <article>
            <span>Dec 2020 — May 2024</span>
            <h3>Maulana Azad National Institute of Technology</h3>
            <p>B.Tech in Computer Science & Engineering · GPA 8.58/10.0</p>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="shell contact-inner">
          <span className="section-kicker">06</span>
          <h2 id="contact-title">Contact</h2>
          <p>For software engineering, systems, and applied AI opportunities.</p>
          <a className="contact-email" href="mailto:kritika.sukhramani2002@gmail.com">
            kritika.sukhramani2002@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-links">
            <a href="tel:+12175309203">+1 217 530 9203</a>
            <a href="https://www.linkedin.com/in/kritsss/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/kritsss" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="footer-line">
            <span>Kritika Sukhramani</span>
            <span>Champaign, Illinois</span>
          </div>
        </div>
      </section>
    </main>
  );
}
