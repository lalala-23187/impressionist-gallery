import { useEffect, useState } from 'react';
import './Nav.css';
import { painters } from '../../data/painters';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDot, setActiveDot] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers = painters.map((painter) => {
      const el = document.getElementById(painter.id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveDot(painter.id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((obs) => obs?.disconnect());
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav${scrolled ? ' nav-scrolled' : ''}`}>
      <span className="nav-wordmark">Impressions</span>
      <div className="nav-dots">
        {painters.map((painter) => (
          <button
            key={painter.id}
            className={`nav-dot${activeDot === painter.id ? ' nav-dot-active' : ''}`}
            data-name={painter.nameCN}
            onClick={() => scrollTo(painter.id)}
            aria-label={painter.nameCN}
          />
        ))}
      </div>
    </nav>
  );
}
