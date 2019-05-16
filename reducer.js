import { ADD_TODO, TOGGLE_TODO, VisibilityFilter, SET_VISIBILITY } from './actions'
import { combineReducers } from 'redux'

const initState = {
  todos: [],
  visibilityFilter: VisibilityFilter.SHOW_ALL
}

function todos (state = initState.todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, [
        ...state.todos,
        {
          id: state.todos.length,
          text: action.text,
          completed: false
        }
      ])
    case TOGGLE_TODO:
      return Object.assign({}, state,
        state.todos.map((todo, i) => {
          if (i === action.index) {
            return Object.assign({}, todo, { completed: !todo.completed })
          }
          return todo
        })
      )
    default:
      return state
  }
}

function visibility (state = initState.visibilityFilter, action) {
  switch (action.type) {
    case SET_VISIBILITY:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibility,
  todos
})

export default todoApp
