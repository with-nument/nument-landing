import { create } from 'zustand';

// eslint-disable-next-line import/prefer-default-export
export const useStore = create((set) => ({
  lenis: undefined,
  setLenis: (lenis) => set({ lenis }),
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
}));
