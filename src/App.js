import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import ActivityList from './components/activity-list';
import EditActivity from './components/edit-activity';
import CreateActivity from './components/create-activity';
import CreateUser from './components/create-user';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ActivityList} />
        <Route path="/edit/:id" component={EditActivity} />
        <Route path="/create" component={CreateActivity} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
