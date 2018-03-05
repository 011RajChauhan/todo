import { combineReducers } from 'redux'
import todos from './todos';
import visibilityFilter from './visibilityFilter';

/* export default function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
      }
} */

 export const todoApp = combineReducers({
    visibilityFilter,
    todos
  })
   
  export default todoApp 

//splitting reducers



