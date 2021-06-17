import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
  } from 'react-router-dom';
import NavBar from './NavBar';
import PostDetail from './PostDetail';
import PostList from './PostList';

//Component for routing to other components and navbar
const App = () => {
    return (

        <Router>
            <NavBar /> 
            <Switch>
                <Route path="/" exact>
                <PostList />
                </Route>
                <Route path="/post/:id" exact>
                <PostDetail />
                </Route>
                
                <Redirect to="/" />
            </Switch>
        </Router>
    )
}


export default App;