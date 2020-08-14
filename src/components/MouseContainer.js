import React, {useState, useEffect} from 'react';
import HookMouse from './hookMouse';


function MouseContainer(){
    const [display, setDisplay] = useState(true);

    return(
        <div>
            <h1>Display Hook Mouse</h1>
            <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouse />}
        </div>
    )
}

export default MouseContainer;