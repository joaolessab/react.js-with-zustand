import React from 'react';

import People from './components/People';
import Input from './components/Input';

import './App.css';

function App() {
  return (
    <div className="App">
      <p>People:</p>
      <Input/>
      <People />
    </div>
  );
}

export default App;