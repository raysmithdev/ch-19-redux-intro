// these are desciribing what happened in the app from the user

// increment counter

// {
//   type: '',
//   payload
//   // name: 'ray'
// }



const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const increment = (number) => {
  return {
    type: INCREMENT_COUNTER,
    number
  }
}

// decrement counter
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const decrement = (number) => {
  return {
    type: DECREMENT_COUNTER,
    number
  }
}
