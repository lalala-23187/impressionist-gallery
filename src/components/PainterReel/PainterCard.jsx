import './PainterReel.css';

export function PainterCard({ painter }) {
  const scrollTo = () => {
    document.getElementById(painter.id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="painter-card" onClick={scrollTo}>
      <img
        className="painter-card-img"
        src={painter.artworks[0]?.image}
        alt={painter.name}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="painter-card-overlay">
        <p className="painter-card-movement">{painter.movement}</p>
        <h3 className="painter-card-name">{painter.name}</h3>
        <p className="painter-card-namecn">{painter.nameCN}</p>
        <p className="painter-card-bio">{painter.biography.short}</p>
        <span className="painter-card-years">{painter.years}</span>
      </div>
    </div>
  );
}
