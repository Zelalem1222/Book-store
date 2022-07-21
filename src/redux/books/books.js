const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const LOAD_BOOK = 'LOAD_BOOK';

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appId = 'WtbY4eKKheOnDi9gRWJL';
const URL = `${baseUrl}/apps/${appId}/books`;

const initialBooks = [];

const booksReducer = (state = initialBooks, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case `${LOAD_BOOK}/fulfilled`:
      return payload;
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);

    default:
      return state;
  }
};

const getBooks = async () => {
  const response = await fetch(URL);
  const result = await response.json();
  return result;
};

const getApiBooks = (books) => {
  const apiBooks = Object.entries(books).map(([key, value]) => ({
    ...value[0],
    id: key,
  }));
  return apiBooks;
};

const postBook = async ({
  id, title, author, catagory,
}) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      title,
      author,
      catagory,
    }),
  });
  return response;
};

const addBook = (newBook) => ({
  type: ADD_BOOK,
  payload: newBook,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default booksReducer;
export {
  addBook, removeBook, LOAD_BOOK, getApiBooks, getBooks, postBook,
};
