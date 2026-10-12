import { useEffect, useState, type CSSProperties } from 'react';

// Stable positions keep the decoration consistent across React renders.
const particles = Array.from({ length: 80 }, (_, index) => ({
  left: `${(index * 37 + 11) % 100}%`,
  top: `${(index * 53 + 7) % 100}%`,
  size: `${index % 7 === 0 ? 8 : 3 + index % 3}px`,
  duration: `${8 + index % 9}s`,
  delay: `${-index * 2.7}s`,
  driftX: `${(index % 2 === 0 ? 1 : -1) * (60 + index % 5 * 24)}px`,
  driftY: `${(index % 3 === 0 ? 1 : -1) * (70 + index % 6 * 20)}px`,
}));

export default function ParticlesBackground() {
  const [paused, setPaused] = useState(() => document.hidden);

  useEffect(() => {
    const updateVisibility = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  return (
    <div className="particles-background" aria-hidden="true" data-paused={paused}>
      {particles.map((particle, index) => (
        <span
          key={index}
          className={`background-particle particle-tone-${index % 9 === 0 ? 'red' : index % 4 === 0 ? 'green' : 'olive'}${index % 7 === 0 ? ' particle-ring' : ''}`}
          style={{
            left: particle.left,
            top: particle.top,
            '--particle-size': particle.size,
            '--particle-duration': particle.duration,
            '--particle-delay': particle.delay,
            '--particle-drift-x': particle.driftX,
            '--particle-drift-y': particle.driftY,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
