import { createContext, useContext, useState } from 'react';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [heroPosition, setHeroPosition] = useState({ x: 0, y: 0 });
  const [isOverHero, setIsOverHero] = useState(false);

  return (
    <CursorContext.Provider value={{ heroPosition, setHeroPosition, isOverHero, setIsOverHero }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
