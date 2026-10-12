import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Menu, Moon, Sun, X, ShieldCheck, Server, Workflow, Cpu, MapPin, Mail } from 'lucide-react';
import { experiences, education } from './data/experience';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import TypewriterRole from './components/TypewriterRole';
import { gtagEvent } from './utils/analytics';

const navigation = [['about', 'À propos'], ['experience', 'Parcours'], ['skills', 'Expertise'], ['projects', 'Projets'], ['contact', 'Contact']];
const expertise = [
  { icon: ShieldCheck, title: 'Sécuriser.', text: 'Intégrer la sécurité à chaque étape, des secrets aux conteneurs et aux pipelines.', tools: ['DevSecOps', 'Durcissement', 'Gestion des secrets'] },
  { icon: Workflow, title: 'Automatiser.', text: 'Construire des workflows reproductibles pour livrer avec rigueur et confiance.', tools: ['Ansible', 'Terraform', 'GitLab CI', 'Jenkins', 'Github Action'] },
  { icon: Server, title: 'Industrialiser.', text: 'Orchestrer les services et observer les infrastructures Cloud et on-premise.', tools: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Stack TIG'] },
  { icon: Cpu, title: 'Faire avancer l’IA.', text: 'Accompagner les modèles de l’ingestion des données au monitoring en production.', tools: ['Python', 'LLM', 'RAG', 'vLLM', 'MLOps', 'GPU GB10'] },
];
const projects = [
  { title: 'TELOS', category: 'SAAS INTELLIGENT · EN CONCEPTION', text: 'Chez CAH, entreprise située à Toamasina, conception d’une plateforme qui structure l’organisation des entreprises et transforme leurs données organisationnelles en informations utiles au pilotage.', tools: ['Architecture', 'Analyse métier', 'IA', 'NLQ'], code: null, demo: null, image: null },
  { title: 'E-Tady', category: 'DÉVELOPPEMENT & DEVOPS', text: 'Faciliter la recherche de logements, avec une carte interactive, une messagerie et une infrastructure pensée pour le déploiement.', image: '/img/capt_e-tady.png', tools: ['React', 'Express', 'Docker', 'Kubernetes'], code: 'https://gitlab.com/MONJA89/my-project', demo: null },
  { title: 'Gestion Patient', category: 'APPLICATION WEB', text: 'Une application de gestion des patients avec authentification, gestion des rôles et tableau de bord.', image: '/img/capt_medcare.png', tools: ['React', 'TypeScript', 'MySQL', 'Express'], code: null, demo: 'https://gestion-patient.vercel.app' },
  { title: 'Portfolio', category: 'IDENTITÉ & INTERFACE', text: 'Un espace personnel pour partager mon parcours, mes projets et mes compétences.', image: '/img/capt_portfolio.png', tools: ['React', 'TypeScript', 'Tailwind CSS'], code: 'https://github.com/MONJA-Faso/fahasoavana-portfolio', demo: null },
];
const certifications = ['Data sciences avec KNIME · E-DEA Academy · Juillet 2025', 'Développement avec Python · ODC Fianarantsoa · Avril 2025', 'Initiation au DevOps · ODC Fianarantsoa · Juillet 2024', 'Gouvernance d’Association · Fanainga+ · Juin 2024', 'Administration Système & Réseaux · SPRAY INFO · Avril–Août 2024', 'DELF B2 · Alliance Française Fianarantsoa · 2024'];

function Flag() { return <span className="malagasy-flag" role="img" aria-label="Drapeau de Madagascar"><i /><i /><i /></span>; }
function App() {
  const [darkMode, setDarkMode] = useState(() => { try { const saved = localStorage.getItem('portfolio-theme'); return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; } catch { return false; } });
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => { document.documentElement.classList.toggle('dark', darkMode); try { localStorage.setItem('portfolio-theme', darkMode ? 'dark' : 'light'); } catch { /* Theme still works without storage. */ } }, [darkMode]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => { for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id); }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => { const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  return <div className="portfolio">
    <ParticlesBackground />
    <a className="skip-link" href="#main">Aller au contenu</a>
    <header className="site-header"><div className="nav-shell">
      <a href="#home" className="wordmark" onClick={() => setMenuOpen(false)}><Flag /><span>Fahasoavana<span className="wordmark-light"> / MONJA</span></span></a>
      <nav aria-label="Navigation principale" id="primary-navigation" className={menuOpen ? 'navigation open' : 'navigation'}>{navigation.map(([id, label]) => <a key={id} href={'#' + id} aria-current={active === id ? 'location' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <div className="nav-actions"><button className="icon-button" onClick={() => setDarkMode(value => !value)} aria-label={darkMode ? 'Activer le thème clair' : 'Activer le thème sombre'}>{darkMode ? <Sun size={18} /> : <Moon size={18} />}</button><button className="icon-button menu-toggle" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(value => !value)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
    </div></header>
    <main id="main">
      <section id="home" className="hero"><div className="hero-grid container">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot" /> DEVSECOPS · MLOPS · DÉVELOPPEMENT</div>
          <h1>Construire.<br /><span>Apprendre. Améliorer.</span></h1>
          <p className="hero-name">Fahasoavana MONJA</p><TypewriterRole />
          <p className="hero-description">Je contribue au développement de logiciels, à l’automatisation des infrastructures et au déploiement de solutions IA, avec une attention particulière à la sécurité et à la fiabilité.</p>
          <div className="button-row"><a className="button primary" href="#experience">Découvrir mon parcours <ArrowUpRight size={18} /></a><a className="button secondary" href="/cv_fahasoavana.pdf" download onClick={() => gtagEvent('download_cv', 'Interaction', 'Téléchargement CV')}>Mon CV <Download size={17} /></a></div>
          <div className="hero-location"><MapPin size={14} /> Fianarantsoa, Madagascar <span className="tiny-divider" /> Collaborations à distance</div>
        </div>
        <div className="portrait-scene"><div className="portrait-grid" aria-hidden="true" /><span className="scene-coordinate top">FAHASOAVANA / MONJA</span><span className="scene-coordinate bottom">LOGICIEL · INFRASTRUCTURES · IA</span>
          <div className="portrait-frame"><img src="/img/profil-2.webp" alt="Portrait de Fahasoavana MONJA" width="480" height="580" fetchPriority="high" /><div className="portrait-caption"><span>DevSecOps & MLOps<br /><strong>Apprendre au fil des projets.</strong></span></div></div>
          <div className="mission-badge"><ShieldCheck size={21} /><span>RIGUEUR<br /><strong>DANS CHAQUE PROJET</strong></span></div>
        </div>
      </div><div className="hero-bottom container"><span>RIGUEUR. ÉCOUTE. APPRENTISSAGE.</span><a href="#about">Explorer <ArrowDown size={15} /></a></div></section>
      <section id="about" className="vision-section section"><div className="container"><div className="eyebrow">01 / À PROPOS</div><div className="vision-grid"><h2>Comprendre les besoins.<br /><span>Avancer ensemble.</span></h2><div><p className="large-copy">J’aime comprendre les problèmes concrets et contribuer à des solutions utiles, en échangeant avec les équipes et en apprenant de leur expérience.</p><p>Mon parcours m’a amené du développement web aux infrastructures et à l’IA. Je cherche à progresser à chaque mission, à documenter mon travail et à construire des systèmes plus fiables avec les équipes.</p><a className="text-link" href="#skills">Découvrir mes compétences <ArrowUpRight size={17} /></a></div></div><div className="values-strip"><span><b>01</b> Rigueur dans l’exécution</span><span><b>02</b> Sécurité dès la conception</span><span><b>03</b> Apprentissage continu</span></div></div></section>
      <section id="experience" className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">02 / PARCOURS</div><h2>L’expérience.<br /><span>Sur le terrain.</span></h2></div><p>Du web aux infrastructures IA, en passant par l'Administration système et Réseau, chaque mission enrichit ma pratique et mon regard.</p></div>
        <div className="timeline">{experiences.map((exp, index) => <article className="experience-card" key={exp.company + exp.period}><div className="experience-side"><span className="experience-number">{String(index + 1).padStart(2, '0')}</span><span className="period">{exp.period}</span><span className="company">{exp.company}</span><span className="location">{exp.location}</span></div><div className="experience-content"><h3>{exp.title}</h3><ul>{exp.description.map(item => <li key={item}>{item}</li>)}</ul><div className="tags">{exp.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></div></article>)}</div>
        <div className="education-grid"><div><div className="eyebrow">FORMATION</div><h3>Continuer à apprendre.</h3>{education.map(edu => <article className="education-item" key={edu.degree}><span className="period">{edu.period}</span><h4>{edu.degree}</h4><p>{edu.school}</p><p>{edu.description}</p></article>)}</div><div className="training-panel"><div className="eyebrow">FORMATIONS & CERTIFICATIONS</div><h3>Élargir mes horizons.</h3><ul>{certifications.map(item => <li key={item}>{item}</li>)}</ul></div></div>
      </div></section>
      <section id="skills" className="section expertise-section"><div className="container"><div className="section-heading"><div><div className="eyebrow">03 / EXPERTISE</div><h2>La précision technique.<br /><span>Une vision d’ensemble.</span></h2></div><p>Quatre axes complémentaires pour construire des systèmes robustes et observables.</p></div><div className="expertise-grid">{expertise.map(({ icon: Icon, title, text, tools }, index) => <article className="expertise-card" key={title}><div className="expertise-top"><Icon size={26} /><span>0{index + 1}</span></div><h3>{title}</h3><p>{text}</p><div className="tags">{tools.map(tool => <span key={tool}>{tool}</span>)}</div></article>)}</div><div className="supporting-skills"><span>Également dans ma boîte à outils</span><p>React · Express · TypeScript · PHP · MySQL · PostgreSQL · MongoDB · Linux · HAProxy · Proxmox · GNS3</p></div></div></section>
      <section id="projects" className="section"><div className="container"><div className="section-heading"><div><div className="eyebrow">04 / RÉALISATIONS</div><h2>Des idées.<br /><span>Des résultats concrets.</span></h2></div><a className="text-link" href="https://github.com/MONJA-Faso?tab=repositories">Tous les dépôts <ArrowUpRight size={18} /></a></div><div className="projects-grid">{projects.map(project => <article className="project-card" key={project.title}>{project.image ? <div className="project-image"><img src={project.image} alt={'Aperçu du projet ' + project.title} loading="lazy" width="640" height="400" /></div> : <div className="telos-visual" aria-label="TELOS : organisation, processus et intelligence"><span className="eyebrow">CAH / RECHERCHE & CONCEPTION</span><strong>TELOS<span>.</span></strong><div className="telos-nodes"><span>Organisation</span><span>Processus</span><span>Intelligence</span></div></div>}<div className="project-content"><div className="eyebrow">{project.category}</div><h3>{project.title}</h3><p>{project.text}</p><div className="tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div><div className="project-links">{project.code && <a href={project.code}>Voir le code <ArrowUpRight size={16} /></a>}{project.demo && <a href={project.demo}>Voir le projet <ArrowUpRight size={16} /></a>}{project.title === 'TELOS' && <a href="#experience">Découvrir ma contribution <ArrowUpRight size={16} /></a>}</div></div></article>)}</div></div></section>
      <Contact />
    </main>
    <footer className="site-footer container"><div><a className="wordmark" href="#home"><Flag /> Fahasoavana MONJA</a><p>Développer, automatiser et apprendre au fil des projets.</p></div><div className="footer-socials"><a href="https://github.com/MONJA-Faso" aria-label="GitHub"><Github size={20} /></a><a href="https://www.linkedin.com/in/rabefinoana-fahasoavana-monja-9785912a8/" aria-label="LinkedIn"><Linkedin size={20} /></a><a href="mailto:fahasoavanamonja891@gmail.com" aria-label="Envoyer un email"><Mail size={20} /></a></div><small>© {new Date().getFullYear()} Fahasoavana MONJA</small></footer>
  </div>;
}
export default App;
