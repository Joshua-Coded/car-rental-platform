import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Home2 from './components/Home2';
import Weddings from './pages/Weddings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/weddings" component={Weddings} />
        <Route path="/business" component={Home2} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
