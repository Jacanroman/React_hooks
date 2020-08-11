import React, { useState } from 'react';

import './App.css';
import Toggle from './components/toggle';
import HookCounter from './components/hookCounter';
import HookCounterTwo from './components/hookCounter2';
import HookCounterThree from './components/hookCounter3';
import HookCounterFour from './components/hookCounter4';

function App() {

  return(
    <div>
      
      <HookCounter />
      <HookCounterTwo/>
      <HookCounterThree />
      <HookCounterFour />
      <Toggle />
      
    </div>
  )
}

export default App;
