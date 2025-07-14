import React from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Gestion Patient',
      description: 'Plateforme e-commerce complète avec gestion des produits, panier, paiements et administration.',
      image: '/img/capt_medcare.png',
      technologies: ['React', 'Express.js', 'MySQL', 'TypeScript', 'Tailwind'],
      features: ['Authentification', 'Gestion des rôles', 'Dashboard', 'API REST'],
      demoLink: 'https://gestion-patient.vercel.app',
      githubLink: '#',
      duration: '2 mois',
      team: '3 développeurs'
    },
    {
      title: 'E-Tady',
      description: "Application permettant de faciliter la recherche de maisons à louer, développée selon la philosophie DevOps.",
      image: '/img/capt_e-tady.png',
      technologies: [
        'React', 'Socket.io', 'Stripe', 'Leaflet', 'MySQL', 'Express',
        'Material-UI', 'CI/CD', 'Docker', 'Kubernetes',
        'Prometheus', 'Grafana'
      ],
      features: ['Carte interactive', 'Notifications', 'messagerie', 'payement'],
      demoLink: '#',
      githubLink: 'https://gitlab.com/MONJA89/my-project',
      duration: '3 mois',
      team: '1 développeur / DevOps'
    },
    {
      title: 'Portfolio Website',
      description: 'Site portfolio moderne et responsive avec animations et mode sombre.',
      image: '/img/capt_portfolio.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Responsive design', 'Mode sombre', 'Animations', 'SEO optimisé'],
      demoLink: '#',
      githubLink: 'https://github.com/MONJA-Faso/fahasoavana-portfolio',
      duration: '1 mois',
      team: '1 développeur'
    },

  ];

  return (
    // <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
    <section id="projects" className={`py-20`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Projets Réalisés
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Découvrez quelques-uns de mes projets les plus marquants et les technologies utilisées
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group rounded-lg overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-1 px-3 py-1 bg-fuchsia-500 text-white rounded-full text-sm font-medium hover:bg-fuchsia-600 transition-colors"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-900 text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs">
                  <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Calendar size={12} />
                    {project.duration}
                  </div>
                  <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    <Users size={12} />
                    {project.team}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Fonctionnalités clés:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded text-xs ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-fuchsia-100 dark:bg-fuchsia-900/20 text-fuchsia-700 dark:text-fuchsia-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Intéressé par mon travail ? Découvrez plus de projets sur mon GitHub, y compris plusieurs réalisations en configuration et sécurisation de réseaux.
          </p>
          <a
            href="https://github.com/MONJA-Faso?tab=repositories"
            className="inline-flex items-center gap-2 bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Github size={20} />
            Voir tous mes projets
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;