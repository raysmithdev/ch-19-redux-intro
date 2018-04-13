import { combineReducers } from 'redux'
import counterReducer from './counter'
import userReducer from './user'
console.log(userReducer);
console.log(counterReducer);

// mainReducer
// reducer

const rootReducer = combineReducers({
  counterReducer,
  userReducer
})

export default rootReducer
