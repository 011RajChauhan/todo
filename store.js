import {createStore, combineReducers, applyMiddleware} from 'redux';
import messageReducer from './reducers/message';
import todoApp from './reducers/reducers';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    messageReducer,
    todoApp
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;