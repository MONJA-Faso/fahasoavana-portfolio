import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { Mail, Phone, MapPin, Github, Linkedin, Download, MessageSquare } from 'lucide-react';
import { gtagEvent } from '../utils/analytics';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Bonjour, je suis{' '}
                <span className="text-fuchsia-500">Fahasoavana</span>
              </h1>
              
              <div className={`text-xl lg:text-2xl mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <Typewriter
                  words={[
                    "Ingénieur DevOps Junior",
                    "Développeur Full Stack Passionné",
                    "Amoureux de l'Automatisation",
                    "Explorateur de l'IA et des Données",
                    "Créateur de Solutions Innovantes"
                  ]}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>

            <p className={`text-lg mb-8 max-w-lg mx-auto lg:mx-0 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Développeur passionné avec une expertise en développement web moderne, 
              spécialisé dans la création d'applications performantes et intuitives.
            </p>

            {/* Contact info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <Mail className="text-fuchsia-500" size={16} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  fahasoavanamonja891@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-fuchsia-500" size={16} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  +261 34 70 993 70
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="text-fuchsia-500" size={16} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  Madagascar
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a

              onClick={() => gtagEvent('download_cv', 'Interaction', 'Téléchargement CV')}

              href="/cv_fahasoavana.pdf"
              download
              className="bg-fuchsia-500 hover:bg-fuchsia-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Télécharger CV
            </a>

              <button 

                onClick={() => 
                  {
                    gtagEvent('click_contact', 'Navigation', 'Scroll vers Contact');
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                className={`border-2 border-fuchsia-500 text-fuchsia-500 hover:bg-fuchsia-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  darkMode ? 'hover:text-white' : 'hover:text-white'
                }`}
              >
                Me contacter
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center lg:justify-start">
              <a 

                onClick={() => gtagEvent('click_github', 'Réseaux sociaux', 'GitHub')}

                href="https://github.com/MONJA-Faso" 
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Github size={20} />
              </a>
              <a 

                onClick={() => gtagEvent('click_linkedin', 'Réseaux sociaux', 'linkedin')}

                href="https://www.linkedin.com/in/rabefinoana-fahasoavana-monja-9785912a8/" 
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                <Linkedin size={20} />
              </a>
              <a 

                onClick={() => gtagEvent('click_whatsapp', 'Réseaux sociaux', 'WhatsApp')}

                href="https://wa.me/261347099370"
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-lg transition-colors duration-200 ${
                  darkMode 
                    ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900'
                }`}
                aria-label="WhatsApp"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  width="20" 
                  height="20"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.521-.075-.148-.669-1.611-.916-2.211-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.373s-1.04 1.016-1.04 2.479 1.064 2.876 1.213 3.074c.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.718 2.006-1.41.248-.69.248-1.282.173-1.41-.074-.129-.272-.198-.57-.347z"/>
                </svg>
              </a>

            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-fuchsia-400 to-fuchsia-600 p-1 shadow-2xl">
                <div className={`w-full h-full rounded-full overflow-hidden ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } flex items-center justify-center`}>
                  
                  <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    
                  <img src="/img/profil-2.webp" alt="pdp" />
                    <span className="text-6xl text-gray-500"></span>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-fuchsia-500 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-l">DevOps</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl">Dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;