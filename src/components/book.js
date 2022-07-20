/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books'

function Book(props) {
  const {id, title, author } = props;
  const dispatch = useDispatch();
  const handleRemove = ()=> {
    dispatch(removeBook(id))
  }

  return (
    <div>
      <li key={id}>
        {title} : {author}
      </li>
      <button onClick={handleRemove} type="button"> Remove</button>
    </div>
  );
}

Book.propTypes = ({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
});

export default Book;
