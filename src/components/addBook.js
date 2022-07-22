import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookToApi } from '../redux/books/thunkFunctions';
import '../styles/addBooks.css';

const AddBook = () => {
  const [inputText, setInputText] = useState({
    title: '',
    author: '',
  });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const newBook = {
    id: uuidv4(),
    title: inputText.title,
    author: inputText.author,
    category: 'Fiction',
  };
  const dispatch = useDispatch();
  const handelAddBook = () => {
    dispatch(addBookToApi(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputText({ title: '', author: '' });
  };

  return (

    <form onSubmit={handleSubmit}>
      <div className="componentDivider" />
      <h2 className="addBookTitle">Add new book</h2>
      <div className="inputsContainer">
        <TextField
          id="outlined-size-small"
          size="small"
          label="Title"
          variant="outlined"
          value={inputText.title}
          name="title"
          type="text"
          onChange={handleChange}
          placeholder="title"
        />
        <TextField
          id="outlined-size-small"
          size="small"
          label="Author"
          variant="outlined"
          value={inputText.author}
          name="author"
          type="text"
          onChange={handleChange}
          placeholder="author"
        />
        <Button variant="contained" className="addBookBtn" type="submit" onClick={handelAddBook}>Add Book</Button>
      </div>
    </form>
  );
};

export default AddBook;
