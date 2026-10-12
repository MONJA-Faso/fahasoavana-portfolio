import { useEffect, useState } from 'react';

const roles = [
  'DevSecOps',
  'Apprenti MLOps',
  'DevOps passionné',
  'Amoureux de l’automatisation',
  'Explorateur de l’IA et des données',
  'Créateur de solutions innovantes',
];
const staticRole = 'DevSecOps & MLOps';

export default function TypewriterRole() {
  const [text, setText] = useState(roles[0]);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout> | undefined;

    const start = () => {
      clearTimeout(timer);
      if (preference.matches) {
        setText(staticRole);
        return;
      }

      let roleIndex = 0;
      let characterCount = roles[0].length;
      let deleting = true;
      setText(roles[0]);

      const tick = () => {
        const role = roles[roleIndex];
        characterCount += deleting ? -1 : 1;
        setText(role.slice(0, characterCount));

        let delay = deleting ? 45 : 70;
        if (!deleting && characterCount === role.length) {
          deleting = true;
          delay = 1600;
        } else if (deleting && characterCount === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          delay = 300;
        }
        timer = setTimeout(tick, delay);
      };

      timer = setTimeout(tick, 1600);
    };

    start();
    preference.addEventListener('change', start);
    return () => {
      clearTimeout(timer);
      preference.removeEventListener('change', start);
    };
  }, []);

  return (
    <p className="hero-role typewriter-role">
      <span className="sr-only">{staticRole}, passionné d’automatisation et d’intelligence artificielle.</span>
      <span aria-hidden="true">{text}<span className="typewriter-cursor">|</span></span>
    </p>
  );
}
