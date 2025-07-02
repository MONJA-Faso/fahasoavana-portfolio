import React from 'react';
import { Github, Linkedin, Mail, Heart, MessageSquare } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: '#',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:fahasoavana@email.com',
      label: 'Email'
    },
    {
      icon: <MessageSquare size={20} />,
      href: 'https://wa.me/261347099370', // <- format international sans +
      label: 'WhatsApp'
    }
  ];

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Projets', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} border-t`}>
    <footer className={`py-12  border-t`}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-fuchsia-500">Fahasoavana</span>
              <span className={darkMode ? 'text-white' : 'text-gray-900'}> MONJA</span>
            </div>
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Développeur Full Stack passionné, spécialisé dans la création d'expériences 
              web modernes et performantes. Toujours prêt à relever de nouveaux défis !
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-sm transition-colors duration-200 hover:text-fuchsia-500 ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Restons connectés
            </h3>
            <div className="space-y-2 mb-4">
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                fahasoavanamonja891@gmail.com
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                +261 34 70 993 70
              </p>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Fianarantsoa Madagascar
              </p>
            </div>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className={`p-2 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  } hover:text-fuchsia-500`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} Fahasoavana MONJA. Tous droits réservés.
            </p>
            
            <div className="flex items-center gap-1 text-sm">
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                Fait avec
              </span>
              <Heart className="text-fuchsia-500 animate-pulse" size={16} />
              <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                et beaucoup de ☕
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;