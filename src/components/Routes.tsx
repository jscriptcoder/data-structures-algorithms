import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Stack from '../pages/Stack';
import Queue from '../pages/Queue';
import ArrayList from '../pages/ArrayList';
import LinkedList from '../pages/LinkedList';
import Set from '../pages/Set';
import Map from '../pages/Map';

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/stack" component={Stack} />
    <Route path="/queue" component={Queue} />
    <Route path="/array-list" component={ArrayList} />
    <Route path="/linked-list" component={LinkedList} />
    <Route path="/set" component={Set} />
    <Route path="/map" component={Map} />
  </Switch>
);

export default Routes;