import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Topics from './components/Topics';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/topics">Topics</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>

            <hr/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/topics" component={Topics}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
