import { Item } from "@/appConstant/data";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FavoritesState {
  favoriteItems: Item[];
  favoriteItemIds: string[];
}

const initialState: FavoritesState = {
  favoriteItems: [],
  favoriteItemIds: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const isAlreadyFavorite = state.favoriteItemIds.includes(item.id);
      
      if (!isAlreadyFavorite) {
        state.favoriteItems.push(item);
        state.favoriteItemIds.push(item.id);
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const itemId = action.payload;
      state.favoriteItems = state.favoriteItems.filter(item => item.id !== itemId);
      state.favoriteItemIds = state.favoriteItemIds.filter(id => id !== itemId);
    },
    toggleFavorite: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const isAlreadyFavorite = state.favoriteItemIds.includes(item.id);
      
      if (isAlreadyFavorite) {
        // Remove from favorites
        state.favoriteItems = state.favoriteItems.filter(favItem => favItem.id !== item.id);
        state.favoriteItemIds = state.favoriteItemIds.filter(id => id !== item.id);
      } else {
        // Add to favorites
        state.favoriteItems.push(item);
        state.favoriteItemIds.push(item.id);
      }
    },
    clearAllFavorites: (state) => {
      state.favoriteItems = [];
      state.favoriteItemIds = [];
    }
  },
});

export const { 
  addToFavorites, 
  removeFromFavorites, 
  toggleFavorite, 
  clearAllFavorites 
} = favoritesSlice.actions;

export default favoritesSlice.reducer;