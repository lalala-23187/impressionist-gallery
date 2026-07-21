import { useRef } from 'react';
import './PainterReel.css';
import { PainterCard } from './PainterCard';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

export function PainterReel({ painters }) {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft.current - (x - startX.current);
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <section className="reel-section">
      <ScrollReveal className="reel-header">
        <h2 className="reel-title">十位大师</h2>
        <span className="reel-count">10 Masters</span>
      </ScrollReveal>

      <div
        className="reel-track"
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
      >
        {painters.map((painter) => (
          <PainterCard key={painter.id} painter={painter} />
        ))}
      </div>
    </section>
  );
}
