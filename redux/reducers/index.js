import catalogReducer from './catalogReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  catalog: catalogReducer
})


export default rootReducer;
