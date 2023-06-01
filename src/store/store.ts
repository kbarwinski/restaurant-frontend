import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistCartConfig = {
    key: 'cart',
    storage,
  };

  const persistAuthConfig = {
    key: 'auth',
    storage,
  };
  
  const rootReducer = combineReducers({
    cart: persistReducer(persistCartConfig, cartReducer),
    auth: persistReducer(persistAuthConfig, authReducer),
  });
  
  export const store = configureStore({
    reducer: rootReducer,
  });
  
  export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch