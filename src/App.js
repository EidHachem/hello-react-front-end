import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Components/Greeting';
import store from './Components/redux/store';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
