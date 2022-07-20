/* eslint-disable */
import React from 'react';
import { useSelector } from 'react-redux';
import AddBook from './addBook';
import Book from './book';


function Books() {
  const books = useSelector((state) => state.books)
  console.log(books);
  return (
    <div>
      <h1>Books</h1>
      {books.map((book) => (
        <Book
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
      />
      ))}
    
      <AddBook />
    </div>
  );
}

export default Books;
