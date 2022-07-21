/* eslint-disable */
import React , { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './addBook';
import Book from './book';
import { apiBooks } from '../redux/books/thunkFunctions'


function Books() {
  const books = useSelector((state) => state.books)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiBooks());
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <Book
        key={book.id}
        id={book.id}
        catagory={book.catagory}
        title={book.title}
        author={book.author}
      />
      ))}
    
      <AddBook />
    </div>
  );
}

export default Books;
