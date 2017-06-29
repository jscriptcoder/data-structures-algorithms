import * as React from 'react';

import Navigation from './components/Navigation';
import Routes from './components/Routes';



const App = (): JSX.Element => (
  <div className="app">
    <header>
      <Navigation />  
    </header>

    <main>
      <Routes />
    </main>
    
    <footer></footer>
  </div>
);

export default App;