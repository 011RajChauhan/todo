import React from 'react';
import ReactDOM from 'react-dom';
import {addTodo, toggleTodo, setVisibilityFilter } from './actions/toDoActions'
import {VisibilityFilters} from './types/toDoActionTypes'
import App from './components/App';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './routes';

 console.log('--------------STORE STATUS-----------')
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})
/*
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
*/
unsubscribe() 

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>, document.getElementById('app'))