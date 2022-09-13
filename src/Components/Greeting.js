import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getGreetingAsync } from './redux/GreetingReducer';

const Greeting = () => {
  const dispatch = useDispatch();
  const greet = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreetingAsync());
  }, [dispatch]);

  return (
    <div className="div">
      <h1>{greet}</h1>
      <button type="button" onClick={() => dispatch(getGreetingAsync())}>
        Another message
      </button>
    </div>
  );
};

export default Greeting;
