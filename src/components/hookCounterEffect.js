import React, {useState, useEffect} from 'react';


function HookCounterEffect(){

    const [count, setCount] = useState(0)

    //Use effect is executed after every render
    useEffect(()=>{
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <h1>Use_Effect_hook_counter</h1>
            <h3>We add a title to show the times that we clicked</h3>
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterEffect