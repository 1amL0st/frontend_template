import React, { useState } from 'react';

const SampleGif = require('../public/sample.gif').default;

import './App.scss';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h2>Counter = {count}</h2>
      <button onClick={() => setCount(count + 1)}>Incrment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Counter />
      <img src={SampleGif} />
    </div>
  );
}

export default App;
