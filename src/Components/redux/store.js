import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './GreetingReducer';

const store = configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});

export default store;
