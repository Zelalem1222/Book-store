/* eslint-disable */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/catagories/catagories';

const Catagories = () => {
  const status = useSelector((state) => state.catagories);
   console.log(status)
  const dispatch = useDispatch();
  
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(checkStatus())}>
        Check status
     </button>
      <h3>{status}</h3>
    </div>
  );
};

export default Catagories;
