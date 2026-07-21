import { useGallery } from '../../context/GalleryContext';
import './PainterSection.css';

export function ArtworkTile({ artwork }) {
  const { setOpenArtwork } = useGallery();

  return (
    <div className="artwork-tile" onClick={() => setOpenArtwork(artwork)}>
      <img
        className="artwork-tile-img"
        src={artwork.image}
        alt={artwork.titleCN}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
      <div className="artwork-tile-info">
        <p className="artwork-tile-title">{artwork.titleCN}</p>
        <p className="artwork-tile-year">{artwork.year}</p>
      </div>
      <div className="artwork-tile-open">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 10L10 2M10 2H5M10 2v5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}
