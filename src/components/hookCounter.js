import React, {useState} from 'react';

function HookCounter(){

    const [count, setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }
    return(
        <div>
            <h1>Counter with Hooks</h1>
            <button onClick={increment}>Count {count}</button>
        </div>
    )
}

export default HookCounter;