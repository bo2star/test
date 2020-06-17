import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Homepage from 'src/pages/Homepage';
import UpdatePage from 'src/pages/UpdatePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path="/:id" component={ UpdatePage } />
      </Switch>
    </Router>
  );
}

export default App;
