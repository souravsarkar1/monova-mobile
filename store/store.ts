import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';

// Import your slices
// import itemsSlice from './slices/itemsSlice';
// import filtersSlice from './slices/filtersSlice';
// import outfitsSlice from './slices/outfitsSlice';
import authSlice from './slices/authSlice';
import favoritesSlice from './slices/favoritesSlice';
// Root reducer
const rootReducer = combineReducers({
//   items: itemsSlice,
//   filters: filtersSlice,
//   outfits: outfitsSlice,
auth : authSlice,
favorites : favoritesSlice
});

// Persist configuration
const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'favorites', ], // Only persist these reducers
  // blacklist: ['someSlice'], // Don't persist these
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;