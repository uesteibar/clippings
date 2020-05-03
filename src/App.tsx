import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './Main'
import RandomHighlight from './RandomHighlight'
import ShowHighlight from './ShowHighlight'
import Navigation from './Navigation'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/random">
          <RandomHighlight />
        </Route>
        <Route path="/:highlightId">
          <ShowHighlight />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
