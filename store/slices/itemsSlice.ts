import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Item {
  id: string;
  name: string;
  category: 'top' | 'bottom' | 'footwear' | 'outerwear';
  color: string;
  style: string;
  image: string;
}

interface ItemsState {
  items: Item[];
  loading: boolean;
  filteredItems: Item[];
}

const initialState: ItemsState = {
  items: [],
  loading: false,
  filteredItems: [],
};

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    setFilteredItems: (state, action: PayloadAction<Item[]>) => {
      state.filteredItems = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.filteredItems = state.filteredItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { setItems, setFilteredItems, setLoading, addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;