import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addBook, removeBook, LOAD_BOOK, getApiBooks, getBooks, postBook,
} from './books';

const AddASYNC = 'AddASYNC';
const REMOVEASYNC = 'REMOVEASYNC';

const apiBooks = createAsyncThunk(LOAD_BOOK, async () => {
  const response = await getBooks();
  const booksFromApi = getApiBooks(response);
  return booksFromApi;
});

const addBookToApi = createAsyncThunk(AddASYNC, async (newBook, { dispatch }) => {
  const response = await postBook(newBook);
  dispatch(addBook({ ...newBook }));
  return response;
});

const removeBookFromApi = createAsyncThunk(REMOVEASYNC, async (id, { dispatch }) => {
  const response = await fetch(`${URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  dispatch(removeBook(id));
  return response;
});

export { apiBooks, removeBookFromApi, addBookToApi };
