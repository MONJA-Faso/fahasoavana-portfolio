import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Bootstrap', level: 82 },
        { name: 'HTML5/CSS3', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: '', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Express.js', level: 85 },
        { name: 'Python (Flask, Django)', level: 80 },
        { name: 'PHP', level: 78 },
        { name: 'API REST', level: 85 },
        { name: 'Shell', level: 70 },
        { name: 'Ruby', level: 65 },
        { name: 'JAVA', level: 45 }
      ]
    },
    {
      title: 'Base de données',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 78 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      title: 'DevOps & Outils',
      skills: [
        { name: 'Git', level: 92 },
        { name: 'Docker', level: 82 },
        { name: 'Kubernetes', level: 75 },
        { name: 'Linux', level: 85 },
        { name: 'CI/CD (GitLab CI, Jenkins)', level: 80 },
        { name: 'HAProxy', level: 70 }
      ]
    }
  ];
  

  const tools = [
    'FlutterFlow', 'Wordpress', 'KNIME', 'Figma',
    'VS Code', 'Android Studio', 'Draw.io', 'PlantUML', 'Visual Paradigm',
    'GNS3', 'Packet Tracer', 'VirtualBox', 'Proxmox', 'Vagrant', 'Ansible',
    'Prometheus', 'Grafana', 'ELK Stack', 'Jenkins', 'GitLab', 'Kali Linux'
  ];
  

  return (
    // <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
    <section id="skills" className={`py-20`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Compétences Techniques
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Les technologies et outils que j'utilise pour créer des applications exceptionnelles
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <h3 className={`text-xl font-bold mb-6 text-center ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className="text-xs text-fuchsia-500 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2`}>
                      <div
                        className="bg-gradient-to-r from-fuchsia-500 to-pink-500 h-2 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Outils & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-600 text-gray-200 hover:bg-fuchsia-600' 
                    : 'bg-gray-100 text-gray-700 hover:bg-fuchsia-100 hover:text-fuchsia-700'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16">
          <h3 className={`text-2xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Compétences Transversales
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Leadership',
                description: 'Capacité à diriger et motiver une équipe technique'
              },
              {
                title: 'Communication',
                description: 'Excellente communication avec les clients et les équipes'
              },
              {
                title: 'Résolution de problèmes',
                description: 'Approche analytique pour résoudre les défis complexes'
              },
              {
                title: 'Adaptabilité',
                description: 'Capacité à s\'adapter rapidement aux nouvelles technologies'
              },
              {
                title: 'Gestion de projet',
                description: 'Planification et exécution efficace des projets'
              },
              {
                title: 'Apprentissage continu',
                description: 'Passion pour l\'apprentissage et l\'amélioration continue'
              }
            ].map((softSkill, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <h4 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {softSkill.title}
                </h4>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {softSkill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;