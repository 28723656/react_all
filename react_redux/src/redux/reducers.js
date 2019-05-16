import {combineReducers} from 'redux'

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  RECEIVE_COMMENTS
} from './action-types'

const initComments = []

function comments(state = initComments, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return [...state, action.data]
    case DELETE_COMMENT:
      return state.filter((comment, index) => index !== action.data)
    case RECEIVE_COMMENTS:
      return action.data
    default:
      return state
  }
}

/*
function counter(state = 0 ,action) {

  console.log('counter()',state  ,action)
  switch (action.type) {
    case INCREMENT:
      return state + action.data
    case DECREMENT:
      return state - action.data
    default:
      return state
  }

}*/


// 多个的情况
export default combineReducers({
  comments,
 /* counter*/
})

// redux向外暴露的state结构  { counter:2, comment:[{},{}]  }
