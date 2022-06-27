import React, { useEffect } from 'react';
import useStore from './store';

import People from './components/People';
import Input from './components/Input';

import './App.css';

function App() {
  // Best practice is destructuring the states, so that way, it will trigger only for the determined state that you want to modify
  const toogleDarkMode = useStore((state) => state.toogleDarkMode);
  const dark = useStore((state) => state.dark);
  
  useEffect(() => {
    if(dark){
      document.querySelector('body').classList.add('dark')
    }
    else{
      document.querySelector('body').classList.remove('dark')
    }
  }, [dark]) // dependency is dark

  return (
    <div className="App">
      <button onClick={toogleDarkMode}>Toogle Dark Mode</button>
      <p>People:</p>
      <Input/>
      <People />
    </div>
  );
}

export default App;