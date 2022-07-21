import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookFromApi } from '../redux/books/thunkFunctions';

function Book(props) {
  const {
    id, title, author, catagory,
  } = props;
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeBookFromApi(id));
  };

  return (
    <div>
      <div>
        <span>{catagory}</span>
        <li key={id}>
          {title}
          {' '}
          :
          {author}
        </li>
        <button onClick={handleRemove} type="button"> Remove</button>
      </div>
    </div>
  );
}

Book.propTypes = ({
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  catagory: PropTypes.string.isRequired,
});

export default Book;
