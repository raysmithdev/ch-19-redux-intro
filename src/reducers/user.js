const initialState = {
  email: '',
  name: '',
  age: 0
}

const userReducer = (state = initialState, action) => {
  if(action.type === '') {
    return {}
  }

  return state
}

export default userReducer
