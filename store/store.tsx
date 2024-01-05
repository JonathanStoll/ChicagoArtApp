import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {ArtSlice} from './features/artSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import storage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};
const reducer = combineReducers({
  art: ArtSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
