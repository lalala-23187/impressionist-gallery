import './PainterSection.css';
import { Biography } from './Biography';
import { ArtworkGrid } from './ArtworkGrid';

export function PainterSection({ painter }) {
  return (
    <section
      id={painter.id}
      className="painter-section"
      style={{ '--painter-accent': painter.accentColor }}
    >
      <div className="painter-section-inner">
        <Biography painter={painter} />
        <ArtworkGrid artworks={painter.artworks} />
      </div>
    </section>
  );
}
