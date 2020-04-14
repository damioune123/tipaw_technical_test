import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactPage from './components/Contact/ContactPage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/contact" component={ContactPage}/>
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}
export default App;
