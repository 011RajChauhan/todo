
import React, { Component } from 'react';
import {connect} from 'react-redux';
import InputPreview from '../components/InputPreview';
import { setMessage } from '../actions/message';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

/* class App extends Component {

    _onChange = (value) => {
        this.props.dispatch(setMessage(value));
    }
    render() {
        const {message} = this.props.messageReducer;
        return (
            <div>
                <p>This is my new react app</p>
                <InputPreview value = {message} onChange = {this._onChange}/>
                <Link to = "/about">
                    <button>Go to About</button>
                </Link>
            </div>
        );
    }
} */

const App = () => {
    return(
        <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
    )  
}
export default App;