import { createContext, useContext, useState } from 'react';

const GalleryContext = createContext(null);

export function GalleryProvider({ children }) {
  const [openArtwork, setOpenArtwork] = useState(null);

  return (
    <GalleryContext.Provider value={{ openArtwork, setOpenArtwork }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  return useContext(GalleryContext);
}
