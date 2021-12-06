import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Todo } from './pages/todopage/Todo';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/todo" component={Todo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
