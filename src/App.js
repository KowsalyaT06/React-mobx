import React from 'react';
import reactDom from 'react-dom';
import { action, observable } from "mobx";

const intialState = observable({
  count: 0,
  addCount: action("Increment:", () => {
    intialState.count += 1;
  }),
  minusCount: action("Decrement:", () => {
    intialState.count -= 1;
  }),

  get multiply() {
    return this.count * 3;
  },

  get divide() {
    return this.count / 2;
  },
});

export default intialState;
