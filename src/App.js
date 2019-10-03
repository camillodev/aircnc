import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NewSpot from './pages/NewSpot';
import Menu from './_shared/Menu';

class App extends Component {
  render() {
    return (
    <Router>
        <>
          <Menu></Menu>
          <div className="app-container">
            <div className="content">
              <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/new-spot" component={NewSpot}/>
              </Switch>
            </div>
         </div>
        </>
      </Router>
    );
  }
}

export default App;