import React from 'react';

const SampleGif = require('../public/sample.gif').default;

import './App.scss';

function App() {
  return (
    <div className="app">
      <img src={SampleGif} />
    </div>
  );
}

export default App;
