import React, {useState, useEffect} from 'react';


function HookCounterEffect(){

    const [count, setCount] = useState(0)
    const [name, setName] = useState('');

    //Use effect is executed after every render.
    useEffect(()=>{
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    },[count])
    // UseEffect se ejecuta cuando count cambia

    return (
        <div>
            <h1>Use_Effect_hook_counter</h1>
            <h3>We add a title to show the times that we clicked</h3>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=>setCount(count+1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterEffect