import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import ShowPosts from './components/ShowPosts';
import SinglePost from './components/SinglePost';
import EditPost from './components/EditPost';
import AddComment from './components/AddComment';

function App() {
  return (
    <>
    <Route exact path='/' component={ShowPosts} />
    <Route exact path='/:id' component={SinglePost} />
    <Route exact path='/:id/edit' component={EditPost} />
    <Route exact path='/:id/add-comment' component={AddComment} />
    </>
  );
}

export default App;
