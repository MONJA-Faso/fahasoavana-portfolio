import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID!,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
  )
  .then(() => {
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  })
  .catch((error) => {
    console.error('Erreur lors de l’envoi:', error);
    alert('Échec de l’envoi. Réessayez plus tard.');
  });
};

  const contactInfo = [
    {
      icon: <Mail className="text-fuchsia-500" size={24} />,
      title: 'Email',
      value: 'fahasoavanamonja891@gmail.com',
      link: 'mailto:fahasoavanamonja891@gmail.com'
    },
    {
      icon: <Phone className="text-fuchsia-500" size={24} />,
      title: 'Téléphone',
      value: '+261 34 70 993 70',
      link: 'tel:+261347099370'
    },
    {
      icon: <MapPin className="text-fuchsia-500" size={24} />,
      title: 'Localisation',
      value: 'Fianarantsoa Madagascar',
      link: 'https://maps.app.goo.gl/MyFx719sGfvttbhq6'
    }
  ];

  return (
    // <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
    <section id="contact" className={`py-20`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Restons en Contact
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Informations de Contact
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-colors duration-200 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600' 
                      : 'bg-white hover:bg-gray-100'
                  } shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-fuchsia-100 dark:bg-fuchsia-900/20 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {info.title}
                    </h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
              <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Disponibilité
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Lun - Ven:</span>
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Sam:</span>
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>10h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Dim:</span>
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>Sur rendez-vous</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">
                    Disponible pour de nouveaux projets
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Envoyez-moi un Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Sujet
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Sujet de votre message"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 resize-none ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Décrivez votre projet ou votre demande..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-fuchsia-500 hover:bg-fuchsia-600 text-white hover:shadow-lg'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message envoyé !
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Envoyer le Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;