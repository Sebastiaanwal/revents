import { INCREMENT_COUNTER, DECREMENT_COUNTER, COUNT_ACTION_STARTED, COUNT_ACTION_FINISHED } from './testConstants';

export const incrementCounter = () => {
  return {
    type: INCREMENT_COUNTER
  }
}

export const decrementCounter = () => {
  return {
    type: DECREMENT_COUNTER
  }
}

export const startCounterAction = () => {
  return {
    type: COUNT_ACTION_STARTED
  }
}
export const finishedCounterAction = () => {
  return {
    type: COUNT_ACTION_FINISHED
  }
}

const delay = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const incrementAsynch = () => {
  return async dispatch => {
    dispatch(startCounterAction())
    await delay(1000)
    dispatch({type: INCREMENT_COUNTER})
    dispatch(finishedCounterAction())
  }
}

export const decrementAsynch = () => {
  return async dispatch => {
    dispatch(startCounterAction())
    await delay(1000)
    dispatch({type: DECREMENT_COUNTER})
    dispatch(finishedCounterAction())
  }
}