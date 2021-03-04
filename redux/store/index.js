import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';


const loggerMiddleware = store => next => action => {
  const result = next(action);
  return result;
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(
  loggerMiddleware,
  thunk
)));

export default store;
