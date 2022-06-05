import React, { Component } from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
class App extends Component {
    state = {}
    render() {
        return (
        <div>
            <h1> this is client</h1>
            <PostCreate />
            <hr></hr>
            <PostList />
        </div>
        );
    }
}

export default App;