import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './contactApi';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

export default store;
