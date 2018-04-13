// store is where the state is stored

import { createStore } from 'redux'
import counterReducer from './reducers/counter'
// import rootReducer from './reducers'
// import rootReducer from './reducers/index.js'

const store = createStore(counterReducer)

// { count: 0, email: '', age: 0, name: '' }

export default store
