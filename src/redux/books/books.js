const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialBooks = [];

const booksReducer = (state = initialBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state, {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};

const addBook = () => ({
  type: ADD_BOOK,
  id: 0,
  title: 'Harry Potter',
  author: 'J.K. Rowling',
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
export { addBook, removeBook };
