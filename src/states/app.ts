import { create } from 'zustand'
import { createSelectors } from './common';
import { IMenuItem, IServiceItem } from '../models/appModels';

/**
 * State Structure
 */
export interface IAppState {
  // State values
  selectedService: IServiceItem | null;
  setSelectedService: Function;
  selectedCategory: IMenuItem | null;
  setSelectedCategory: Function;
  favorites: string[];
  setFavorites: Function;
}

const initialState: IAppState = {
  selectedService: null,
  setSelectedService: () => { },
  selectedCategory: null,
  setSelectedCategory: () => { },
  favorites: [],
  setFavorites: () => { },

};

/**
 * State hook definition
 */
export const useApp = create<IAppState>((set, get) => ({
  ...initialState,
  setSelectedService: (service: IServiceItem) => set({ selectedService: service, }),
  setSelectedCategory: (service: IMenuItem) => set({ selectedCategory: service, }),
  setFavorites: (favs: string[]) => set({ favorites: favs }),
}));

/**
 * Selectors
 */
export const appStateSelectors = createSelectors(initialState);
