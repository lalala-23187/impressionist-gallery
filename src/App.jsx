import { GalleryProvider } from './context/GalleryContext';
import { Nav } from './components/Nav/Nav';
import { Hero } from './components/Hero/Hero';
import { PainterReel } from './components/PainterReel/PainterReel';
import { PainterSection } from './components/PainterSection/PainterSection';
import { Lightbox } from './components/Lightbox/Lightbox';
import { painters } from './data/painters';
import './styles/app.css';

export default function App() {
  return (
    <GalleryProvider>
      <Nav />
      <Hero />
      <PainterReel painters={painters} />
      <main>
        {painters.map((painter) => (
          <PainterSection key={painter.id} painter={painter} />
        ))}
      </main>
      <footer className="site-footer">
        <p className="footer-text">
          所有展示作品均创作于1926年前，已属于公共领域。图片来源：Wikimedia Commons。
        </p>
        <p className="footer-sig">IMPRESSIONS — A Gallery of Light</p>
      </footer>
      <Lightbox />
    </GalleryProvider>
  );
}
