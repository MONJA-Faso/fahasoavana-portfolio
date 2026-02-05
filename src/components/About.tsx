import React from 'react';
import { Code2, Rocket, Target, Users } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { number: '1+', label: 'Années d\'expérience' },
    { number: '20+', label: 'Projets réalisés' },
    { number: '15+', label: 'Technologies maîtrisées' },
    { number: '100%', label: 'Satisfaction client' },
  ];

  const values = [
    {
      icon: <Code2 className="text-fuchsia-500" size={24} />,
      title: 'Code Propre',
      description: 'Je privilégie la qualité du code et les bonnes pratiques de développement.'
    },
    {
      icon: <Rocket className="text-fuchsia-500" size={24} />,
      title: 'Innovation',
      description: 'Toujours à la recherche de nouvelles technologies et solutions innovantes.'
    },
    {
      icon: <Target className="text-fuchsia-500" size={24} />,
      title: 'Précision',
      description: 'Attention aux détails et respect des spécifications pour un résultat optimal.'
    },
    {
      icon: <Users className="text-fuchsia-500" size={24} />,
      title: 'Collaboration',
      description: 'Travail d\'équipe efficace et communication transparente avec les clients.'
    },
  ];

  return (
    // <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
    <section id="about" className={`py-20`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            À propos de moi
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Découvrez mon parcours, mes valeurs et ce qui me motive dans le développement web
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Mon parcours & Expertise
            </h3>
            <div className="space-y-4">
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionné par l'intersection entre l'infrastructure, la sécurité et l'Intelligence Artificielle, j'ai évolué du développement logiciel vers une spécialisation pointue en <strong className="font-semibold text-blue-500">DevSecOps</strong> et <strong className="font-semibold text-blue-500">MLOps</strong>. Mon expertise réside dans l'automatisation et la sécurisation des cycles de vie des modèles d'IA complexes.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Aujourd'hui, j'interviens sur la mise en place de pipelines MLOps complets — de l'ingestion des données au monitoring en production — tout en gérant des infrastructures critiques (Cloud et On-premise) comme les systèmes haute performance <strong className="font-semibold">Nvidia DGX Spark (GraceBlackwell)</strong>.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Je me spécialise dans la conteneurisation (Docker, Kubernetes), l'automatisation via Ansible et la sécurisation multicouche des workflows CI/CD. Mon quotidien consiste à garantir que les services IA sont non seulement performants, mais aussi robustes, scalables et conformes aux meilleures pratiques de cybersécurité.
              </p>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                En dehors de l'ingénierie système, j'explore activement les technologies de <strong className="font-semibold">Large Language Models (LLM)</strong>, l'optimisation des ressources GPU et le déploiement de solutions d'observabilité avancées (Stack TIG, Prometheus/Grafana).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="text-3xl font-bold text-fuchsia-500 mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-2xl font-bold mb-8 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Mes valeurs
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-lg mb-4">
                  {value.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;