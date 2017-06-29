import * as React from 'react';
import { Link } from 'react-router-dom';



const Navigation = (): JSX.Element => (
  <nav className="navigation">
    <Link to="/">Home</Link>
    <Link to="/stack">Stack</Link>
    <Link to="/queue">Queue</Link>
  </nav>
);

export default Navigation;