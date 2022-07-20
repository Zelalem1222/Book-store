/* eslint-disable */
import React , { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 
import { addBook } from '../redux/books/books';


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
  };
  const dispatch = useDispatch();
  const handelAddBook = ()=> {
   dispatch(addBook(newBook))
   console.log(newBook)
  }

 const handleSubmit = (e) => {
  e.preventDefault();
  setInputText({title:'' , author: ''})
 }
 

 
return (
  <form onSubmit={handleSubmit}>
    <input value={inputText.title} name='title' type="text" onChange={handleChange} placeholder="title" />
    <input value={inputText.author} name='author' type="text" onChange={handleChange} placeholder="author" />
    <button type="submit" onClick={handelAddBook}>Add Book</button>
  </form>
  )
};

export default AddBook;
