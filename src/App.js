import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Chat from './Chat/Chat';
import Login from './Login/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './store/StateProvider';

function App() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Router>
            <Dashboard/>
            <Switch>
              <Route path = "/rooms/:roomId">
                <Chat/>
              </Route>
              <Route path="/">
                <Chat/>
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
