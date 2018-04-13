// counterReducer
// listen for our actions to be dispatched/called from eg a component when a user clicks a button
// when an action happens it needs to update the state which is held in our store
// managing state that will be stored in the store

const initialState = {
  count: 0,
}

const counterReducer = (state = initialState, action) => {

  if(action.type === 'INCREMENT_COUNTER') {
    return {
      ...state,
      count: state.count + action.number
    }
  }

  else if(action.type === 'DECREMENT_COUNTER') {
    return {
      ...state,
      count: state.count - action.number
    }
  }

  return state

}

export default counterReducer
