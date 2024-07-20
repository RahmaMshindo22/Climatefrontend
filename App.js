// App.js
import React from 'react';
import Navigation from './Navigation';
import Showcase from './Showcase';
import RAMessage from './RAMessage';
import Institutions from './Institutions';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Navigation />
      <Showcase />
      <RAMessage />
      <Institutions />
      <Footer />
    </div>
  );
};

export default App;
