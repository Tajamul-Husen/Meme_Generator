import React, { Fragment } from 'react';
import Header from './Header';
import MemeGenerator from './MemeGenerator';
import '../styles/App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <MemeGenerator />
    </Fragment>
  );
}

export default App;
