import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import intialState from './App'
import Counter from './Counter';


ReactDOM.render(
  <React.StrictMode>
    <Counter intialState={intialState}/>
  </React.StrictMode>,
  document.getElementById('root')
);

