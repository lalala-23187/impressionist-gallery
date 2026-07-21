import './PainterSection.css';
import { ScrollReveal } from '../ScrollReveal/ScrollReveal';

export function Biography({ painter }) {
  return (
    <ScrollReveal direction="right" className="biography">
      <div className="bio-accent-bar" style={{ background: painter.accentColor }} />
      <p className="bio-movement">{painter.movement} · {painter.nationality}</p>
      <h2 className="bio-name">{painter.name}</h2>
      <p className="bio-namecn">{painter.nameCN}</p>
      <p className="bio-years">{painter.years}</p>
      <p className="bio-text">{painter.biography.full}</p>
      <div className="bio-meta">
        <div className="bio-meta-row">
          <span className="bio-meta-label">流派</span>
          <span className="bio-meta-value">{painter.movement}</span>
        </div>
        <div className="bio-meta-row">
          <span className="bio-meta-label">国籍</span>
          <span className="bio-meta-value">{painter.nationality}</span>
        </div>
        <div className="bio-meta-row">
          <span className="bio-meta-label">生卒</span>
          <span className="bio-meta-value">{painter.years}</span>
        </div>
        <div className="bio-meta-row">
          <span className="bio-meta-label">作品</span>
          <span className="bio-meta-value">{painter.artworks.length} 件展示</span>
        </div>
      </div>
    </ScrollReveal>
  );
}
