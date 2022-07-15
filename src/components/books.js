import React from 'react';
import AddBook from './addBook';
import Book from './book';

function Books() {
  return (
    <div>
      <h1>Books</h1>
      <Book title="Harry Potter" author="J.K. Rowling" />
      <AddBook />
    </div>
  );
}

export default Books;
