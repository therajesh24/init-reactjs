import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import exampleReducer from './example/exampleSlice';
import { watchGetSampleData } from './example/example.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchGetSampleData);
