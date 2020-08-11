import React, { useState } from 'react';

import '../App.css';

function Toggle() {

  const [appState, setAppState] = useState({
    activeObject:null,
    objects: [{id:1},{id:2},{id:3},{id:4}]
  });

  function toggleActive(index){
    setAppState({...appState, activeObject: appState.objects[index]})
  }

  function toggleActiveStyles(index){
    if(appState.objects[index] === appState.activeObject){
      return "box active";
    }else{
      return "box inactive";
    }
  }

  return (
    <div>
      <h1>Hooks to toggle an active div</h1>
   
      <div className="App">
        
        {appState.objects.map((elements, index) =>(
          <div key={index} className={toggleActiveStyles(index)} onClick={()=>{toggleActive(index)}}>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Toggle;
