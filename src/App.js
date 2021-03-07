import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home} from "./pages/Home";
import {Rate} from "./pages/Rate";
import {Help} from "./pages/Help";

import {Navbar} from "./components/Navbar"

function App() {
  return (
    <Router>
      <Navbar />
      <div className="Container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rate"  component={Rate} />
          <Route path="/help"  component={Help} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
