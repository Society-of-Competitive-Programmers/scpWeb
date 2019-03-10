//General Imports
import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Import Local Components
import Home from './components/Home';
import About from './components/About';
import Spotlight from './components/Spotlight';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Error from './components/Error';

//Import CSS
import './App.css';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/about" component={About} exact/>
            <Route path="/spotlight" component={Spotlight} exact/>
            <Route path="/schedule" component={Schedule} exact/>
            <Route path="/contact" component={Contact} exact/>
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
