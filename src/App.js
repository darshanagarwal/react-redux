import React from 'react';
import {BrowserRouter as Router,Link, Route,Switch} from 'react-router-dom'
import Header from './components/Header';
import Task from './components/Task';
import Home from './components/Home';
import User from './components/User';
import Login from './components/Login';

function App() {
  return (
     <Router>
        <div className="container">
            <Header />
            <Switch>
               <Route exact path="/" exact component={Login} />
               <Route path="/home" exact component={Home} />
               <Route path="/task" exact component={Task} />
               <Route path="/user" exact component={User} />
            </Switch>
        </div>
     </Router>
  );
}

export default App;
