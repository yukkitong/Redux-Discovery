import { createStore, applyMiddleware } from 'redux';

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return state.concat(',', 'Received SIMPLE_ACTION');
    default:
      return state;
  }
};

const logger1 = ({ getState }) => next => action => {
  console.log(`logger1 action : ${ action.type }`);
  const returnValue = next(action);
  console.log(`logger1 state : ${ getState() }`);
  return returnValue;
};

const logger2 = ({ getState, dispatch }) => next => action => {
  console.log(`logger2 action : ${ action.type }`);
  const returnValue = next(action);
  console.log(`logger2 state : ${ getState() }`);
  return returnValue;
};

const store = createStore(reducer, applyMiddleware(logger1, logger2));
// console.log(store.getState());
// const un = store.subscribe(() => {
//   console.log(`Final state : ${ store.getState() }`);
// });

console.log(store.getState());


store.dispatch({ type: 'SIMPLE_ACTION' });

// un();

console.log(store.getState());