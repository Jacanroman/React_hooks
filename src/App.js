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
import ComponentC from './components/context/ComponentC';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


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
      
      <UserContext.Provider value={'Javier'}>
        <ChannelContext.Provider value={'Candela'}>
          <ComponentC />
        </ChannelContext.Provider> 
      </UserContext.Provider>
      
      <Toggle />
      
    </div>
  )
}

export default App;
