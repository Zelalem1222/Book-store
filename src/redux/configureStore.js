import { combineReducers, configureStore } from '@reduxjs/toolkit';

import booksReducer from './books/books';
import catagoriesReducer from './catagories/catagories';

const rootReducer = combineReducers({
  books: booksReducer,
  catagories: catagoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
