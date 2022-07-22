import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import AddBook from './addBook';
import Book from './book';
import { apiBooks } from '../redux/books/thunkFunctions';

function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiBooks());
  }, []);

  return (
    <BookWrapper>
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
    </BookWrapper>
  );
}

export default Books;
const BookWrapper = styled.section`
  background-color: var(--light-gray);
  padding-top: 20px;
`;
