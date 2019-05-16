// action types
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY = 'SET_VISIBILITY'

export const VisibilityFilter = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED'
}

// action creators
export function addTodo (text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function toggleTodo (index) {
  return {
    type: TOGGLE_TODO,
    index
  }
}

export function setVisibilityFilter (filter) {
  return {
    type: SET_VISIBILITY,
    filter
  }
}
