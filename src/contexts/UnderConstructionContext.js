import { TreeDeciduous } from 'lucide-react';
import React, { createContext, useContext } from 'react';

const UnderConstructionContext = createContext();

// Set this to true to enable "Under Construction" mode
const UNDER_CONSTRUCTION = false;

export function UnderConstructionProvider({ children }) {
  return (
    <UnderConstructionContext.Provider value={UNDER_CONSTRUCTION}>
      {children}
    </UnderConstructionContext.Provider>
  );
}

export function useUnderConstruction() {
  return useContext(UnderConstructionContext);
} 