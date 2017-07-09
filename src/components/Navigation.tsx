import * as React from 'react';
import { Link } from 'react-router-dom';

const Navigation = (): JSX.Element => (
  <nav className="navigation">
    <Link to="/">Home</Link>
    |
    <Link to="/stack">Stack</Link>
    |
    <Link to="/queue">Queue</Link>
    |
    <Link to="/array-list">ArrayList</Link>
    |
    <Link to="/linked-list">LinkedList</Link>
    |
    <Link to="/set">Set</Link>
    |
    <Link to="/map">Map</Link>
  </nav>
);

export default Navigation;