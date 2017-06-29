import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Stack from '../pages/Stack';
import Queue from '../pages/Queue';



const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/stack" component={Stack} />
    <Route path="/queue" component={Queue} />
  </Switch>
);

export default Routes;