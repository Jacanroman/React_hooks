import React, { useState } from 'react';

import './App.css';
import Toggle from './components/toggle';
import HookCounter from './components/hookCounter';
import HookCounterTwo from './components/hookCounter2';
import HookCounterThree from './components/hookCounter3';
import HookCounterFour from './components/hookCounter4';
import ClassCounterOne from './components/classCounterOne'
import HookCounterEffect from './components/hookCounterEffect';
import HookMouse from './components/hookMouse'
import MouseContainer from './components/MouseContainer'
import InternalHookCounter from './components/intervalHookCounter'
import DataFetching from './components/dataFecthing'
import DataFetching2 from './components/dataFetching2';

function App() {

  return(
    <div>
      
      <HookCounter />
      <HookCounterTwo/>
      <HookCounterThree />
      <HookCounterFour />
      <ClassCounterOne />
      <HookCounterEffect />
      <HookMouse />
      <MouseContainer />
      <InternalHookCounter />
      <DataFetching />
      <DataFetching2 />
      <Toggle />
      
    </div>
  )
}

export default App;
