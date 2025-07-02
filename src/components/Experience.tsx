import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Développeur Full-Stack & DevOps (Stage)',
      company: 'Youth Computing',
      location: 'Fianarantsoa',
      period: 'Septembre 2024 – Décembre 2024',
      description: [
        "Développement de l'application web 'e-tady' (React.js + Express.js)",
        "Mise en place de CI/CD avec GitLab CI, Docker, Kubernetes",
        "Répartition de charge avec HAProxy, supervision via Prometheus et Grafana"
      ],
      technologies: ['React.js', 'Express.js', 'Docker', 'Kubernetes', 'GitLab CI', 'HAProxy', 'Prometheus', 'Grafana']
    },
    {
      title: 'Développeur Frontend',
      company: 'Youth Computing',
      location: 'Fianarantsoa',
      period: 'Mars 2025 – Mai 2025',
      description: [
        "Développement de l'interface utilisateur de l'application ISERANET",
        'Utilisation de React.JS et Tailwind CSS pour des interfaces responsives'
      ],
      technologies: ['React.js', 'Tailwind CSS']
    },
    {
      title: 'Développeur Web (Stage)',
      company: 'SPAT',
      location: 'Toamasina',
      period: 'Septembre 2023 – Janvier 2024',
      description: [
        "Application web pour la gestion d'affectation de matériels aux employés",
        'Technologies : PHP, Bootstrap, MySQL'
      ],
      technologies: ['PHP', 'Bootstrap', 'MySQL']
    },
    {
      title: 'Formateur en Bureautique',
      company: 'Youth Computing',
      location: 'Fianarantsoa',
      period: '2024',
      description: [
        "Animation de formations dans le cadre des projets Soamampiaty.ai et Trust Spotlight",
        'Partenariat avec FANAINGA+'
      ],
      technologies: ['Microsoft Word', 'Excel', 'PowerPoint','google workspace']
    }
  ];
  

  const education = [
    {
      degree: "Master en Intelligence Artificielle, parcours Gouvernance et Ingénierie de Données",
      school: "École Nationale d'Informatique (ENI), Fianarantsoa",
      period: "2024 - Présent",
      description: "Formation orientée vers l’intelligence artificielle et l’ingénierie des données"
    },
    {
      degree: "Licence en Informatique, parcours Génie Logiciel et Base de Données",
      school: "École Nationale d'Informatique (ENI), Fianarantsoa",
      period: "2021 - 2024",
      description: "Diplôme de Licence spécialisé dans le développement logiciel et les bases de données"
    },
    {
      degree: "Baccalauréat Scientifique (Série C)",
      school: "Collège Immaculée Conception, Mananjary",
      period: "2021",
      description: "Baccalauréat axé sur les mathématiques et les sciences physiques"
    }
  ];
  

  return (
    // <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
    <section id="experience" className={`py-20`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Expérience & Formation
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Mon parcours professionnel et académique dans le domaine du développement web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Expérience Professionnelle
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-lg ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-50'
                  } hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {exp.title}
                      </h4>
                      <p className="text-fuchsia-500 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm">
                      <div className={`flex items-center gap-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className={`flex items-center gap-1 mt-1 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className={`space-y-2 mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-fuchsia-500 mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          darkMode 
                            ? 'bg-gray-700 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Formation
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-lg ${
                    darkMode ? 'bg-gray-800' : 'bg-gray-50'
                  } hover:shadow-lg transition-shadow duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {edu.degree}
                      </h4>
                      <p className="text-fuchsia-500 font-medium">{edu.school}</p>
                    </div>
                    <div className={`flex items-center gap-1 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                  </div>
                  
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Certifications */}
              <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
                <h4 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Certifications
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Cloud Engineering – Google Cloud Platform (Prévu pour 2025)
                    </span>
                    <ExternalLink size={16} className="text-fuchsia-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Cybersécurité – Cisco Networking Academy (Prévu pour 2025)
                    </span>
                    <ExternalLink size={16} className="text-fuchsia-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Développement Python – FreeCodeCamp (Prévu pour 2025)
                    </span>
                    <ExternalLink size={16} className="text-fuchsia-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Initiation au DevOps – ODC Fianarantsoa (Juillet 2024)
                    </span>
                    <ExternalLink size={16} className="text-fuchsia-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Gouvernance d'Association – Fanainga+ (Juin 2024)
                    </span>
                    <ExternalLink size={16} className="text-fuchsia-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      Admin Système & Réseaux – SPRAY INFO (Avril - Août 2024)
                    </span>
                    <ExternalLink size={16} className="text-fuchsia-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      DELF B2 – Alliance Française Fianarantsoa (2024)
                    </span>
                    <ExternalLink size={16} className="text-fuchsia-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;